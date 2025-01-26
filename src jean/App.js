import VehiclesDetails from "./vehicledetails";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaCommentDots } from "react-icons/fa"; // Import chat icon
import Home from "./home";
import Vehicles from "./vehicle";
import Chat from "./chat";

function App() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Function to toggle tooltip every 10 seconds
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000); // Show tooltip for 3 seconds
    }, 10000); // 10-second interval

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="p-4 bg-blue-500 text-white flex justify-between">
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/vehicles" className="mr-4">Vehicles</Link>
          
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/vehicle/:id" element={<VehiclesDetails/>}/>
      </Routes>

      {/* Floating Chat Icon with Tooltip */}
      <div
        className="fixed bottom-4 right-4 flex flex-col items-center"
        onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
        onMouseLeave={() => setShowTooltip(false)} // Hide tooltip on mouse leave
      >
        {showTooltip && (
          <div className="mb-2 bg-gray-800 text-white text-sm px-3 py-2 rounded shadow-lg">
            Interact with truckers online
          </div>
        )}
        <Link
          to="/chat"
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition duration-300"
          style={{
            width: "60px",
            height: "60px",
            zIndex: 1000, // Ensure it stays on top
          }}
        >
          <FaCommentDots size={24} />
        </Link>
      </div>
    </Router>
  );
}

export default App;







