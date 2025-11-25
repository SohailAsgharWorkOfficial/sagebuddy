import React from "react";
import mark from "../assets/vector.svg";

const Hero: React.FC = () => {
  return (
    <section
      className="w-full min-h-[550px] bg-cover bg-center flex items-center relative z-0"
      style={{
        backgroundImage: "url('/src/assets/hero.jpg')",
      }}
    >
      <div className="w-full h-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col justify-center text-white">

          <span className="text-red-400 tracking-wider font-semibold uppercase text-sm">
            Integral & User Friendly
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Redefine Your <br />
            Business Approach <br />
            With{" "}
            <span className="relative inline-block">
              {/* TEXT (top layer) */}
              <span className="relative z-20 font-bold text-white">
                Sage Buddy
              </span>

              {/* BRUSH MARK (middle layer) */}
              <img
                src={mark}
                alt="mark"
                className="absolute left-0 bottom-0 w-full z-10"
              />
            </span>
          </h1>

          <p className="mt-4 max-w-md text-gray-200 leading-relaxed">
            Sale and Purchase items in multiple units, allows great flexibility
            to deal with measurement unit.
          </p>

          <button className="mt-6 bg-[#29b86f] text-white px-6 py-2 rounded-sm font-semibold tracking-wide shadow hover:bg-[#22a763] transition w-fit">
            READ MORE
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
