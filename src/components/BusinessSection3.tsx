import React from "react";

// Use your actual images here
import imgBack from "../assets/back.png";
import imgFront from "../assets/front.png"; 

const BusinessSection3: React.FC = () => {
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
            Create Quotation
          </p>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Order Quotations 
          </h2>

          <p className="text-gray-600 mb-4">
           Create Quotation and turn them into sales.
          </p>

         
        </div>

      </div>
    </section>
  );
};

export default BusinessSection3;
