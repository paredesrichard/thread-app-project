import SqlString from 'sqlstring';
import db from '../config/db';

export function listAllEvents(req, res) {
  const sql = SqlString.format(
    'SELECT * FROM events WHERE active=? ORDER BY event_start_date ASC',
    [true],
  );
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

export function createEvents(req, res) {
  const jsonData = req.body;
  const sql = SqlString.format(`INSERT INTO events SET ?`, jsonData);
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

export function getEventsById(req, res) {
  const eventsId = req.params.id;
  const sql = SqlString.format(
    'SELECT * FROM events WHERE id = ? AND active = ?',
    [eventsId, true],
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

export function updateEvents(req, res) {
  const eventsId = req.params.id;
  const jsonData = req.body;

  const sql = SqlString.format(`UPDATE events SET ? WHERE id = ?`, [
    jsonData,
    eventsId,
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

export function deleteEvents(req, res) {
  const eventsId = req.params.id;
  const sql = SqlString.format(`UPDATE events SET ? WHERE id = ?`, [
    {
      active: false,
    },
    eventsId,
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

export function searchEvents(req, res) {
  /*  check and see if the order is Desc, else set the default to ASC */
  const sortOrder = req.query.sort !== 'DESC' ? 'ASC' : 'DESC';

  /*  Reconstruct and enclosed the searchFieldValue passed to the api inside '% %'  */
  const searchFieldValue = `%${req.query.searchKeyword}%`;
  // const searchFieldName = Object.keys(req.query)[0];

  console.log('event_start_date is ', req.query.event_start_date);
  console.log('event_end_date is', req.query.event_end_date);
  let selectQuery = SqlString.format(
    'SELECT * FROM events WHERE active=? AND (event_name LIKE ? or event_type LIKE ? OR event_address LIKE ? OR event_city LIKE ? OR event_agenda LIKE ? OR contact_person LIKE ?)',
    [
      true,
      searchFieldValue,
      searchFieldValue,
      searchFieldValue,
      searchFieldValue,
      searchFieldValue,
      searchFieldValue,
    ],
  );
  if (
    req.query.event_start_date !== 'Invalid date' &&
    req.query.event_start_date
  )
    selectQuery = SqlString.format(`${selectQuery} and event_start_date >= ?`,[req.query.event_start_date],);
  if (req.query.event_end_date && req.query.event_end_date !== 'Invalid date')
    selectQuery = SqlString.format(`${selectQuery}  and event_end_date <= ?`, [
      req.query.event_end_date,
    ]);

  selectQuery = SqlString.format(`${selectQuery} order by ?? ?`, [
    req.query.orderby,
    SqlString.raw(sortOrder),
  ]);
  console.log('selectQuery:', selectQuery);
  // const sql = SqlString.format(selectQuery, [
  //   true,
  //   searchFieldName.trim(),
  //   searchFieldValue.trim(),
  //   req.query.event_start_date.trim(),
  //   req.query.event_end_date.trim(),
  //   req.query.orderby,
  //   SqlString.raw(sortOrder),
  // ]);

  // console.log('sql', sql);

  db.execute(selectQuery, (err, rows) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }
    res.send(rows);
  });
}
