import React from 'react';
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
//import Experiences from "./sections/Experiences.jsx";
import Footer from "./sections/Footer.jsx";
import Education from "./sections/Education.jsx";

const App = () => {
  return <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Education />
      {/* <Experiences /> */}
      <Projects />
      <Footer />
  </div>;
};

export default App;