import React, { useState } from "react";


const Testimonials = () => {
  // State to store reviews
  // Initial reviews are hardcoded here, each with a name, role, image, rating, and message.
  const [reviews, setReviews] = useState([
  {
    name: "Donald Jackman",
    role: "Marketing Manager",
    image:  '/images/men1.jpg' , 
    rating: 5,
    message:
    "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
},

    {
      name: "Richard Nelson",
      role: "UI/UX Designer",
      image: '/images/men2.jpg',
      rating: 5,
      message:
        "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
    },
    {
      name: "James Washington",
      role: "Co-Founder",
      image: '/images/men3.jpg',
      rating: 5,
      message:
        "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
    },
  ]);

  // State for managing the new review form
  // This state holds the data entered in the form (name, role, image, rating, and message).
  const [newReview, setNewReview] = useState({
    name: "",
    role: "",
    image: "",
    rating: 5, // Default rating is 5 stars
    message: "",
  });

  // Function to handle changes in the form inputs (name, role, image, message)
  // Updates the `newReview` state as the user types into the inputs or textarea.
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setNewReview({ ...newReview, [name]: value }); // Update the corresponding field in the state
  };

  // Function to handle changes in the star rating
  // Updates the `rating` field in the `newReview` state when a star is clicked.
  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  // Function to handle the submission of the review form
  // Adds the new review to the `reviews` state and resets the form fields.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setReviews([...reviews, newReview]); // Add the new review to the existing reviews
    // Reset the form fields to their initial values
    setNewReview({
      name: "",
      role: "",
      image: "",
      rating: 5,
      message: "",
    });
  };

  return (
    <div className="bg-gray-100 py-10 px-6">
      {/* Title Section */}
      <h1 className="text-3xl font-bold text-center mb-4 pt-20">Customer Testimonials</h1>
      <p className="text-center text-gray-600 mb-10">
        Real Stories from Those Who Found Home with Us
      </p>

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Map over the `reviews` array and display each review */}
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            {/* Display the reviewer's image */}
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            {/* Display the reviewer's name and role */}
            <h2 className="text-lg font-semibold">{review.name}</h2>
            <p className="text-sm text-gray-500">{review.role}</p>
            {/* Display stars based on the rating */}
            <div className="flex justify-center my-2">
              {Array(review.rating)
                .fill(0) // Create an array of the given rating size
                .map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span> // Render a star for each rating point
                ))}
            </div>
            {/* Display the review message */}
            <p className="text-gray-700">{review.message}</p>
          </div>
        ))}
      </div>

      {/* Add New Review Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-center mb-4">Add a Review</h2>
        {/* Form for adding a new review */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
        >
          {/* Input for reviewer's name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newReview.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2 mb-4"
            required
          />
          {/* Input for reviewer's role */}
          <input
            type="text"
            name="role"
            placeholder="Role (e.g., Marketing Manager)"
            value={newReview.role}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2 mb-4"
            required
          />
          {/* Input for reviewer's image URL */}
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newReview.image}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2 mb-4"
          />
          {/* Textarea for review message */}
          <textarea
            name="message"
            placeholder="Review Message"
            value={newReview.message}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2 mb-4"
            required
          ></textarea>
          {/* Star Rating Input */}
          <div className="flex justify-center mb-4">
            {/* Display 5 stars that can be clicked to set the rating */}
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-2xl cursor-pointer ${
                  i < newReview.rating ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => handleRatingChange(i + 1)} // Set the rating based on the star clicked
              >
                ★
              </span>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit Review
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Testimonials;
