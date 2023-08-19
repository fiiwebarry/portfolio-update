// import React from "react";
import { useState } from 'react'
import Navbar from "./Components/Portfolio-layout/Navbar/Navbar";
import Hero from "./Components/Portfolio-layout/Hero/Hero";
import About from './Components/Portfolio-layout/About/About';
import Batch from './Components/Portfolio-layout/Batch/index';
import Experience from "./Components/Portfolio-layout/Experience";
<<<<<<< HEAD
import Work from "./Components/Portfolio-layout/Work/work";
import Testimonials from "./Components/Portfolio-layout/Testimonials/testimonials";
import Footer from "./Components/Portfolio-layout/Footer/footer";
=======
import Project from './Components/Portfolio-layout/Projects/Project';

import './App.css'

>>>>>>> 5ac06e6e931b545a8c61b17736b8463736a90934

function App() {
  // const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
<<<<<<< HEAD
      <Hero />
      <About />
      <Batch />
      <Experience />
      <Work/>
      <Testimonials/>
      <Footer/>
=======
      
       <Navbar />
       <Hero/>
      <About/>
      <Batch/>
      <Experience/>
      <Project/>



      {/* <Navbar /> */}
      
>>>>>>> 5ac06e6e931b545a8c61b17736b8463736a90934
    </>
  )
}

export default App;
