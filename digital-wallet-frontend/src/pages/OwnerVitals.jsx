import { useEffect, useState } from "react"
import { getVitals, addVital } from "../services/api"

export default function OwnerVitals() {
  const [vitals, setVitals] = useState([])
  const [form, setForm] = useState({ name: "", value: "", date: "" })
  const [loading, setLoading] = useState(false)

  const load = async () => {
    try {
      const data = await getVitals()
      setVitals(Array.isArray(data) ? data : [])
    } catch {
      setVitals([])
    }
  }

  useEffect(() => {
    load()
  }, [])

  const submit = async e => {
    e.preventDefault()
    if (!form.name || !form.value || !form.date) return
    setLoading(true)
    await addVital(form)
    setForm({ name: "", value: "", date: "" })
    await load()
    setLoading(false)
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Health Vitals</h1>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-white p-4 rounded shadow">
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Vital Name" className="border p-2 rounded"/>
        <input value={form.value} onChange={e=>setForm({...form,value:e.target.value})} placeholder="Value" className="border p-2 rounded"/>
        <input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} className="border p-2 rounded"/>
        <button disabled={loading} className="bg-blue-600 text-white rounded px-4">{loading ? "Saving..." : "Add Vital"}</button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {vitals.map(v => (
          <div key={v.id} className="p-4 rounded shadow bg-gradient-to-r from-blue-50 to-blue-100">
            <h3 className="font-semibold text-lg">{v.name}</h3>
            <p className="text-xl font-bold">{v.value}</p>
            <p className="text-sm text-gray-600">{v.date}</p>
          </div>
        ))}
      </div>
      {vitals.length === 0 && <div className="text-center text-gray-500 mt-10">No vitals added yet</div>}
    </div>
  )
}
