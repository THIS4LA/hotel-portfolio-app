import React from "react";
import { ReactTyped } from "react-typed";
import BgVideo from "./../assets/video1.mp4";

const Hero = () => {
  return (
    <div className="absolute top-0 -z-10">
      <div className="w-full h-full bg-cover opacity-40">
        <video autoPlay muted loop id="myVideo">
          <source src={BgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="absolute top-0 w-full h-full justify-center items-center">
        <div className="text-primary">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-primary font-bold p-2">
              Growind With Data Analytics
            </p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
              Grow With Data
            </h1>
            <div>
              <p className="md:text-5xl sm:text-4xl text-xl font-bold">
                Fast, flexible financing for{" "}
              </p>
              <ReactTyped
                className="md:text-5xl sm:text-4xl text-xl font-bold"
                strings={["BTB", "BTC", "SASS"]}
                typeSpeed={120}
                backSpeed={160}
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
