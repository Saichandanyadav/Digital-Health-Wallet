import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
  const { token, role, logout } = useAuth()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <Link
          to={token ? (role === "owner" ? "/owner/vitals" : "/viewer/reports") : "/"}
          className="font-bold text-xl"
        >
          Health Wallet
        </Link>

        {!token && (
          <div className="flex gap-3">
            <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded">
              Login
            </Link>
            <Link to="/register" className="border px-3 py-1 rounded">
              Register
            </Link>
          </div>
        )}

        {token && (
          <div className="flex gap-3">
            {role === "owner" && (
              <>
                <Link to="/owner/vitals" className="px-3 py-1 border rounded">
                  Vitals
                </Link>
                <Link to="/owner/reports" className="px-3 py-1 border rounded">
                  Reports
                </Link>
              </>
            )}

            {role === "viewer" && (
              <>
                <Link to="/viewer/vitals" className="px-3 py-1 border rounded">
                  Vitals
                </Link>
                <Link to="/viewer/reports" className="px-3 py-1 border rounded">
                  Reports
                </Link>
              </>
            )}

            <button
              onClick={() => setOpen(true)}
              className="px-3 py-1 border rounded bg-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Confirm Logout
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded w-full mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setOpen(false)
                  logout()
                }}
                className="px-4 py-2 bg-red-500 text-white rounded w-full ml-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
