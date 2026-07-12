import Sidebar from "../components/Sidebar";
import { FiUser, FiMail, FiCalendar, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#09090F] flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-white">
            My Profile
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your CodeInsight AI account.
          </p>

        </div>

        <div className="max-w-2xl bg-[#14141d] border border-white/10 rounded-3xl p-8">

          {/* Avatar */}

          <div className="flex items-center gap-6 mb-10">

            <div className="w-24 h-24 rounded-full bg-violet-600 flex items-center justify-center text-4xl font-bold">
              {user?.name?.charAt(0).toUpperCase() || "G"}
            </div>

            <div>

              <h2 className="text-3xl font-bold text-white">
                {user?.name || "Guest User"}
              </h2>

              <p className="text-gray-400 mt-2">
                AI Developer
              </p>

            </div>

          </div>

          {/* Details */}

          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-[#1A1A24] rounded-2xl p-5">

              <FiUser className="text-violet-400 text-2xl" />

              <div>
                <p className="text-gray-400 text-sm">Name</p>
                <p className="text-white font-medium">
                  {user?.name || "Guest"}
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 bg-[#1A1A24] rounded-2xl p-5">

              <FiMail className="text-violet-400 text-2xl" />

              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">
                  {user?.email || "Not Available"}
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 bg-[#1A1A24] rounded-2xl p-5">

              <FiCalendar className="text-violet-400 text-2xl" />

              <div>
                <p className="text-gray-400 text-sm">Member Since</p>
                <p className="text-white font-medium">
                  July 2026
                </p>
              </div>

            </div>

          </div>

          <button
            onClick={logout}
            className="mt-10 w-full bg-red-600 hover:bg-red-700 transition rounded-2xl py-4 flex justify-center items-center gap-3 text-lg font-semibold"
          >
            <FiLogOut />
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}