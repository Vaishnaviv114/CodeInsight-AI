import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto flex items-center justify-between px-8 py-7"
    >
      {/* Logo */}

      <Link to="/" className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center font-bold text-xl shadow-lg shadow-violet-700/40">

          {"</>"}

        </div>

        <div>

          <h1 className="text-2xl font-bold text-white">
            CodeInsight AI
          </h1>

          <p className="text-xs text-gray-500">
            AI Powered Code Reviewer
          </p>

        </div>

      </Link>

      {/* Links */}

      <div className="hidden md:flex items-center gap-10 text-gray-400">

        <a href="#" className="hover:text-white transition">
          Features
        </a>

        <a href="#" className="hover:text-white transition">
          Pricing
        </a>

        <a href="#" className="hover:text-white transition">
          About
        </a>

      </div>

      {/* Buttons */}

      <div className="flex gap-4">

        <Link
          to="/login"
          className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition shadow-lg shadow-violet-600/30"
        >
          Get Started
        </Link>

      </div>
    </motion.nav>
  );
}