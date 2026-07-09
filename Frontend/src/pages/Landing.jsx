import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGithub,
  FiCpu,
} from "react-icons/fi";
import HeroEditor from "../components/HeroEditor";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#09090F] text-white overflow-hidden">

      {/* Background */}

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-600/20 blur-[180px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-indigo-500/20 blur-[180px] rounded-full" />

      {/* NAVBAR */}

      <header className="relative z-50">

        <nav className="max-w-7xl mx-auto px-8 py-7 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-violet-600 flex items-center justify-center font-bold text-xl">
              {"</>"}
            </div>

            <div>

              <h1 className="font-bold text-2xl">
                CodeInsight AI
              </h1>

              <p className="text-xs text-gray-500">
                AI Powered Code Reviewer
              </p>

            </div>

          </div>

          <div className="hidden lg:flex gap-10 text-gray-400">

            <a href="#" className="hover:text-white">
              Features
            </a>

            <a href="#" className="hover:text-white">
              Dashboard
            </a>

            <a href="#" className="hover:text-white">
              Reviews
            </a>

            <a href="#" className="hover:text-white">
              About
            </a>

          </div>

          <div className="flex gap-4">

            <Link
              to="/login"
              className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition"
            >
              Get Started
            </Link>

          </div>

        </nav>

      </header>

      {/* HERO */}

      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 px-5 py-2 rounded-full text-violet-300">

              <FiCpu />

              Gemini AI Powered

            </div>

            <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight">

              Write Better

              <br />

              Code With

              <span className="text-violet-400">

                {" "}AI

              </span>

            </h1>

            <p className="mt-8 text-xl text-gray-400 leading-9 max-w-xl">

              Review your Java, C++, Python,
              JavaScript and React code in seconds.

              Detect bugs, improve performance,
              follow best practices and learn while coding.

            </p>

            <div className="flex gap-5 mt-10">

              <Link
                to="/register"
                className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-xl font-semibold transition"
              >

                Start Reviewing

                <FiArrowRight />

              </Link>

              <button className="border border-white/10 hover:bg-white/5 px-8 py-4 rounded-xl transition">

                Live Demo

              </button>

            </div>

            <div className="flex flex-wrap gap-8 mt-10 text-gray-400">

              <div className="flex items-center gap-2">

                <FiCheckCircle className="text-green-400" />

                JWT Auth

              </div>

              <div className="flex items-center gap-2">

                <FiCheckCircle className="text-green-400" />

                Gemini AI

              </div>

              <div className="flex items-center gap-2">

                <FiCheckCircle className="text-green-400" />

                MongoDB

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <HeroEditor />

        </div>

      </section>
    </div>
  );
}