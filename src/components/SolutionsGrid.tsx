import React from "react";
import i1 from "../assets/i1.svg";
type SolutionItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const solutions: SolutionItem[] = [
  {
    title: "Point of Sales",
    description:
      "SageBuddy has the capability to deal with these kind of variations and above this inventory remains 100% intact and correct.",
    icon: <img src={i1} alt="icon" className="w-10 h-10" />, // replace with SVG
  },
  {
    title: "Cold Storage / Warehouse",
    description:
      "SageBuddy has the capability to deal with these kind of variations and above this inventory remains 100% intact and correct.",
    icon: <img src={i1} alt="icon" className="w-10 h-10" />,
  },
  {
    title: "Kinno Factory ERP",
    description:
      "SageBuddy is designed to target any user in market due to its user friendliness. It just takes couple of days to get addict of it.",
    icon: <img src={i1} alt="icon" className="w-10 h-10" />,
  },
  {
    title: "Tiles / Sanitary Retail Shop",
    description:
      "SageBuddy has the capability to deal with these kind of variations and above this inventory remains 100% intact and correct.",
    icon: <img src={i1} alt="icon" className="w-10 h-10" />,
  },
  {
    title: "Pharmacy Store",
    description:
      "SageBuddy has the capability to deal with these kind of variations and above this inventory remains 100% intact and correct.",
    icon: <img src={i1} alt="icon" className="w-10 h-10" />,
  },
  {
    title: "Hardware & Plywood Shop",
    description:
      "SageBuddy is designed to target any user in market due to its user friendliness. It just takes couple of days to get addict of it",
    icon: <img src={i1} alt="icon" className="w-10 h-10" />,
  },
];

const SolutionsGrid: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 mt-30">
      <div className="text-center mb-12">
        <p className="text-orange-500 text-sm font-semibold uppercase">
          Our Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-1">
          Solutions for your Business
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>

            <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

            <p className="text-gray-600 text-sm mb-6">
              {item.description}
            </p>

            <button className="text-orange-500 font-semibold flex items-center gap-1 mx-auto">
              LEARN MORE →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsGrid;
