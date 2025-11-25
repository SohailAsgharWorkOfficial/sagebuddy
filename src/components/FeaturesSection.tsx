import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm">
      <div className="mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <span className="text-sm uppercase text-orange-600 font-semibold tracking-wide">
            What We Do
          </span>

          <h2 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
            Does more then ever<br />
            platform to achieve goal<br />
            stages.
          </h2>

          <p className="mt-6 text-gray-600 max-w-lg">
            What we experienced that most of POS don’t have the capability 
            to deal with multiple units for a single item. SageBuddy gives 
            non imaginable flexibility to purchase or sale your item in 
            any unit. You can easily define how an item or group of items 
            will be purchased and sold.
          </p>

          <button className="mt-8 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg">
            Read More
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard
            icon={<img src={card1} alt="icon1" className="w-6 h-6" />}
            title="Stay in touch with your Customers"
            description="SageBuddy allows you to keep in touch with your customers via SMS. Send messages on invoices, remaining balances, payments etc."
          />

          <FeatureCard
            icon={<img src={card2} alt="icon2" className="w-6 h-6" />}
            title="HRM"
            description="HRM is an integral part of SageBuddy. Manage attendance, salary sheets, leaves, holidays, shifts etc."
          />

          <FeatureCard
            icon={<img src={card3} alt="icon3" className="w-6 h-6" />}
            title="User Security"
            description="Can be used standalone or distributed. It has strong security with admin-defined access levels."
          />

          <FeatureCard
            icon={<img src={card4} alt="icon4" className="w-6 h-6" />}
            title="24/7 Customer Support"
            description="We always care about our customers. We are ready to help you 24/7."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
