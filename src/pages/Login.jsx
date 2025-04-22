import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    const validUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD;
  
    if (username === validUsername && password === validPassword) {
  localStorage.setItem("isAuthenticated", "true");
  setIsAuthenticated(true);
  navigate("/");
}
  };
  

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center "
      style={{ backgroundImage: "url('/admin_bg.jpg')" }}
    >
      <h1 className="text-white text-4xl font-bold mb-8 tracking-widest">ENVISION 2K25</h1>

      <div
        className="bg-black bg-opacity-90 rounded-2xl shadow-xl p-10 w-96 flex flex-col items-center bg-opacity-50"
      >
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-xl py-3 font-semibold hover:bg-blue-700 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
