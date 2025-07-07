import NavbarDemo from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/project";
import Contact from "../components/contact";
import SmoothCursorDemo from "../components/SmoothCursorDemo";

function Home() {
  return (
    <>
      <div className="py-8">
        <NavbarDemo />
        <Hero />
        <Projects />
        <Contact />
        <SmoothCursorDemo />
      </div>
    </>
  );
}
export default Home;
