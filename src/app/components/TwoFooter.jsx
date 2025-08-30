"use client";
import { FaEnvelope, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[rgb(33,33,33,1)] text-gray-300 md:pr-25 ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Team</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help &amp; Support</a></li>
            <li><a href="#" className="hover:text-white">Partner with us</a></li>
            <li><a href="#" className="hover:text-white">Ride with us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Terms &amp; Conditions</a></li>
            <li><a href="#" className="hover:text-white">Refund &amp; Cancellation</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Follow Us + Subscribe */}
        <div>
          <h3 className="font-semibold mb-4 text-white">FOLLOW US</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
          </div>

          <p className="font-medium mb-3">Receive exclusive offers in your mailbox</p>
          <form className="flex">
            <div className="flex items-center bg-gray-700 px-3 rounded-l-md w-full">
              <FaEnvelope className="h-5 w-5 mr-2 text-gray-400" />
              <input 
                type="email" 
                placeholder="Enter Your email" 
                className="bg-transparent focus:outline-none text-sm w-full placeholder-gray-400"
              />
            </div>
            <button 
              type="submit" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold px-2 py-2 rounded-r-md shadow hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>All rights Reserved © <span className="font-medium text-white">Your Company</span>, 2021</p>
        <p className="mt-2 md:mt-0">Made with <span className="text-yellow-500">♥</span> by <span className="text-white font-medium">Themewagon</span></p>
      </div>
    </footer>
  );
}
