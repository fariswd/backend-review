var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./models/Plane.db');

db.serialize(()=>{
  //set query!!
  let plane = `CREATE TABLE IF NOT EXISTS Planes (
                  id          INTEGER PRIMARY KEY AUTOINCREMENT,
                  name        VARCHAR(50) NOT NULL,
                  img         TEXT,
                  desc        TEXT,
                  price       INTEGER
                  )`;

  //create table!!!
  db.run(plane, ()=>{console.log('table Plane added');});

})

db.close();
