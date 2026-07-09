import { motion } from "framer-motion";

export default function HeroEditor() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[720px] rounded-3xl border border-white/10 bg-[#121826] shadow-[0_20px_80px_rgba(124,58,237,0.25)] overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#171e2d]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>

        <div className="flex gap-6 text-sm">
          <span className="text-white font-medium border-b-2 border-violet-500 pb-1">
            auth.py
          </span>
          <span className="text-gray-500">utils.ts</span>
        </div>

        <div className="w-10"></div>
      </div>

      {/* Code */}
      <div className="p-6 font-mono text-[15px] leading-8">

        <div className="flex">
          <span className="text-gray-600 w-8">1</span>

          <span>
            <span className="text-purple-400">def</span>{" "}
            <span className="text-blue-400">get_user</span>
            <span className="text-white">(user_id):</span>
          </span>
        </div>

        <div className="flex mt-2">
          <span className="text-gray-600 w-8">2</span>

          <div className="w-full rounded-lg bg-[#2b2324] border-l-4 border-orange-400 px-4 py-2">
            <span className="text-orange-300">
              query = "SELECT * FROM users WHERE id=" + user_id
            </span>
          </div>
        </div>

        {/* AI Suggestion */}

        <div className="ml-8 mt-4 rounded-xl border border-violet-500 bg-[#1d2335] p-5">

          <div className="flex items-center gap-2">

            <div className="bg-violet-500 text-xs px-2 py-1 rounded text-white">
              AI
            </div>

            <h3 className="text-violet-300 font-semibold">
              Security Issue
            </h3>

          </div>

          <p className="text-gray-400 mt-3 leading-7">
            SQL Injection detected.
            Use a parameterized query instead of
            string concatenation.
          </p>

        </div>

        <div className="flex mt-5">
          <span className="text-gray-600 w-8">3</span>

          <div className="w-full rounded-lg bg-[#173127] border-l-4 border-green-400 px-4 py-2">
            <span className="text-green-300">
              return db.execute(query, [user_id])
            </span>
          </div>
        </div>

        <div className="ml-8 mt-4 rounded-xl border border-green-500 bg-[#16251d] p-5">

          <div className="flex items-center gap-2">

            <div className="bg-green-500 text-xs px-2 py-1 rounded text-white">
              FIX
            </div>

            <h3 className="text-green-300 font-semibold">
              Suggested Fix
            </h3>

          </div>

          <p className="text-gray-400 mt-3 leading-7">
            Prepared statements prevent SQL injection and
            improve security by separating data from SQL queries.
          </p>

        </div>

      </div>
    </motion.div>
  );
}