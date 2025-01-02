"use client"
import { useState, useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };
  return (
    <main>
      <Navbar />
      <section className="flex flex-col overflow-x-hidden bg-mine-950">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </section>
      {showButton && (
        <button
          onClick={scrollToTop}
          className=" text-xl fixed bottom-5 right-5 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          ↑
        </button>
      )}
    </main>
  );
}
