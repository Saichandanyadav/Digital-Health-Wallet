import { useState, useEffect } from "react"
import { login as loginApi } from "../services/api"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const { login, token, role } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (token) navigate(role === "owner" ? "/owner/vitals" : "/viewer/reports", { replace: true })
  }, [token])

  const submit = async e => {
    e.preventDefault()
    const res = await loginApi({ email, password })
    if (res.token) login(res.token, res.role)
    else alert(res.message || "Invalid login")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="hidden md:block">
        <img src="/login.png" alt="Login" className="h-full w-full object-cover"/>
      </div>
      <form onSubmit={submit} className="flex flex-col justify-center items-center p-10 gap-4 w-full">
        <h2 className="text-2xl mb-4">Login</h2>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="p-2 border rounded w-full"/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="p-2 border rounded w-full"/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  )
}
