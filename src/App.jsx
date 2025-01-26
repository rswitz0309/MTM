import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import FeatureSection from "./components/FeatureSection";
import CompanyDashboard from "./jean/App.jsx";

const App = () => {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <HeaderSection/>
            <FeatureSection/>
          </>
        } />
        <Route path="/company/*" element={<CompanyDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
