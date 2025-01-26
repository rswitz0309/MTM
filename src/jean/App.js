import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaCommentDots } from 'react-icons/fa';
import Home from './Home';
import Vehicles from './Vehicles';
import Chat from './Chat';
import VehiclesDetails from './VehicleDetails';

function CompanyDashboard() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="p-4 bg-blue-500 text-white flex justify-between">
        <div>
          <Link to="/company" className="mr-4">Dashboard Home</Link>
          <Link to="/company/vehicles" className="mr-4">Vehicles</Link>
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
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showTooltip && (
          <div className="mb-2 bg-gray-800 text-white text-sm px-3 py-2 rounded shadow-lg">
            Interact with truckers online
          </div>
        )}
        <Link
          to="/company/chat"
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition duration-300"
          style={{
            width: "60px",
            height: "60px",
            zIndex: 1000,
          }}
        >
          <FaCommentDots size={24} />
        </Link>
      </div>
    </div>
  );
}

export default CompanyDashboard; 