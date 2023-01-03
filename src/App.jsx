import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./Pages/HomePage";
import ResumePage from "./Pages/ResumePage";
import ContactPage from "./Pages/ContactPage";
import PortfolioPage from "./Pages/PortfolioPage";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App