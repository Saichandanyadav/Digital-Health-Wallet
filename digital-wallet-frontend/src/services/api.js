const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

const getHeaders = (isJson = true) => {
  const token = localStorage.getItem("token")
  const headers = {}
  if (token) headers["Authorization"] = `Bearer ${token}`
  if (isJson) headers["Content-Type"] = "application/json"
  return headers
}

export const login = data =>
  fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(r => r.json())

export const register = data =>
  fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })

export const getVitals = () =>
  fetch(`${API}/vitals`, { headers: getHeaders() }).then(r => r.json())

export const addVital = data =>
  fetch(`${API}/vitals`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data)
  }).then(r => r.json())

export const getReports = () =>
  fetch(`${API}/reports`, { headers: getHeaders() }).then(r => r.json())

export const uploadReport = data =>
  fetch(`${API}/reports`, {
    method: "POST",
    headers: getHeaders(false),
    body: data
  }).then(r => r.json())

export const getSharedReports = () =>
  fetch(`${API}/reports`, { headers: getHeaders() }).then(r => r.json())
