const express = require("express")
const auth = require("../middleware/auth")

module.exports = db => {
  const r = express.Router()

  r.post("/", auth, (req,res)=>{
    if(req.role!=="owner") return res.sendStatus(403)
    const {reportId,viewerId} = req.body
    db.run("INSERT INTO shared_reports VALUES(?,?)",[reportId,viewerId],()=>res.json({ok:true}))
  })

  return r
}
