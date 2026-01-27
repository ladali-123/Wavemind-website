import React from "react";

const IITJEE = () => {
  return (
    <div id="iit" className="font-sans text-gray-800">
      
      {/* Hero Section */}
      <div className="text-center px-5 py-12 bg-gray-100">
        <h1 className="text-4xl font-bold mb-2 mt-16 mt-6">
          IIT-JEE Mentorship Program
        </h1>
        <p className="text-2xl text-gray-600 mb-5">
          for JEE Main & JEE Advanced
        </p>
        <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
          Build strong concepts, master problem-solving, and boost your rank
          with structured guidance for IIT-JEE.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md text-lg transition">
          ENROLL NOW
        </button>
      </div>

      {/* Course List */}
      <div className="max-w-4xl mx-auto my-12 px-5">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our IIT-JEE Courses
        </h2>

        <div className="bg-white border border-gray-300 rounded-lg p-5 mb-5 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">
            JEE Main Foundation
          </h3>
          <p className="text-gray-700">
            Concept-building course covering Physics, Chemistry, and Mathematics
            with regular tests and analysis.
          </p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-5 mb-5 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">
            JEE Advanced Preparation
          </h3>
          <p className="text-gray-700">
            Advanced-level problem solving, previous year questions,
            and in-depth theory for top ranks.
          </p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-5 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">
            Rank Booster Program
          </h3>
          <p className="text-gray-700">
            Intensive practice, mock tests, and personalized mentorship
            to maximize your score.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-5 py-10 bg-gray-100">
        <div className="text-center max-w-xs">
          <h3 className="text-xl font-semibold mb-2">
            Daily Practice Problems
          </h3>
          <p className="text-gray-600">
            Hand-picked questions for concept clarity
          </p>
        </div>

        <div className="text-center max-w-xs">
          <h3 className="text-xl font-semibold mb-2">
            Doubt Solving Support
          </h3>
          <p className="text-gray-600">
            1-to-1 doubt resolution with expert mentors
          </p>
        </div>
      </div>
    </div>
  );
};

export default IITJEE;
