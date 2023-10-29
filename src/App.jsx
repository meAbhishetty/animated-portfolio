import "./App.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
const App = () => {
    return (
        <div>
            <section id="Home">
                <Navbar />
                <Hero/>
            </section>
            <section id="Services">parallax</section>
            <section>services</section>
            <section id="Portfolio">parallax</section>
            <section>port 1</section>
            <section>port 2</section>
            <section>port 3</section>
            <section id="Contact">contact</section>
        </div>
    );
};

export default App;
