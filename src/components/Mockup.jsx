import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Waves from "./Waves";
import Video from "./Video";

const Mockup = () => {
  return (
    <div className="m-[1rem]">
      <div className="mockup-browser border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">https://daisyui.com</div>
        </div>
        {/* <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div> */}
        <div className="flex justify-around items-center">
          <h3 className="text-2xl font-small">02 April 2024</h3>
          <h1 className="text-4xl font-bold">Happy Birthday!!!</h1>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mr-[2.5rem]"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
        <Home />
        {/* <Waves /> */}
        <Video />
      </div>
    </div>
  );
};

export default Mockup;
