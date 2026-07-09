import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-5">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Login to continue
        </p>

        <form className="space-y-5">

          <div>
            <label className="text-gray-300">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-gray-300">Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 p-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-indigo-500"
            />
          </div>

          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-lg text-white font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}