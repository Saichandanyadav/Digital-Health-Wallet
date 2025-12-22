import { useState, useEffect } from "react"
import { register } from "../services/api"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Register() {
  const nav = useNavigate()
  const { token, role } = useAuth()
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "viewer" })

  useEffect(() => {
    if (token) nav(role === "owner" ? "/owner/vitals" : "/viewer/reports", { replace: true })
  }, [token])

  const submit = async e => {
    e.preventDefault()
    await register(form)
    nav("/login", { replace: true })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="hidden md:block">
        <img src="/register.png" alt="Register" className="h-full w-full object-cover"/>
      </div>
      <form onSubmit={submit} className="flex flex-col justify-center items-center p-10 gap-4">
        <h2 className="text-2xl mb-4">Register</h2>
        <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} className="p-2 border rounded w-full"/>
        <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} className="p-2 border rounded w-full"/>
        <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} className="p-2 border rounded w-full"/>
        <select onChange={e => setForm({ ...form, role: e.target.value })} className="p-2 border rounded w-full">
          <option value="viewer">Viewer</option>
          <option value="owner">Owner</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Register</button>
      </form>
    </div>
  )
}
