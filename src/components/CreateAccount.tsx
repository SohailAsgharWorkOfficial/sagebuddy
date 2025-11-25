import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log("Signup Data:", data);

    alert("Account Created Successfully!");

    // After signup → go to signin
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.png" alt="SageBuddy Logo" className="h-16" />
          <p className="text-gray-500 text-sm -mt-2">Your Wise Companion</p>
        </div>

        {/* Card */}
        <div className="bg-white shadow-md border rounded-xl p-8">
          <h2 className="text-center font-semibold text-xl mb-1">CREATE YOUR ACCOUNT</h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-red-500 font-semibold cursor-pointer"
            >
              Sign in
            </span>
          </p>

          <form onSubmit={handleSignup} className="space-y-4">

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border rounded-md py-3 px-4 outline-none focus:ring focus:ring-green-200"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded-md py-3 px-4 outline-none focus:ring focus:ring-green-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-700">Your Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 border rounded-md py-3 px-4 outline-none focus:ring focus:ring-green-200"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 border rounded-md py-3 px-4 outline-none focus:ring focus:ring-green-200 pr-10"
                />

                <span
                  className="absolute right-3 top-4 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            {/* Create Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md mt-4 hover:bg-green-700 transition"
            >
              CREATE AN ACCOUNT
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-sm mt-5">
          Copyright 2021 – SageBuddy.com
        </p>

      </div>
    </div>
  );
};

export default CreateAccount;
