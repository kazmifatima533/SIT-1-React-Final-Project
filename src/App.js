import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import Testimonials from "./components/Testimonials";
import SignIn from "./components/SignIn";
import PropertyDetail from "./components/PropertyDetail"; // New PropertyDetail component


const App = () => {
  // State to control the visibility of the SignIn form
  const [showSignIn, setShowSignIn] = useState(false);

  // Function to toggle the SignIn form visibility
  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <Router>
      {/* Navbar */}
      <Navbar onSignUpClick={toggleSignIn} />

      {/* Conditional Rendering of SignIn Form */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={toggleSignIn}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            {/* SignIn Component */}
            <SignIn />
          </div>
        </div>
      )}

      {/* Main Content with Routes */}
      <div>
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Home Page */}
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/Projects" element={<Projects />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/property/:id" element={<PropertyDetail />} /> {/* Dynamic route */}
      </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
