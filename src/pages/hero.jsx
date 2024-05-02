import React from "react";
import { ReactTyped } from "react-typed";
import BgVideo from "./../assets/video2.mp4";

const Hero = () => {
  return (
    <div>
      <div className="w-screen h-screen">
        <video
          className="w-full h-full object-cover absolute top-0 -z-20"
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="absolute top-0 w-full h-full justify-center items-center">
        <div className="text-quaternary">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="font-bold p-2 md:text-5xl">
            Embark on Epicurean Journeys
            </p>
            <div className="flex justify-center items-center">
            <h1 className="md:text-4xl sm:text-6xl text-4xl font-bold md:py-6">
             and Luxe Escapes
            </h1>
            <ReactTyped
                className="md:text-4xl sm:text-6xl text-4xl font-bold md:py-6 pl-2 text-secondary"
                strings={["Explore", "Savor", "Rejuvenate"]}
                typeSpeed={160}
                backSpeed={180}
                loop
              ></ReactTyped>
            </div>
              
              
              <p className="md:text-3xl sm:text-2xl text-xl font-bold">
              with our premier restaurant and hotel discovery platform
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;