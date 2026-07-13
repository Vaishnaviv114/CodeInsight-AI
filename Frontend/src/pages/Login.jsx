import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://codeinsight-ai-backend-xml9.onrender.com/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090F] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute w-[450px] h-[450px] bg-violet-700/20 blur-[170px] rounded-full top-0 left-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[170px] rounded-full bottom-0 right-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Login to continue using CodeInsight AI
        </p>

        {/* Email */}
        <div className="mt-8">
          <label className="text-gray-300 text-sm">
            Email
          </label>

          <div className="mt-2 flex items-center gap-3 bg-[#14141d] border border-white/10 rounded-xl px-4 py-4">
            <FiMail className="text-violet-400 text-xl" />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-6">
          <label className="text-gray-300 text-sm">
            Password
          </label>

          <div className="mt-2 flex items-center gap-3 bg-[#14141d] border border-white/10 rounded-xl px-4 py-4">
            <FiLock className="text-violet-400 text-xl" />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-8 bg-violet-600 hover:bg-violet-700 transition duration-300 rounded-xl py-4 font-semibold text-white disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-gray-400 text-center mt-8">
          Don't have an account?

          <Link
            to="/register"
            className="text-violet-400 ml-2 hover:text-violet-300"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}