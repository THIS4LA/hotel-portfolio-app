import React from "react";
import logo from "./../assets/logo-primary.png";

const SignUp = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <h1 className="text-black text-center text-bold ">
                  Registration Form
                </h1>
                <a href="/#" className="mx-auto inline-block max-w-[160px]">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <form>
                <InputBox type="text" name="cName" placeholder="Company Name" />
                <InputBox
                  type="text"
                  name="cOwnerName"
                  placeholder="Owner's Name"
                />
                <InputBox type="text" name="cLocation" placeholder="Location" />
                <InputBox type="email" name="email" placeholder="Email" />
                <InputBox
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <InputBox
                  type="password"
                  name="password"
                  placeholder="Retype Password"
                />
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-quaternary transition hover:bg-opacity-90"
                  />
                </div>
              </form>
              <p className="text-base text-body-color dark:text-dark-6">
                <span className="pr-0.5">Already A Member?</span>
                <a href="/#" className="text-primary hover:underline">
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

const InputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-primary"
      />
    </div>
  );
};