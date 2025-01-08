import React, { useState } from "react";

const SignIn = () => {
  // State to store registered users
  const [users, setUsers] = useState([]);

  // State to manage the current logged-in user
  const [currentUser, setCurrentUser] = useState(null);

  // State to toggle between login and sign-up forms
  const [formType, setFormType] = useState("login"); // Possible values: "login" or "signup"

  // State to handle form inputs for both login and sign-up forms
  const [formData, setFormData] = useState({
    name: "", // Name of the user (only used in sign-up)
    email: "", // Email of the user
    password: "", // Password of the user
    property: "", // Property info (e.g., 3 BHK apartment)
    propertyImage: null, // New field for property image (stores the file uploaded)
  });

  // State to manage the dashboard tabs
  const [activeTab, setActiveTab] = useState("profile"); // Default active tab is "profile"

  // Function to handle input changes for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData({ ...formData, [name]: value }); // Update form data dynamically based on the name of the input
  };

  // Function to handle image upload
  const handleImageChange = (e) => {
    setFormData({ ...formData, propertyImage: e.target.files[0] }); // Store the uploaded image in the state
  };

  // Function to handle sign-up form submission
  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    // Check if the email is already registered by looking through the users array
    if (users.some((user) => user.email === formData.email)) {
      alert("Email already exists!"); // Alert user if email is already registered
      return; // Exit the function early
    }
    // Add the new user to the users list
    setUsers([...users, formData]);
    // Switch to the login form after successful sign-up
    setFormType("login");
    // Clear the form data after sign-up
    setFormData({ name: "", email: "", password: "", property: "", propertyImage: null });
    alert("Sign-up successful! Please log in.");
  };

  // Function to handle login form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    // Check if the email and password match any registered user
    const user = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (user) {
      setCurrentUser(user); // Set the logged-in user
      // Clear the form data after login
      setFormData({ name: "", email: "", password: "", property: "", propertyImage: null });
    } else {
      alert("Invalid email or password!"); // Alert if credentials are incorrect
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setCurrentUser(null); // Clear the current user session
  };

  // Function to handle updating user profile
  const handleUpdateProfile = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    // Update user details in the users list by mapping over all users
    const updatedUsers = users.map((user) =>
      user.email === currentUser.email ? { ...currentUser, ...formData } : user
    );
    setUsers(updatedUsers); // Update the users state
    setCurrentUser({ ...currentUser, ...formData }); // Update current user state
    alert("Profile updated successfully!"); // Alert user that profile is updated
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* If no user is logged in, show login or sign-up form */}
      {!currentUser ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md sm:mt-20 pt-15">
          {/* Dynamic title based on form type */}
          <h1 className="text-2xl font-bold text-center mb-10 pt-16 sm:pt-20 md:pt-24">
            {formType === "login" ? "Login" : "Sign Up"}
          </h1>


          {/* Form for login or sign-up */}
          <form onSubmit={formType === "login" ? handleLogin : handleSignUp}>
            {/* Name input only for sign-up */}
            {formType === "signup" && (
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md p-2 mb-4"
                required
              />
            )}
            {/* Email input for both forms */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2 mb-4"
              required
            />
            {/* Password input for both forms */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2 mb-4"
              required
            />
            {/* Property input only for sign-up */}
            {formType === "signup" && (
              <>
                <input
                  type="text"
                  name="property"
                  placeholder="Property Info (e.g., 3 BHK Apartment)"
                  value={formData.property}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md p-2 mb-4"
                  required
                />
                {/* Property Image upload */}
                <input
                  type="file"
                  name="propertyImage"
                  onChange={handleImageChange}
                  className="w-full border-gray-300 rounded-md p-2 mb-4"
                  required
                />
              </>
            )}
            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600"
            >
              
            
            {formType === "login" ? "Login" : "Sign Up"}
          

            </button>
          </form>
          {/* Toggle between login and sign-up forms */}
          <p className="text-center text-gray-600 mt-4">
            {formType === "login" ? (
              <>
                Don't have an account?{" "}
                <span
                    className="text-blue-500 cursor-pointer text-lg font-semibold block text-center md:inline-block"
                    onClick={() => setFormType("signup")}
                  >
                    Sign Up
                  </span>

              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setFormType("login")}
                >
                  Login
                </span>
              </>
            )}
          </p>
        </div>
      ) : (
        // If a user is logged in, display the dashboard
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
         <h1 className="text-2xl font-bold text-center mb-6 pt-10 sm:pt-16 mt-16">
            Welcome, {currentUser.name}!
          </h1>

          {/* Dashboard Tabs */}
          <div className="flex justify-around border-b mb-6">
            <button
              className={`py-2 px-4 ${activeTab === "profile" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </button>
            <button
              className={`py-2 px-4 ${activeTab === "update" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
              onClick={() => setActiveTab("update")}
            >
              Update Profile
            </button>
            <button
              className={`py-2 px-4 ${activeTab === "properties" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
              onClick={() => setActiveTab("properties")}
            >
              Properties
            </button>
          </div>

          {/* Dashboard Content */}
          {activeTab === "profile" && (
            <div>
              <p className="text-gray-700">
                <strong>Email:</strong> {currentUser.email}
              </p>
              <p className="text-gray-700">
                <strong>Property:</strong> {currentUser.property}
              </p>
              {currentUser.propertyImage && (
                <div>
                  <strong>Property Image:</strong>
                  <img
                    src={URL.createObjectURL(currentUser.propertyImage)}
                    alt="Property"
                    className="w-full h-auto mt-4"
                  />
                </div>
              )}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600 mt-6"
              >
                Logout
              </button>
            </div>
          )}

          {activeTab === "update" && (
            <form onSubmit={handleUpdateProfile}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md p-2 mb-4"
              />
              <input
                type="text"
                name="property"
                placeholder="Property Info"
                value={formData.property}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md p-2 mb-4"
              />
              <button
                type="submit"
                className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600"
              >
                Update Profile
              </button>
            </form>
          )}

          {activeTab === "properties" && (
            <div>
              <p className="text-gray-700">
                <strong>Property:</strong> {currentUser.property}
              </p>
              {currentUser.propertyImage && (
                <div>
                  <strong>Property Image:</strong>
                  <img
                    src={URL.createObjectURL(currentUser.propertyImage)}
                    alt="Property"
                    className="w-full h-auto mt-4"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignIn;
