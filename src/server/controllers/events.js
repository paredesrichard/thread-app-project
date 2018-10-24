import SqlString from 'sqlstring';
import db from '../config/db';

export function listAllEvents(req, res) {
  const sql = SqlString.format('SELECT * FROM events WHERE active=?', [true]);
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
