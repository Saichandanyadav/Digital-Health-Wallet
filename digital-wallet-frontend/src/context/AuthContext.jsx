import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [role, setRole] = useState(localStorage.getItem("role"))

  const login = (t, r) => {
    localStorage.setItem("token", t)
    localStorage.setItem("role", r)
    setToken(t)
    setRole(r)
    navigate(r === "owner" ? "/owner/vitals" : "/viewer/reports", { replace: true })
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    setToken(null)
    setRole(null)
    navigate("/login", { replace: true })
  }

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
