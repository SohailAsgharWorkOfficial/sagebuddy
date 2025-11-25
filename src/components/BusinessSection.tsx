import React from "react";

// Use your actual images here
import imgBack from "../assets/back.png";
import imgFront from "../assets/front.png"; 

const BusinessSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

        {/* LEFT IMAGES STACK */}
        <div className="relative w-full flex justify-center">
          
          {/* BACK IMAGE */}
          <img
            src={imgBack}
            className="w-[65%] rounded-xl shadow-lg translate-x-1 translate-y-6"
          />

          {/* FRONT IMAGE */}
          <img
            src={imgFront}
            className="absolute top-35 left-50 w-[65%] rounded-xl shadow-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-sm text-orange-500 font-semibold tracking-wider uppercase mb-2">
            A wise companion
          </p>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Grow your business with <br /> SageBuddy
          </h2>

          <p className="text-gray-600 mb-4">
            SageBuddy means “A wise Companion”, so having SageBuddy as a part of
            your business ensures that you get an intelligent friend at your
            back that will ease your work to your 100% satisfaction.
          </p>

          <p className="text-gray-600">
            SageBuddy is a great software for all your needs,          
              no matter if you need it
            
            for accountancy, sale/purchase items, keeping inventory, purchase
            and sale item in any measurement unit, manage human resource and
            much more.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BusinessSection;
