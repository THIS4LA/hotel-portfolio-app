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
            <p className="font-bold p-2">
              Growind With Data Analytics
            </p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
              Grow With Data
            </h1>
            <div className="flex justify-center items-center">
              <p className="md:text-3xl sm:text-2xl text-xl font-bold">
                Fast, flexible financing for
              </p>
              <ReactTyped
                className="md:text-3xl sm:text-2xl text-xl font-bold pl-2"
                strings={["BTB", "BTC", "SASS"]}
                typeSpeed={160}
                backSpeed={180}
                loop
              ></ReactTyped>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;