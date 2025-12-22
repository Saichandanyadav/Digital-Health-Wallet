const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) return res.status(401).json({ message: "Token missing" })

  jwt.verify(token, process.env.JWT_SECRET || "health_wallet_secret", (err, data) => {
    if (err) return res.status(401).json({ message: "Invalid token" })
    req.userId = data.id
    req.role = data.role
    next()
  })
}
