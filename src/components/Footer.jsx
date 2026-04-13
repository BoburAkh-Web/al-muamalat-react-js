import React from "react";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // react-icons ishlatsangiz

const Footer = () => {
  return (
    <footer className="bg-[#00897B] text-white py-12 px-4">
      <div className="max-w-360 mx-auto flex flex-col items-center">
        {/* 1. Logo qismi */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-white rounded-tr-2xl rounded-bl-2xl flex items-center justify-center">
            <div className="w-4 h-4 bg-[#00897B] rounded-full"></div>
          </div>
          <div className="leading-tight">
            <h2 className="text-xl font-bold uppercase tracking-wider">Dior</h2>
            <p className="text-sm font-light">design</p>
          </div>
        </div>

        {/* 2. Navigatsiya menyusi */}
        <ul className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-medium">
          <li>
            <a href="#" className="hover:opacity-80 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-80 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-80 transition">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-80 transition">
              Contact Us
            </a>
          </li>
        </ul>

        {/* 3. Ijtimoiy tarmoqlar */}
        <div className="flex gap-6 mb-10">
          <a href="#" className="hover:scale-110 transition">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* 4. Chiziq */}
        <div className="w-full max-w-360 h-px bg-white/30 mb-8"></div>

        {/* 5. Copyright */}
        <p className="text-xs text-white/70">Copyright Satyam Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
