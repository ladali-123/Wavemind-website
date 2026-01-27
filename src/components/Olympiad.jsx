import React from "react";

const Olympiad = () => {
  return (
    <div
      id="olympiad"
      className="font-sans text-gray-800"
    >
      {/* Hero Section */}
      <div className="text-center px-5 py-12 bg-gray-100">
        <h1 className="text-4xl font-bold mb-2 md:mt-16 mt-6">
          Olympiad Physics Mentorship
        </h1>
        <p className="text-2xl text-gray-600 mb-5">
          for NSEP, INPhO and International Physics Olympiads.
        </p>
        <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
          Master Olympiad physics with our engaging courses, interactive lessons,
          and personalized learning paths.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md text-lg transition">
          ENROLL NOW
        </button>
      </div>

      {/* Course List */}
      <div className="max-w-4xl mx-auto my-12 px-5">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Olympiad Courses
        </h2>

        <div className="bg-white border border-gray-300 rounded-lg p-5 mb-5 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">
            NSEP (National Standard Examination in Physics)
          </h3>
          <p className="text-gray-700">
            This course covers the entire syllabus of NSEP. It includes video
            lectures, problem solving sessions, and mock tests.
          </p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-5 mb-5 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">
            INPhO (Indian National Physics Olympiad)
          </h3>
          <p className="text-gray-700">
            Advanced problem solving and theoretical concepts for INPhO.
            Includes previous year papers and expert guidance.
          </p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-5 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">
            International Physics Olympiad (IPhO)
          </h3>
          <p className="text-gray-700">
            For students who qualify INPhO and aim for IPhO. Intensive training
            with international standards.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-5 py-10 bg-gray-100">
        <div className="text-center max-w-xs">
          <h3 className="text-xl font-semibold mb-2">
            Promises Tracking
          </h3>
          <p className="text-gray-600">
            Monitor your learning journey
          </p>
        </div>

        <div className="text-center max-w-xs">
          <h3 className="text-xl font-semibold mb-2">
            Interactive Lessons
          </h3>
          <p className="text-gray-600">
            Engaging content that makes learning fun
          </p>
        </div>
      </div>
    </div>
  );
};

export default Olympiad;
