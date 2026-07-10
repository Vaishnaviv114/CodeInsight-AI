import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-700/70 to-indigo-700/70 backdrop-blur-xl px-10 py-12 text-center">

        <h2 className="text-3xl lg:text-4xl font-bold">
          Ready to Review Your Code?
        </h2>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Start using AI to improve your code quality in seconds.
        </p>

        <Link
          to="/register"
          className="inline-block mt-8 px-7 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 text-white font-semibold transition"
        >
          Get Started Free
        </Link>

      </div>

    </section>
  );
}