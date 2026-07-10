export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-[#09090F] text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-[#14141d] rounded-2xl p-8 border border-white/10 w-[450px]">

        <p className="mb-4">
          <span className="text-violet-400">Name :</span>{" "}
          {user?.name || "Guest"}
        </p>

        <p className="mb-4">
          <span className="text-violet-400">Email :</span>{" "}
          {user?.email || "Not Available"}
        </p>

      </div>
    </div>
  );
}