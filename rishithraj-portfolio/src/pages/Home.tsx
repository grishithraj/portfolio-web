import NavbarDemo from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/project";
import Contact from "../components/contact";

function Home() {
  return (
    <>
      <div className="py-8">
        <NavbarDemo />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
export default Home;
