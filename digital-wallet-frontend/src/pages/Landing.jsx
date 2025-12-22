import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-4">Digital Health Wallet</h1>
      <div className="flex gap-4">
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white">Login</Link>
        <Link to="/register" className="px-4 py-2 border">Register</Link>
      </div>
    </div>
  );
}
