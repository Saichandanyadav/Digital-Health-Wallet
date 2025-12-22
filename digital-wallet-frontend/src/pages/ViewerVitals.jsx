import { useEffect, useState } from "react"
import { getVitals } from "../services/api"

export default function ViewerVitals() {
  const [vitals, setVitals] = useState([])

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
    const t = setInterval(load, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shared Health Vitals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vitals.map(v => (
          <div key={v.id} className="p-4 rounded shadow bg-white border-l-4 border-green-500">
            <h3 className="font-semibold text-lg">{v.name}</h3>
            <p className="text-xl font-bold">{v.value}</p>
            <p className="text-sm text-gray-500">{v.date}</p>
          </div>
        ))}
      </div>
      {vitals.length === 0 && <div className="text-center text-gray-500 mt-10">No vitals shared yet</div>}
    </div>
  )
}
