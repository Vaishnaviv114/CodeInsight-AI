import {
  FiHome,
  FiClock,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menu = [
    {
      name: "Dashboard",
      icon: <FiHome />,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: <FiClock />,
      path: "/history",
    },
    {
      name: "Profile",
      icon: <FiUser />,
      path: "/profile",
    },
  ];

  return (
    <div className="w-64 bg-[#111118] border-r border-white/10 flex flex-col justify-between">

      <div>
        <h1 className="text-2xl font-bold text-violet-400 px-8 py-8">
          CodeInsight AI
        </h1>

        <nav className="px-5 space-y-3">

          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                location.pathname === item.path
                  ? "bg-violet-600 text-white"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}

        </nav>
      </div>

      <button
        onClick={logout}
        className="m-5 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 rounded-xl py-3 text-white"
      >
        <FiLogOut />
        Logout
      </button>

    </div>
  );
}