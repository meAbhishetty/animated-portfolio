import "./App.scss";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import IntroPicture from "./components/Hero/IntroPicture";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
const App = () => {
  return (
    <>
      {/* <Cursor /> */}
      <div>
        <section id="Home">
          <Navbar />
          <Hero />
        </section>
        <section id="Services">
          <Parallax type="services" />
        </section>
        <section>
          <Services />
        </section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <Portfolio />
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default App;
