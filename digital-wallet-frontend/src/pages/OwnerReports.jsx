import { useEffect, useState } from "react"
import { getReports, uploadReport } from "../services/api"
import Modal from "../components/Modal"

export default function OwnerReports() {
  const [reports, setReports] = useState([])
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState("")
  const [open, setOpen] = useState(null)
  const [loading, setLoading] = useState(false)

  const load = async () => {
    try {
      const data = await getReports()
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

  const submit = async () => {
    if (!file || !title) return
    setLoading(true)
    const fd = new FormData()
    fd.append("file", file)
    fd.append("type", "PDF")
    fd.append("date", new Date().toISOString().slice(0, 10))
    fd.append("title", title)
    await uploadReport(fd)
    setTitle("")
    setFile(null)
    await load()
    setLoading(false)
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Medical Reports</h1>
      <div className="bg-white shadow rounded p-4 grid grid-cols-1 md:grid-cols-4 gap-3">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Report Title" className="border p-2 rounded"/>
        <input type="file" onChange={e => setFile(e.target.files[0])} className="border p-2 rounded md:col-span-2"/>
        <button disabled={loading} onClick={submit} className="bg-blue-600 text-white rounded">{loading ? "Uploading..." : "Upload Report"}</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {reports.map(r => (
          <div key={r.id} className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{r.title}</h3>
              <p className="text-sm text-gray-600">{r.date}</p>
            </div>
            <button onClick={() => setOpen(r.file)} className="bg-green-600 text-white px-3 py-1 rounded">View</button>
          </div>
        ))}
      </div>
      {reports.length === 0 && <div className="text-center text-gray-500 mt-10">No reports uploaded yet</div>}
      <Modal open={open} onClose={() => setOpen(null)} />
    </div>
  )
}
