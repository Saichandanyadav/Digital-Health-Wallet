import { useEffect, useState } from "react"
import { getSharedReports } from "../services/api"
import Modal from "../components/Modal"

export default function ViewerReports() {
  const [reports, setReports] = useState([])
  const [open, setOpen] = useState(null)

  const load = async () => {
    try {
      const data = await getSharedReports()
      setReports(Array.isArray(data) ? data : [])
    } catch {
      setReports([])
    }
  }

  useEffect(() => {
    load()
    const t = setInterval(load, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shared Reports</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reports.map(r => (
          <div key={r.id} className="p-4 bg-white border-l-4 border-green-500 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{r.title}</h3>
              <p className="text-sm text-gray-500">{r.date}</p>
            </div>
            <button onClick={() => setOpen(r.file)} className="bg-green-600 text-white px-3 py-1 rounded">Open</button>
          </div>
        ))}
      </div>
      {reports.length === 0 && <div className="text-center text-gray-500 mt-10">No reports shared yet</div>}
      <Modal open={open} onClose={() => setOpen(null)} />
    </div>
  )
}
