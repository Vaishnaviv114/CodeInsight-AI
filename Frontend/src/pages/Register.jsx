import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/auth/register",
        formData
      );

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090F] flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute w-[450px] h-[450px] bg-violet-700/20 blur-[170px] rounded-full top-0 left-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[170px] rounded-full bottom-0 right-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: .95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .6 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl"
      >

        <h1 className="text-4xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Join CodeInsight AI today
        </p>

        {/* Name */}

        <div className="mt-8">

          <label className="text-gray-300 text-sm">
            Full Name
          </label>

          <div className="mt-2 flex items-center gap-3 bg-[#14141d] border border-white/10 rounded-xl px-4 py-4">

            <FiUser className="text-violet-400 text-xl"/>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
            />

          </div>

        </div>

        {/* Email */}

        <div className="mt-6">

          <label className="text-gray-300 text-sm">
            Email
          </label>

          <div className="mt-2 flex items-center gap-3 bg-[#14141d] border border-white/10 rounded-xl px-4 py-4">

            <FiMail className="text-violet-400 text-xl"/>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
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

            <FiLock className="text-violet-400 text-xl"/>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
            />

          </div>

        </div>

        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full mt-8 bg-violet-600 hover:bg-violet-700 transition rounded-xl py-4 font-semibold text-white disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="text-gray-400 text-center mt-8">

          Already have an account?

          <Link
            to="/login"
            className="text-violet-400 ml-2"
          >
            Login
          </Link>

        </p>

      </motion.div>

    </div>
  );
}