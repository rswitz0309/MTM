import React from "react";

function Home() {
  return (
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
    </div>
  );
}

export default Home;




