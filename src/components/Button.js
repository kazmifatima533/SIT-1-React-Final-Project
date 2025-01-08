import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router

const Button = ({ text, primary, navigateTo, className }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo); // Navigate to the specified path
    }
  };

  return (
    <button
      onClick={handleClick} // Add onClick to trigger the navigation
      className={`${
        primary
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-transparent border-2 border-white text-white hover:bg-blue-500 hover:border-blue-500"
      } ${className} px-8 py-4 text-lg rounded-lg shadow-md`} // Adjust padding and font size
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  navigateTo: PropTypes.string.isRequired, // Accept a string for the navigation path
  className: PropTypes.string, // Allow passing custom className
};

Button.defaultProps = {
  primary: false,
  className: "", // Default to empty string if no className is passed
};

export default Button;
