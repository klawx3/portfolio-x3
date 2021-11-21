import React from "react";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import { AboutPage } from "../components/about/AboutPage";
import { PortfolioPage } from "../components/portfolio/PortfolioPage";
import { NavBar } from "../components/ui/NavBar";

const MainRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/about" element={<AboutPage />} />
          <Route path="/" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainRouter;