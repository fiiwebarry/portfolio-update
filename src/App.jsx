// import React from "react";
import { useState } from 'react'
import Navbar from "./Components/Portfolio-layout/Navbar/Navbar";
import Hero from "./Components/Portfolio-layout/Hero/Hero";
import About from './Components/Portfolio-layout/About/About';
import Batch from './Components/Portfolio-layout/Batch/index';
import Experience from "./Components/Portfolio-layout/Experience";
import Project from './Components/Portfolio-layout/Projects/Project';

import './App.css'


function App() {
  // const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      
       <Navbar />
       <Hero/>
      <About/>
      <Batch/>
      <Experience/>
      <Project/>



      {/* <Navbar /> */}
      
    </>
  )
}

export default App;
