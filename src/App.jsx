import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./Pages/HomePage.jsx";
import ResumePage from "./Pages/ResumePage.jsx";
import AboutMe from './Pages/AboutMe.jsx';
import PortfolioPage from "./Pages/PortfolioPage.jsx";


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