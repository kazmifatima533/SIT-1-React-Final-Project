import React from "react";


const Hero = () => {
  return (
    // Main Hero Section with Background Video
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={"/videos/house.mp4"} // Path to the video file
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay Section for Content */}
      <div className="relative bg-gray-900 bg-opacity-80 w-full min-h-screen flex items-center justify-center">
        {/* Main Container */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Section - Text Content */}
          <div className="lg:w-1/2 text-white">
            {/* Heading with margin adjustments */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 mt-12 sm:mt-16 pt-20 lg:mt-0">
              Discover <br /> Most{" "}
              <span className="text-slate-600">Suitable</span> Property
            </h1>

            {/* Subheading */}
            <p className="text-gray-400 mb-8">
              Find a variety of properties that suit you very easily. Forget all
              difficulties in finding a residence for you.
            </p>

            {/* Call to Action Button */}
            <div className="mt-6">
              <button
                className="bg-slate-700 px-6 py-3 text-white hover:bg-slate-950 rounded-lg"
                onClick={() => alert("Redirecting to browse properties...")}
              >
                Browse Properties
              </button>
            </div>

            {/* Statistics Section */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              {/* Statistic 1 */}
              <div>
                <h2 className="text-3xl font-bold text-white">9,000+</h2>
                <p className="text-gray-400">Premium Products</p>
              </div>
              {/* Statistic 2 */}
              <div>
                <h2 className="text-3xl font-bold text-white">2,000+</h2>
                <p className="text-gray-400">Happy Customers</p>
              </div>
              {/* Statistic 3 */}
              <div>
                <h2 className="text-3xl font-bold text-white">28+</h2>
                <p className="text-gray-400">Awards Won</p>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 flex items-center justify-center relative">
            {/* Arched Image Container */}
            <div className="w-[300px] h-[400px] bg-gray-800 rounded-full relative overflow-hidden">
              <img
                src={"/images/h1.jpg"} // Correctly referenced the imported image
                alt="Property"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
