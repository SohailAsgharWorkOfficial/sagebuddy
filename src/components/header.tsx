import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
export default function Header() {
  return (
    <header className="w-full bg-white border-b">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-8 py-2 text-xs text-gray-600 border-b">
        
        {/* Email + Phone */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <img src="/assets/icons/mail.svg" alt="Email Icon" className="w-4 h-4" />
            <span>info@sagebuddy.com</span>
          </div>

          <div className="flex items-center space-x-2">
            <img src="/assets/icons/phone.svg" alt="Phone Icon" className="w-4 h-4" />
            <span>048 376 8719</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-3 text-green-600">
          <img src="/assets/icons/facebook.svg" className="w-4 h-4" alt="Facebook" />
          <img src="/assets/icons/twitter.svg" className="w-4 h-4" alt="Twitter" />
          <img src="/assets/icons/instagram.svg" className="w-4 h-4" alt="Instagram" />
          <img src="/assets/icons/linkedin.svg" className="w-4 h-4" alt="LinkedIn" />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-8 py-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src={logo} alt="SageBuddy Logo" className="h-10 cursor-pointer" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-10 text-sm font-semibold tracking-wide text-gray-700">
          <Link to="/success-stories" className="hover:text-green-600 transition">
            SUCCESS STORIES
          </Link>

          <Link to="/business-solutions" className="hover:text-green-600 transition">
            BUSINESS SOLUTIONS
          </Link>

          <Link to="/contact-us" className="hover:text-green-600 transition">
            CONTACT US
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-5 text-sm font-medium">
            <Link to="/">
    <button className="text-gray-700 hover:text-green-600 transition">
      LOGIN
    </button>
  </Link>

  <Link to="/signup">
    <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
      SIGN UP
    </button>
  </Link>
        </div>
      </div>
    </header>
  );
}
