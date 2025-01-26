import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { FaCommentDots, FaTruck, FaHome } from 'react-icons/fa';
import Home from './Home.jsx';
import Vehicles from './Vehicles.jsx';
import Chat from './Chat.jsx';
import VehiclesDetails from './VehicleDetails.jsx';

function CompanyDashboard() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeTab, setActiveTab] = useState(window.location.pathname);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Get user info from localStorage
    const userInfo = localStorage.getItem('loggedInUser');
    if (userInfo) {
      try {
        const { name } = JSON.parse(userInfo);
        setUserName(name);
      } catch (error) {
        console.error('Error parsing user info:', error);
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setActiveTab(window.location.pathname);
  }, [window.location.pathname]);

  const handleChatClick = (e) => {
    e.preventDefault();
    setActiveTab('/company/chat');
    navigate('/company/chat');
  };

  const showChatButton = !activeTab.includes('/chat');

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link 
                to="/company" 
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === '/company' 
                    ? 'bg-white text-blue-600 shadow-md' 
                    : 'hover:bg-blue-500'
                }`}
                onClick={() => {
                  setActiveTab('/company');
                  navigate('/company');
                }}
              >
                <FaHome className="text-xl" />
                <span>Dashboard Home</span>
              </Link>
              <Link 
                to="/company/vehicles" 
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab.includes('/company/vehicles') 
                    ? 'bg-white text-blue-600 shadow-md' 
                    : 'hover:bg-blue-500'
                }`}
                onClick={() => setActiveTab('/company/vehicles')}
              >
                <FaTruck className="text-xl" />
                <span>Vehicles</span>
              </Link>
            </div>
            
            {/* Right side of navbar */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Company Portal</span>
              {userName && (
                <span className="text-sm bg-blue-500 px-3 py-1 rounded-full">
                  Welcome, {userName}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/vehicle/:id" element={<VehiclesDetails/>}/>
      </Routes>

      {/* Floating Chat Icon - Only show when not in chat */}
      {showChatButton && (
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
            onClick={handleChatClick}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-200"
            style={{
              width: "60px",
              height: "60px",
              zIndex: 1000,
            }}
          >
            <FaCommentDots size={24} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default CompanyDashboard; 