import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/project";
import Contact from "../components/contact";
import { RippleDemo } from "../components/magicui";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <RippleDemo />
    </>
  );
}
export default Home;
