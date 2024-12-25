
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col overflow-x-hidden">
        <Header />
        <About />
        <Projects />
        <Contact />
      </section>
    </main>
  );
}
