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
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/admin_bg.jpg')" }}
    >
      <h1 className="text-white text-5xl font-bold mb-10 tracking-widest">ENVISION 2K25</h1>

      <div className="relative rounded-2xl  w-[700px] h-[700px] flex flex-col items-center justify-center overflow-hidden">
        {/* Bigger and darker background image */}
        <img
          src="/login-center.png"
          alt="Login Center"
          className="absolute inset-0 w-full h-full object-contain opacity-90 brightness-100 scale-125 rounded-2xl"
        />

        {/* Transparent form with reduced field/button width */}
        <form onSubmit={handleLogin} className="w-full max-w-sm px-4 flex flex-col gap-5 relative z-10">
          <input
            type="text"
            placeholder="Username"
            className="bg-black border-gray-300 text-white p-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-black border-gray-300 text-white p-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-xl py-2 text-sm font-semibold hover:bg-blue-700 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
