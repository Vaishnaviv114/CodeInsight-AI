import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#09090F] text-white overflow-hidden relative">

      <div className="absolute w-[550px] h-[550px] bg-violet-600/20 blur-[170px] rounded-full -top-32 -left-32"/>

      <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[170px] rounded-full bottom-0 right-0"/>

      <Navbar />

      <Hero />

      <Features />

      <CTA />

      <Footer />

    </div>
  );
}