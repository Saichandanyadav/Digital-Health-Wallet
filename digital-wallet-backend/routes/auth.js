const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secret = process.env.JWT_SECRET || "health_wallet_secret"

module.exports = db => {
  const r = express.Router()

  r.post("/register", (req, res) => {
    const { name, email, password, role } = req.body
    const hash = bcrypt.hashSync(password, 8)
    db.run("INSERT INTO users VALUES(NULL,?,?,?,?)", [name, email, hash, role], err => {
      if (err) return res.status(400).json({ message: "User exists" })
      res.json({ message: "Registered" })
    })
  })

  r.post("/login", (req, res) => {
    const { email, password } = req.body
    db.get("SELECT * FROM users WHERE email=?", [email], (_, user) => {
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid login" })
      }
      const token = jwt.sign({ id: user.id, role: user.role }, secret, { expiresIn: "1d" })
      res.json({ token, role: user.role })
    })
  })

  return r
}