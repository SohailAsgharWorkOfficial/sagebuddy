import React from "react";
import leftImg from "../assets/left.png";
import rightImg from "../assets/right.png";
const StatsCircleSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={leftImg}  // your left illustration
            alt="Illustration"
            className="max-w-md w-full"
          />
        </div>

        {/* RIGHT CIRCLE STATS USING IMAGE */}
        <div className="relative flex justify-center items-center">
          <img
            src={rightImg}  // 🔥 replace with your circle image
            alt="Stats Circle"
            className="w-80 h-80 object-contain"
          />

    
        </div>
      </div>
    </section>
  );
};

export default StatsCircleSection;
