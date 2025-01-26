import React from "react";
import videoFile from "../assets/truck_vid_1.mp4"; // Replace with your video file path

const VideoBackground = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Optional: Dark Overlay for Contrast */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center mt-6 lg:mt-20">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white px-3 py-4">
                    Trucking Made Easy <br />
                    <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
                        for Truckers
                    </span>
                </h1>
                <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl">
                    "Empowering truckers with tools to connect, stay informed, and navigate efficiently. Collaborate with fellow drivers and access real-time updates to keep your journey smooth."
                </p>
                <div className="flex justify-center my-10">
                    
                    <a  
                        href = "#"
                        onClick={() => document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" })}
                        className="py-3 px-4 mx-3 rounded-md border text-white"
                    >
                        Learn More
                    </a>
                </div>
                
            </div>
        </div>
    );
};

export default VideoBackground;
