import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <nav className="text-sm text-gray-500 mt-2">
          Home <span className="mx-1">/</span> <span className="text-black">Contact Us</span>
        </nav>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-20 px-4 md:px-0">

        {/* LEFT — FORM */}
        <div className="md:col-span-2">
          <p className="text-sm text-red-500 font-semibold mb-3">CONTACT US</p>

          <h1 className="text-3xl font-bold leading-snug mb-8">
            Grow your business with SageBuddy
            <br />
            We have to change this text.
          </h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md py-3 px-4 outline-none focus:ring focus:ring-green-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md py-3 px-4 outline-none focus:ring focus:ring-green-200"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-md py-3 px-4 outline-none focus:ring focus:ring-green-200"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border border-gray-300 rounded-md py-3 px-4 outline-none resize-none focus:ring focus:ring-green-200"
            />

            {/* reCAPTCHA Placeholder */}
            <div className="flex items-center space-x-4 border border-gray-300 rounded-md p-3 w-56">
              <div className="w-5 h-5 border border-gray-400 rounded-sm"></div>
              <span className="text-sm text-gray-600">I’m not a robot</span>
              <div className="ml-auto w-6 h-6 bg-gray-300 rounded"></div>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition"
            >
              SEND NOW
            </button>
          </form>
        </div>

        {/* RIGHT — INFO CARDS */}
        <div className="space-y-6">

          {/* LOCATION */}
          <div className="border rounded-md p-6 shadow-sm">
            <div className="flex items-start space-x-3">
              <img
                src="/icons/location.png"
                alt="Location Icon"
                className="w-6 h-6 object-contain"
              />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Office no 14, 3rd Floor, Rehman Palaza,
                  <br />
                  Sargodha
                </p>
              </div>
            </div>
          </div>

          {/* CALL */}
          <div className="border rounded-md p-6 shadow-sm">
            <div className="flex items-start space-x-3">
              <img
                src="/icons/phone.png"
                alt="Phone Icon"
                className="w-6 h-6 object-contain"
              />
              <div>
                <h3 className="font-semibold text-lg">Make a Call</h3>
                <p className="text-sm text-gray-600 mt-1">048 376 8719</p>
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div className="border rounded-md p-6 shadow-sm">
            <div className="flex items-start space-x-3">
              <img
                src="/icons/email.png"
                alt="Email Icon"
                className="w-6 h-6 object-contain"
              />
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-sm text-gray-600 mt-1">info@sagebuddy.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
