import React from "react";
import { Check } from "lucide-react";
import back2 from "../assets/back2.png";
import front2 from "../assets/front2.png";
const FlexiblePaymentHandling: React.FC = () => {
  return (
    <section className="w-full mt-20 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — TEXT BLOCK */}
        <div>
          <p className="text-sm font-semibold text-red-500 tracking-wide mb-2">
            WHAT WE EXPERIENCED
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Flexible Payment Handling
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
            SageBuddy gives you a great flexibility to manage single sales amount into
            multiple account i.e.
          </p>

          {/* Bullet List */}
          <ul className="space-y-4">
            {["Cash Counter", "Jazz Cash", "Easy Paisa"].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="text-white w-5 h-5" />
                </span>
                <span className="font-semibold text-gray-800">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-500 mt-6">There is no limit for it.</p>
        </div>

        {/* RIGHT — IMAGE BLOCK */}
        <div className="relative w-full flex justify-center">
          {/* Background image */}
          <img
            src={back2}
            alt="Reference background"
            className="rounded-xl w-72 md:w-80 lg:w-96 object-cover absolute right-10 top-0 opacity-90"
          />

          {/* Foreground image */}
          <img
            src={front2}
            alt="Store scene"
            className="rounded-xl w-80 md:w-96 lg:w-[420px] object-cover right-10 top-20 relative"
          />
        </div>

      </div>
    </section>
  );
};

export default FlexiblePaymentHandling;
