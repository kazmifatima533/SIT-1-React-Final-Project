import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and description */}
        <div>
          <div className="flex items-center text-white">
        <img
          src={"/images/logo.png"} // Use the imported logo image
          alt="Company Logo"
          className="h-14 w-14 mr-2" // Tailwind classes for size and spacing
        />
        <span className="text-2xl font-bold">Estate </span>
      </div>
          <p className="text-gray-400 mt-4">
            Discover your dream home with us—where exceptional service meets unparalleled properties..
          </p>
        </div>

        {/* Navigation links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="text-gray-400 hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="/ContactUs" className="text-gray-400 hover:text-white">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full md:w-auto flex-1 bg-gray-800 text-white border border-gray-600 rounded-l"
            />
            <button 
                  className="bg-slate-700 text-white px-4 py-2 rounded-r hover:bg-slate-950"
                  onClick={() => alert('Subscribed successfully!')}
                >
                  Subscribe
                </button>

          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        Copyright © 2024. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;