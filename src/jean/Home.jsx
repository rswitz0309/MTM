import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCommentDots } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate('/company/chat');
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Background */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.airproducts.com/-/media/images/969x646/careers/drive-and-ambition-3x2.jpg?as=0&w=969&hash=118A78F54BB8D95BD6CF2F408CA0F6F5')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Making our drivers' journeys easier, <br /> because they make ours possible.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center max-w-2xl">
            Join us in building a culture of trust and support for those who move the world forward.
          </p>
        </div>

        {/* Chat Button - Positioned at bottom right */}
        <button
          onClick={handleChatClick}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center"
          style={{
            width: "60px",
            height: "60px",
            zIndex: 1000,
          }}
        >
          <FaCommentDots size={24} />
        </button>
      </div>

      {/* Additional content can be added here */}
    </div>
  );
}

export default Home; 