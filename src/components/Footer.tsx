import { Link } from "react-router-dom";

import React from "react";
import logo from "../assets/logo.svg";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import fb from "../assets/fb.png";
import tw from "../assets/tw.png";
import yt from "../assets/yt.png";
import li from "../assets/li.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151424] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo + Contact */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
           <img src={logo} alt="SageBuddy Logo" className="h-10" />
            <span className="text-xl font-semibold text-white">
             
            </span>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <img
                src={email}
                alt="Email"
                className="h-4"
              />
              <span>info@sagebuddy.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src={phone}
                alt="Phone"
                className="h-4"
              />
              <span>0481 376 8719</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-1 mt-3">
            <img src={fb} alt="Facebook" className="h-5" />
            <img src={tw} alt="Twitter" className="h-5" />
            <img src={yt} alt="Youtube" className="h-5" />
            <img src={li} alt="Linkediin" className="h-5" />
          </div>
        </div>

        {/* Business Solutions */}
        <div>
          <h3 className="text-white font-semibold mb-4">BUSINESS SOLUTIONS</h3>
          <ul className="space-y-2 text-sm">
            <li>Accounting Software</li>
            <li>Kinrove Factory ERP</li>
            <li>Point of Sales</li>
            <li>Wholesale</li>
            <li>Online Accounting</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li><Link to="/our-team">Our Team</Link></li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">OTHER LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        Copyright © 2021 – SageBuddy.com
      </div>
    </footer>
  );
};

export default Footer;
