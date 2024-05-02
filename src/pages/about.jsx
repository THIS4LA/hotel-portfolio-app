import React from "react";
import pic1 from './../assets/aboutUs.png'
import pic2 from './../assets/aboutUs2.jpg'
import pic3 from './../assets/aboutUs4.jpg' 

const About = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img id="about"
                      src={pic1}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={pic2}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src={pic3}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-[50px] font-semibold text-primary">
                Why Choose Us?
                </span>
                <h2 className="mb-5 text-3xl font-bold text-black dark:text-secondary sm:text-[20px]">
                Choose us for unparalleled choice, convenience, and confidence in your dining and lodging experiences
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6 font-sans">
                Gain access to an extensive database of top-rated restaurants and hotels,
                ensuring there's something to suit every taste and budget
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6 font-sans">
                Rely on our curated selection of establishments, vetted for quality and
                excellence by seasoned experts and discerning users alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;