import SqlString from 'sqlstring';
import db from '../config/db';

export function listAllNetworking(req, res) {
  const sql = SqlString.format('SELECT * FROM networking WHERE active=?', [
    true,
  ]);
  console.log(sql);
  db.execute(sql, (err, rows) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    res.send(rows);
  });
}

export function createNetworking(req, res) {
  const jsonData = req.body;
  const sql = SqlString.format(`INSERT INTO networking SET ?`, jsonData);
  console.log(sql);

  db.execute(sql, (err, result) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    console.log(result);

    res.send('success');
  });
}

// export function searchNetwork(req, res) {
//   const searchName = `%${req.query.name}%`;
//   const searchCity = `%${req.query.location}%`;
//   console.log('name', searchName);

//   const sql = SqlString.format(
//     'SELECT * FROM networking WHERE (organisation_name LIKE ? or organisation_description LIKE ? ) AND organisation_city LIKE ? AND active = ?',
//     [searchName, searchName, searchCity, true],
//   );
//   console.log(sql);

//   db.execute(sql, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//       return;
//     }

//     if (result.length === 0) {
//       res.status(404).send('Not Found');
//       return;
//     }

//     res.send(result);
//   });
// }

//  New Search API for Networking
export function searchNetworking(req, res) {
  /*  check and see if the order is Desc, else set the default to ASC */
  const sortOrder = req.query.sort !== 'DESC' ? 'ASC' : 'DESC';

  /*  Reconstruct and enclosed the searchFieldValue passed to the api inside '% %'  */
  const searchFieldValue = `%${req.query[Object.keys(req.query)[0]]}%`;
  const searchFieldName = Object.keys(req.query)[0];

  const sql = SqlString.format(
    'SELECT * FROM networking WHERE active=? AND ?? LIKE ? order by ?? ?',
    [
      true,
      searchFieldName,
      searchFieldValue,
      req.query.orderby,
      SqlString.raw(sortOrder),
    ],
  );

  console.log('sql', sql);

  db.execute(sql, (err, rows) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    res.send(rows);
  });
}

export function getNetworkingById(req, res) {
  const networkingId = req.params.id;
  const sql = SqlString.format(
    'SELECT * FROM networking WHERE id = ? AND active = ?',
    [networkingId, true],
  );
  console.log(sql);

  db.execute(sql, (err, rows) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    if (rows.length === 0) {
      res.status(404).send('Not Found');
      return;
    }

    res.send(rows[0]);
  });
}

export function updateNetworking(req, res) {
  const networkingId = req.params.id;
  const jsonData = req.body;

  const sql = SqlString.format(`UPDATE networking SET ? WHERE id = ?`, [
    jsonData,
    networkingId,
  ]);

  console.log(sql);

  db.execute(sql, (err, result) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    if (!result.affectedRows) {
      res.status(404).send('Not Found');
      return;
    }

    res.send('success');
  });
}

export function deleteNetworking(req, res) {
  const networkingId = req.params.id;
  const sql = SqlString.format(`UPDATE networking SET ? WHERE id = ?`, [
    {
      active: false,
    },
    networkingId,
  ]);

  console.log(sql);

  db.execute(sql, (err, result) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    if (!result.affectedRows) {
      res.status(404).send('Not Found');
      return;
    }

    res.send('success');
  });
}
