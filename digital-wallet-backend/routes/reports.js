const express = require("express")
const multer = require("multer")
const path = require("path")
const auth = require("../middleware/auth")

const storage = multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb)=>{
    const ext = path.extname(file.originalname)
    cb(null,Date.now()+"-"+Math.round(Math.random()*1e9)+ext)
  }
})
const upload = multer({storage})

module.exports = db => {
  const r = express.Router()

  r.post("/", auth, upload.single("file"), (req,res)=>{
    if(req.role!=="owner") return res.sendStatus(403)
    const {title,type,date} = req.body
    db.run("INSERT INTO reports VALUES(NULL,?,?,?,?,?)",[req.userId,title,type,date,req.file.filename],()=>res.json({ok:true}))
  })

  r.get("/", auth, (req,res)=>{
    if(req.role==="owner"){
      db.all("SELECT * FROM reports WHERE user_id=?",[req.userId],(_,rows)=>{
        res.json(rows.map(r=>({...r,file:`uploads/${r.file}`})))
      })
    } else {
      db.all("SELECT * FROM reports",(_,rows)=>{
        res.json(rows.map(r=>({...r,file:`uploads/${r.file}`})))
      })
    }
  })

  return r
}
