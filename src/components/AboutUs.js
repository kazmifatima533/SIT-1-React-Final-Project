import React from "react";

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12">
     <div className="lg:w-1/2 flex justify-center pt-12">
        <div className="relative w-full max-w-lg">
            <img
            src="/images/about.jpg"
            alt="About Us"
            className="rounded-tl-[200px] rounded-br-[200px] w-full h-auto object-cover"
            />
        </div>
        </div>


      {/* Right Content Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
        <h2 className="text-3xl font-bold mb-4">
          About <span className="text-slate-600">Our Brand</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Passionate About Properties, Dedicated to Your Vision
        </p>
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-600">10+</h3>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-600">12+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-600">20+</h3>
            <p className="text-gray-600">Mn. Sq. Ft. Delivered</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-600">25+</h3>
            <p className="text-gray-600">Ongoing Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
