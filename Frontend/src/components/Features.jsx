import { motion } from "framer-motion";
import {
  FiShield,
  FiZap,
  FiCode,
  FiTrendingUp,
  FiClock,
  FiCpu,
} from "react-icons/fi";

const features = [
  {
    icon: <FiCpu size={32} />,
    title: "AI Code Review",
    desc: "Get instant feedback on bugs, security issues and code quality using Gemini AI.",
  },
  {
    icon: <FiShield size={32} />,
    title: "Security Analysis",
    desc: "Detect SQL Injection, XSS vulnerabilities and insecure coding practices.",
  },
  {
    icon: <FiZap size={32} />,
    title: "Lightning Fast",
    desc: "Receive detailed reviews within seconds without slowing your workflow.",
  },
  {
    icon: <FiCode size={32} />,
    title: "Best Practices",
    desc: "Improve readability, maintainability and follow industry coding standards.",
  },
  {
    icon: <FiTrendingUp size={32} />,
    title: "Performance Tips",
    desc: "Optimize algorithms and improve execution speed with AI suggestions.",
  },
  {
    icon: <FiClock size={32} />,
    title: "Save Time",
    desc: "Spend less time debugging and more time building amazing products.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-28">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
        className="text-center"
      >

        <span className="text-violet-400 uppercase tracking-[5px] font-semibold">
          FEATURES
        </span>

        <h2 className="text-5xl font-bold mt-4">
          Why Developers Love
          <span className="text-violet-400"> CodeInsight AI</span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-8">
          Everything you need to write cleaner, faster and more secure code —
          all powered by AI.
        </p>

      </motion.div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

        {features.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .1 }}
            viewport={{ once: true }}
            className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500 hover:-translate-y-2 transition-all duration-300"
          >

            <div className="w-16 h-16 rounded-2xl bg-violet-600/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition">

              {item.icon}

            </div>

            <h3 className="text-2xl font-semibold mt-8">

              {item.title}

            </h3>

            <p className="text-gray-400 mt-5 leading-8">

              {item.desc}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}