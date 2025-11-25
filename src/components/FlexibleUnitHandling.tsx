import React from "react";
import left2 from "../assets/left2.png";
import right2 from "../assets/right2.png"
const FlexibleUnitHandling: React.FC = () => {
  return (
    <section className="w-full mt-20  py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Text Section */}
        <div>
          <p className="text-sm font-semibold text-red-500 tracking-wide mb-2">
            SAGEBUDDY GIVES
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Flexible Unit Handling <br /> for a single Product
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-md">
            SageBuddy gives you non-imaginable flexibility to purchase or sale your
            item in any unit. You can easily define how an item or group of items
            will be purchased and sold.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full flex justify-center">
          {/* Back image */}
          <img
            src={left2}
            alt="Reference background"
            className="rounded-xl w-90 md:w-90 lg:w-96 object-cover absolute top-0 right-10 opacity-90"
          />

          {/* Front overlapping image */}
          <img
            src={right2}
            alt="Store counter scene"
            className="rounded-xl w-90 md:w-96 lg:w-[420px] top-20 right-10 object-cover relative "
          />
        </div>

      </div>
    </section>
  );
};

export default FlexibleUnitHandling;
