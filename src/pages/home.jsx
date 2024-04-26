import React from "react";
import mutedVideo from "./../assets/video1.mp4";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* VIDEO */}
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={mutedVideo} alt="video" />
        </video>
      </div>
    </div>
  );
};

export default Home;
