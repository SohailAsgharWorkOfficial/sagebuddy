import React, { useState } from "react";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      // HTTP error (like 400, 500 etc)
      const errorData = await res.json();
      alert(errorData.message || "Login failed");
      return;
    }

    const data = await res.json();

    if (data.success) {
      alert("Login Successful!");
      console.log("TOKEN:", data.token);

      // TODO: Save token in localStorage or context for auth

      // Redirect to /home after successful login
      window.location.href = "/home";
    } else {
      alert(data.message || "Login failed");
    }
  } catch (error) {
    alert("Network error, please try again.");
    console.error("Login error:", error);
  }
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
          <h2 className="text-center font-semibold text-xl mb-1">SIGN IN</h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Don’t have an account yet?{" "}
            <a href="/signup" className="text-red-500 font-semibold">
              Sign up
            </a>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="info@sagebuddy.com"
                className="w-full mt-1 border rounded-md py-3 px-4 outline-none focus:ring focus:ring-green-200"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full mt-1 border rounded-md py-3 px-4 outline-none focus:ring focus:ring-green-200 pr-10"
                />

                {/* Show / Hide password */}
                <button
                  type="button"
                  className="absolute right-3 top-4 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Remember me + Forgot Password */}
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <span>Remember me</span>
              </label>

              <a
                href="/forgot-password"
                className="text-sm text-green-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md mt-4 hover:bg-green-700 transition"
            >
              SIGN IN
            </button>

          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-5">
          Copyright 2021 – SageBuddy.com
        </p>
      </div>
    </div>
  );
};

export default SignIn;
