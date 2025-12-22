require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDb = require("./db/database")

const auth = require("./routes/auth")
const vitals = require("./routes/vitals")
const reports = require("./routes/reports")
const share = require("./routes/share")

const PORT = process.env.PORT || 5000

connectDb()
  .then(db => {
    console.log("Database connected")

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/uploads", express.static("uploads"))

    app.use("/api/auth", auth(db))
    app.use("/api/vitals", vitals(db))
    app.use("/api/reports", reports(db))
    app.use("/api/share", share(db))

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch(err => {
    console.error("Database connection failed", err)
  })
