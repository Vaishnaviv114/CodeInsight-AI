import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { FiClock, FiTrash2, FiCode } from "react-icons/fi";

export default function History() {
  const [reviews, setReviews] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    try {
      const response = await axios.get("http://localhost:3000/review", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setReviews(response.data.reviews);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteReview(id) {
    try {
      await axios.delete(`http://localhost:3000/review/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setReviews((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete review.");
    }
  }

  return (
    <div className="min-h-screen bg-[#09090F] flex">
      <Sidebar />

      <div className="flex-1 p-8">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">
            Review History
          </h1>

          <p className="text-gray-400 mt-2">
            All your previous AI code reviews.
          </p>
        </div>

        {reviews.length === 0 ? (
          <div className="bg-[#14141d] border border-white/10 rounded-2xl p-12 text-center">
            <FiClock className="text-5xl text-violet-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-white">
              No Reviews Yet
            </h2>
            <p className="text-gray-400 mt-2">
              Review some code and it will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {reviews.map((item) => (
              <div
                key={item._id}
                className="bg-[#14141d] border border-white/10 rounded-2xl p-6"
              >
                <div className="flex justify-between items-start">

                  <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center">
                      <FiCode className="text-white" />
                    </div>

                    <div>

                      <h2 className="text-xl font-semibold text-white">
                        {item.language}
                      </h2>

                      <p className="text-gray-500 text-sm mt-1">
                        {new Date(item.createdAt).toLocaleString()}
                      </p>

                    </div>

                  </div>

                  <button
                    onClick={() => deleteReview(item._id)}
                    className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg text-white flex items-center gap-2"
                  >
                    <FiTrash2 />
                    Delete
                  </button>

                </div>

                <div className="mt-6">

                  <h3 className="text-violet-400 font-semibold mb-2">
                    Code
                  </h3>

                  <pre className="bg-[#0f0f17] p-4 rounded-xl overflow-auto text-sm text-gray-300">
                    {item.code}
                  </pre>

                </div>

                <div className="mt-6">

                  <h3 className="text-green-400 font-semibold mb-2">
                    AI Review
                  </h3>

                  <div className="bg-[#0f0f17] p-4 rounded-xl text-gray-300 whitespace-pre-wrap">
                    {item.review}
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}