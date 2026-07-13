import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiLogOut,
  FiCode,
} from "react-icons/fi";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      isActive
        ? "bg-violet-600 text-white shadow-lg"
        : "text-gray-400 hover:bg-[#1b1b28] hover:text-white"
    }`;

  return (
    <aside className="w-72 h-screen bg-[#0F0F18] border-r border-white/10 flex flex-col justify-between p-6">

      <div>

        {/* Logo */}

        <div className="flex items-center gap-3 mb-12">

          <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-white text-xl font-bold">
            <FiCode />
          </div>

          <div>
            <h1 className="text-white text-2xl font-bold">
              CodeInsight
            </h1>

            <p className="text-gray-500 text-sm">
              AI Reviewer
            </p>
          </div>

        </div>

        {/* Menu */}

        <nav className="space-y-3">

          <NavLink to="/dashboard" className={linkClass}>
            <FiHome size={20} />
            Dashboard
          </NavLink>

          <NavLink to="/profile" className={linkClass}>
            <FiUser size={20} />
            Profile
          </NavLink>

        </nav>

      </div>

      {/* Bottom */}

      <div>

        <div className="bg-[#171722] rounded-2xl p-4 mb-6">

          <p className="text-white font-semibold">
            Gemini AI
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Instant reviews with AI powered suggestions.
          </p>

        </div>

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition text-white py-3 rounded-xl font-semibold"
        >
          <FiLogOut />
          Logout
        </button>

      </div>

    </aside>
  );
}