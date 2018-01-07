const sqlite3    = require('sqlite3').verbose();
const db         = new sqlite3.Database('./models/Plane.db');

class Plane {
  static addPlane (data, cb) {
    let queryInsert = `INSERT INTO Planes
                       (name, img, desc, price)
                       VALUES
                       ('${data.name}', '${data.img}', '${data.desc}', '${data.price}')`
    db.run(queryInsert, (err) => {
      if(err) cb(err, null)
      else {
        cb(null, 'OK')
      }
    })
  }

  static getPlanes (cb) {
    let queryGetPlanes = `SELECT * from Planes`
    db.all(queryGetPlanes, (err, data) => {
      if(err) cb(err, null)
      else {
        cb (null, data)
      }
    })
  }

  static getPlane (id, cb) {
    let queryGetPlanes = `SELECT * from Planes WHERE id=${id}`
    db.each(queryGetPlanes, (err, data) => {
      if(err) cb(err, null)
      else {
        cb (null, data)
      }
    })
  }

  static editPlane (id, newPlane, cb) {
    let queryEditPlane = `UPDATE Planes SET
                          name = '${newPlane.name}',
                          img = '${newPlane.img}',
                          desc = '${newPlane.desc}',
                          price = '${newPlane.price}'
                          WHERE
                          id = ${id}`
    db.run(queryEditPlane, (err) => {
      if(err) cb(err, null)
      else {
        cb(null, 'OK')
      }
    })
  }

  static deletePlane (id, cb) {
    let deletePlane = `DELETE FROM Planes
                          WHERE
                          id = ${id}`
    db.run(deletePlane, (err) => {
      if(err) cb(err, null)
      else {
        cb(null, 'OK')
      }
    })
  }
}

module.exports = Plane;
