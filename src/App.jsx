// import React from "react";
import { useState } from 'react'
import Navbar from "./Components/Portfolio-layout/Navbar/Navbar";
import Hero from "./Components/Portfolio-layout/Hero/Hero";
import About from './Components/Portfolio-layout/About/About';
import Batch from './Components/Portfolio-layout/Batch/index';
import Testimonial from "./Components/Portfolio-layout/Testimonial/testimonial";
import Contact from "./Components/Portfolio-layout/Contact/Contact";
import Projects from './Components/Portfolio-layout/Projects/Projects';
import Footer from "./Components/Portfolio-layout/Footer/Footer";

import './App.css'
import { ThemeProvider } from "./Components/Portfolio-layout/ThemeContext"


function App() {






  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Hero />
        <About />
        <Batch />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer />
      </ThemeProvider>






    </>
  )
}

export default App;
