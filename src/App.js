import React, { useEffect } from "react";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Certificate from "./components/Certificate/Certificate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import Projects from "./components/Projects/Projects";
import BottomSvg from "./components/Svg/BottomSvg/BottomSvg";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
    AOS.refresh();
  }, []);
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <About />
      <Projects />
      <Blog />
      <Certificate />
      <BottomSvg />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
