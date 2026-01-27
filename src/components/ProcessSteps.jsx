import React from "react";
import iitImage from "../assets/iit.jpg";
import olympiadImage from "../assets/olympiad.jpg";

const ProcessSteps = () => {
  return (
    <section id="processsteps" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold text-gray-900 mb-12">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* IIT JEE CARD */}
          <div className="relative rounded-3xl bg-blue-200 p-6 sm:p-8 overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                Engineering
              </h3>
              <p className="text-blue-700 font-semibold mb-4 text-sm sm:text-base">
                AI-POWERED & HIGHEST NO. OF TESTS
              </p>
              <ul className="space-y-1 sm:space-y-2 text-gray-800 font-medium text-sm sm:text-base">
                <li>➤ IIT JEE (Main)</li>
                <li>➤ IIT JEE (Advanced)</li>

              </ul>
              <button className="mt-4 sm:mt-6 bg-blue-500 hover:bg-blue-600 text-white 
              px-5 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold">
                Book Free Session
              </button>
            </div>

            {/* Image - positioned absolutely on all screens */}
            <img
              src={iitImage}
              alt="IIT JEE"
              className="absolute right-2 bottom-0 w-28 sm:w-36 md:w-40"
            />
          </div>

          {/* OLYMPIAD CARD */}
          <div className="relative rounded-3xl bg-green-200 p-6 sm:p-8 overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">
                Foundation
              </h3>
              <p className="text-emerald-700 italic font-semibold mb-4 text-sm sm:text-base">
                TEST-DRIVEN PREPARATION              </p>
              <ul className="space-y-1 sm:space-y-2 text-gray-800 font-medium text-sm sm:text-base">
                <li>➤ NSEP</li>
                <li> ➤ Olympiads</li>



              </ul>
              <button className="mt-4 sm:mt-6 bg-emerald-700 hover:bg-emerald-800 text-white px-5 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold">
                Book Free Session
              </button>
            </div>

            {/* Image - positioned absolutely on all screens */}
            <img
              src={olympiadImage}
              alt="Olympiad"
              className="absolute right-2 bottom-0 w-28 sm:w-36 md:w-46"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;