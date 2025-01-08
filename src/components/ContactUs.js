import React, { useState } from 'react';


const ContactUs = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to show alert
  const [alert, setAlert] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlert('All fields are required!');
      return;
    }

    // Here you would typically send the form data to a server or email.
    // For now, we'll simulate a success alert.
    setAlert('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' }); // Clear the form after submission
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6 mt-20"
      style={{ backgroundImage: `url("/images/contt.jpg")` }} // Set the background image
    >
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">


        <h2 className="text-3xl font-bold text-center mb-10 pt-6">Contact Us</h2>

        {/* Alert */}
        {alert && (
          <div className={`text-center p-4 mb-4 rounded-lg ${alert.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {alert}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Full Name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email Address"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
