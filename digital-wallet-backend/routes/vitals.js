const express = require("express")
const auth = require("../middleware/auth")

module.exports = db => {
  const r = express.Router()

  r.post("/", auth, (req,res)=>{
    if(req.role!=="owner") return res.sendStatus(403)
    const {name,value,date} = req.body
    db.run("INSERT INTO vitals VALUES(NULL,?,?,?,?)",[req.userId,name,value,date],()=>res.json({ok:true}))
  })

  r.get("/", auth, (req,res)=>{
    if(req.role==="owner"){
      db.all("SELECT * FROM vitals WHERE user_id=?",[req.userId],(_,rows)=>res.json(rows))
    } else {
      db.all("SELECT * FROM vitals",(_,rows)=>res.json(rows))
    }
  })

  return r
}
