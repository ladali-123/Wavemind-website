import React from "react";

const syllabusData = [
  {
    title: "Advanced Mechanics",
    content:
      "Builds a strong command over Newtonian mechanics with emphasis on multi-dimensional motion, conservation laws and Olympiad-level modelling.",
  },
  {
    title: "Rigid Body Dynamics",
    content:
      "Covers rotation, torque, angular momentum and rolling motion with constraint-based and multi-body problem solving.",
  },
  {
    title: "Advanced Electricity & Magnetism",
    content:
      "Develops a field-based understanding of electrostatics and magnetism using symmetry, Gauss's law and physical reasoning.",
  },
  {
    title: "AC Circuits",
    content:
      "Introduces AC theory, phasors, impedance and resonance with real-world circuit analysis.",
  },
  {
    title: "Geometrical & Wave Optics",
    content:
      "Covers ray optics, interference, diffraction and polarization with Olympiad-style conceptual depth.",
  },
  {
    title: "Special Relativity (Basics)",
    content:
      "Introduces relativistic kinematics focusing on conceptual clarity rather than memorization.",
  },
  {
    title: "Modern & Nuclear Physics",
    content:
      "Atomic models, nuclear reactions and radioactive decay bridging classical and quantum ideas.",
  },
  {
    title: "Mathematical Methods in Physics",
    content:
      "Vectors, calculus, differential equations and approximation techniques essential for Olympiads.",
  },
];

const Olympiad = () => {
  const scrollToSyllabus = () => {
    document
      .getElementById("syllabus")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCourse = () => {
    document
      .getElementById("course")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-800 bg-slate-50">
      {/* HERO */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/7d/a4/91/7da4915d5c5415bd16bd763047069020.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-100/85"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-white">
          <p className="uppercase tracking-widest text-white/70 mb-4 mt-6">
            Physics Olympiad Program
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            NSEP & INPhO Olympiad Training
          </h1>

          <p className="text-lg md:text-xl max-w-3xl opacity-90 mb-12">
            A concept-driven, mathematically rigorous program designed to
            prepare students for India's highest stages of Physics Olympiads.
          </p>

          <div className="flex gap-4">
            <button
              onClick={scrollToCourse}
              className="px-8 py-3 rounded-full font-semibold border border-white/40 hover:bg-white/10 transition"
            >
              View Program
            </button>

            <button
              onClick={scrollToSyllabus}
              className="px-8 py-3 rounded-full font-semibold bg-blue-600 hover:bg-blue-500 transition"
            >
              View Syllabus
            </button>
          </div>
        </div>
      </section>

      {/* COURSE DETAILS - Now always visible */}
      <section
        id="course"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold tracking-wide uppercase mb-2">
            Choose Your Program
          </p>
          <h2 className="text-4xl font-bold">
            Our Olympiad Programs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Rank Booster Program (Coming Soon) */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-3 hover:shadow-2xl border border-gray-100">
            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/be/f5/07/bef50747c06b4840fbb2f359b91b456d.jpg"
                alt="Rank Booster"
                className="h-48 w-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-gray-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Launching Soon
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4"> IOQM RMO</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Intensive mocks, detailed analysis, and personalized mentorship for top ranks in JEE Advanced.
              </p>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-2xl font-bold text-gray-400">₹Coming Soon</p>
                  <p className="text-sm text-gray-500">Advanced program</p>
                </div>
                <button
                  className="px-6 py-2.5 bg-gray-300 text-gray-600 font-semibold rounded-full cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </button>
              </div>

              <div className="flex items-center text-sm text-gray-400">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Mock Test Series</span>
                <span className="mx-3">•</span>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>1:1 Mentorship</span>
              </div>
            </div>
          </div>

          {/* Card 2: NSEP & INPhO Olympiad Preparation */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-3 hover:shadow-2xl border border-gray-100">
            <div className="relative">
              <img
                src="https://i.pinimg.com/1200x/80/3d/03/803d033c51360eec5f409285a05303f5.jpg"
                alt="NSEP & INPhO Olympiad Preparation"
                className="h-48 w-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">NSEP & INPhO Olympiad Preparation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive theory, problem-solving, and previous year questions for top performance.
              </p>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-2xl font-bold text-green-600">₹30,000</p>
                  <p className="text-sm text-gray-500">Complete program</p>
                </div>
                <button
                  onClick={scrollToSyllabus}
                  className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-md transition"
                >
                  View Course
                </button>
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Live Classes</span>
                <span className="mx-3">•</span>
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Study Material</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section
        id="syllabus"
        className="max-w-6xl mx-auto px-6 py-6"
      >
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase mb-2">
            Academic Depth
          </p>
          <h2 className="text-4xl font-bold">
            INPhO-Aligned Physics Syllabus
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Each module is structured to build intuition, mathematical clarity
            and Olympiad-level reasoning.
          </p>
        </div>

        <div className="space-y-6">
          {syllabusData.map((item, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition"
            >
              <summary className="flex justify-between items-center text-xl font-semibold cursor-pointer">
                <span className="group-open:text-blue-700">
                  {item.title}
                </span>
                <span className="text-blue-600 text-2xl transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                {item.content}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* OLYMPIAD STAGES */}
      <section className="bg-[#fff3eb] py-12 px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-gray-600 mb-2">
            Olympiad Journey
          </p>
          <h2 className="text-4xl font-bold">
            Physics Olympiad Progression
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6">
          {["NSEP", "INPhO", "OCSC", "PDT", "IPhO"].map((stage, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md text-center transition transform hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Stage {i + 1}
              </p>
              <p className="text-blue-600 font-bold text-2xl mt-3">
                {stage}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Olympiad;