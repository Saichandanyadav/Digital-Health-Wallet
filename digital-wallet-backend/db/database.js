const sqlite3 = require("sqlite3").verbose()
const path = require("path")

const dbPath = path.join(__dirname, "health.db")

function connectDb() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, err => {
      if (err) {
        reject(err)
      } else {
        db.serialize(() => {
          db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,email TEXT UNIQUE,password TEXT,role TEXT)")
          db.run("CREATE TABLE IF NOT EXISTS vitals (id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER,name TEXT,value TEXT,date TEXT)")
          db.run("CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER,title TEXT,type TEXT,date TEXT,file TEXT)")
          db.run("CREATE TABLE IF NOT EXISTS report_vitals (report_id INTEGER,vital_name TEXT)")
          db.run("CREATE TABLE IF NOT EXISTS shared_reports (report_id INTEGER,viewer_id INTEGER)")
          console.log("Database connected")
          resolve(db)
        })
      }
    })
  })
}

module.exports = connectDb
