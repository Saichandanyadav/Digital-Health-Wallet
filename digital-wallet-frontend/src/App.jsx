import { BrowserRouter,Routes,Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./routes/ProtectedRoute"
import Navbar from "./components/Navbar"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import OwnerVitals from "./pages/OwnerVitals"
import OwnerReports from "./pages/OwnerReports"
import ViewerReports from "./pages/ViewerReports"
import ViewerVitals from "./pages/ViewerVitals"

export default function App(){
  return(
    <BrowserRouter>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/owner/vitals" element={<ProtectedRoute role="owner"><OwnerVitals/></ProtectedRoute>}/>
          <Route path="/owner/reports" element={<ProtectedRoute role="owner"><OwnerReports/></ProtectedRoute>}/>
          <Route path="/viewer/vitals" element={<ProtectedRoute role="viewer"><ViewerVitals/></ProtectedRoute>}/>
          <Route path="/viewer/reports" element={<ProtectedRoute role="viewer"><ViewerReports/></ProtectedRoute>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
