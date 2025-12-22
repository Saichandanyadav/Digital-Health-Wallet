const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api"
const BASE = API.replace("/api", "")

export default function Modal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-4/5 h-4/5 flex flex-col">
        <button
          className="self-end bg-red-500 text-white px-2 py-1 rounded"
          onClick={onClose}
        >
          Close
        </button>
        <iframe
          src={`${BASE}/${open}`}
          className="w-full h-full mt-2 rounded"
        />
      </div>
    </div>
  )
}
