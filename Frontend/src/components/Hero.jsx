import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import HeroEditor from "./HeroEditor";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 lg:px-16 py-28">

      <div className="grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
            🚀 AI Powered Code Review
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">

            AI Reviews That

            <br />

            Developers

            <span className="block text-violet-400">
              Actually Trust.
            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

            Paste your code and receive instant AI-powered feedback on
            bugs, performance, security and coding best practices in
            seconds.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-12">

            <Link
              to="/register"
              className="bg-violet-600 hover:bg-violet-700 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-violet-600/20"
            >
              Start Reviewing
              <FiArrowRight />
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition"
            >
              Live Demo
            </Link>

          </div>

          {/* Bottom Tags */}

          <div className="flex flex-wrap gap-6 mt-10 text-gray-400 text-sm">

            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-400" />
              Gemini AI
            </div>

            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-400" />
              JWT Authentication
            </div>

            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-400" />
              Multi Language Support
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <HeroEditor />
        </motion.div>

      </div>

    </section>
  );
}