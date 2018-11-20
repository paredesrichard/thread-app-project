import SqlString from 'sqlstring';
import db from '../config/db';

export function listAllMentors(req, res) {
  const sql = SqlString.format('SELECT * FROM mentors WHERE active=?', [true]);
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

export function createMentor(req, res) {
  const jsonData = req.body;
  const sql = SqlString.format(`INSERT INTO mentors SET ?`, jsonData);
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

//  Previous version of search
// export function searchMentor(req, res){
//   const queryName = req.query.name;
//   const queryLocation = req.query.location;
//   console.log(queryName,queryLocation);
// const sql = SqlString.format('SELECT * FROM mentors WHERE (first_name LIKE ? OR last_name LIKE ?) AND active=? AND area_location LIKE ?', [
//   `%${queryName}%`,`%${queryName}%`,true,`%${queryLocation}%`,
// ]);
//    console.log(sql);

//   db.execute(sql, (err, result) => {
//     if (err) {
//       // throw err;
//       res.status(500).send(err);
//       return;
//     }
//     if (result.length === 0) {
//       res.status(404).send('Not Found');
//       return;
//     }
//     // console.log(result);

//     res.send(result);
//   });
// }

//  New version of search
export function searchMentor(req, res) {
  /*  check and see if the order is Desc, else set the default to ASC */
  const sortOrder = req.query.sort !== 'DESC' ? 'ASC' : 'DESC';

  /*  Reconstruct and enclosed the searchFieldValue passed to the api inside '% %'  */
  const searchFieldValue = `%${req.query[Object.keys(req.query)[0]]}%`;

  let sql = '';

  if (Object.keys(req.query)[0] === 'name') {
    sql = SqlString.format(
      'SELECT * FROM mentors WHERE active=? AND first_name LIKE ? OR last_name LIKE ? ORDER BY first_name ?',
      [true, searchFieldValue, searchFieldValue, SqlString.raw(sortOrder)],
    );
  } else {
    const searchFieldName = Object.keys(req.query)[0];
    sql = SqlString.format(
      'SELECT * FROM mentors WHERE active=? AND ?? LIKE ? order by ?? ?',
      [
        true,
        searchFieldName,
        searchFieldValue,
        req.query.orderby,
        SqlString.raw(sortOrder),
      ],
    );
  }

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

export function getMentorById(req, res) {
  const mentorId = req.params.id;
  const sql = SqlString.format(
    'SELECT * FROM mentors WHERE id = ? AND active = ?',
    [mentorId, true],
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

export function updateMentor(req, res) {
  const mentorId = req.params.id;
  const jsonData = req.body;

  const sql = SqlString.format(`UPDATE mentors SET ? WHERE id = ?`, [
    jsonData,
    mentorId,
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

export function deleteMentor(req, res) {
  const mentorId = req.params.id;
  const sql = SqlString.format(`UPDATE mentors SET ? WHERE id = ?`, [
    {
      active: false,
    },
    mentorId,
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
