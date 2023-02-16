import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./Pages/HomePage";
import ResumePage from "./Pages/ResumePage";
import AboutMe from './Pages/AboutMe';
import PortfolioPage from "./Pages/PortfolioPage";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App