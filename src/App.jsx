// import React from "react";
// import { useState } from 'react'

import Hero from "./Components/Portfolio-layout/Hero/Hero";
import About from './Components/Portfolio-layout/About/About';
import Batch from './Components/Portfolio-layout/Batch/index';
import './App.css'
import Experience from "./Components/Portfolio-layout/Experience";
import Work from "./Components/Portfolio-layout/Work/work";
import Testimonials from "./Components/Portfolio-layout/Testimonials/testimonials";
import Footer from "./Components/Portfolio-layout/Footer/footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <About />
      <Batch />
      <Experience />
      <Work/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App;
