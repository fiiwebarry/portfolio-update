// import React from "react";
import { useState } from 'react'
import Navbar from "./Components/Portfolio-layout/Navbar/Navbar";
import Hero from "./Components/Portfolio-layout/Hero/Hero";
import About from './Components/Portfolio-layout/About/About';
import Batch from './Components/Portfolio-layout/Batch/index';
import Testimonial from "./Components/Portfolio-layout/Testimonial/testimonial";
import Contact from "./Components/Portfolio-layout/Contact/Contact";
import Projects from './Components/Portfolio-layout/Projects/Projects';

import './App.css'


function App() {
  // const [count, setCount] = useState(0)
  // const [darkMode, setDarkMode] = useState("darkMode");

  // const toggleMode = () => {
  //   if(darkMode==="darkMode")
  //   {
  //     setDarkMode("lightMode");
  //   }

  // };

  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <Batch />
      <Projects />
      <Testimonial />
      <Contact />
      {/* <Project /> */}





    </>
  )
}

export default App;
