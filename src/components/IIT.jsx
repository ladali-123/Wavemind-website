import React, { useRef } from "react";

const iitSyllabus = [
  {
    title: "Physics",
    content:
      "Mechanics: Kinematics, Newton's Laws, Work & Energy, Rotational Motion, Gravitation.\nElectrodynamics: Electrostatics, Current Electricity, Magnetic Fields, EM Induction.\nWaves & Optics: Wave motion, Sound, Ray & Wave Optics.\nModern Physics: Atomic, Nuclear, Photoelectric effect, Semiconductor basics.",
  },
  {
    title: "Chemistry",
    content:
      "Physical Chemistry: Atomic structure, Thermodynamics, Chemical Kinetics, Equilibrium.\nOrganic Chemistry: General organic chemistry, Hydrocarbons, Functional groups, Biomolecules.\nInorganic Chemistry: Periodic table, Chemical bonding, Coordination compounds, p-Block, d-Block & f-Block elements.",
  },
  {
    title: "Mathematics",
    content:
      "Algebra: Quadratic equations, Sequences & Series, Complex numbers.\nCalculus: Limits, Differentiation, Integration, Differential equations.\nCoordinate Geometry: Straight lines, Circles, Conic sections.\nVectors & 3D Geometry: Vectors, Planes, Lines in 3D.\nTrigonometry & Probability: Trigonometric identities, Probability, Permutations & Combinations.",
  },
];

const IITJEE = () => {
  const syllabusRef = useRef(null);

  // Scroll smoothly to syllabus section
  const scrollToSyllabus = () => {
    syllabusRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-800 bg-slate-50">

      {/* HERO SECTION - REDESIGNED */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/1200x/d3/14/61/d314612f75f8699f1ca15983c03ad81e.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-900/80 to-indigo-900/85"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 text-white">
          
          {/* BADGE/TAG */}
          

          {/* MAIN HEADING */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight mt-8">
            IIT-JEE Mentorship 
            <span className="text-yellow-300">Program</span>
          </h1>

          {/* SUBHEADING */}
          <p className="text-2xl md:text-3xl font-semibold mb-3 text-blue-100">
            for JEE Main & JEE Advanced
          </p>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl max-w-2xl opacity-95 mb-8 leading-relaxed">
            Build strong concepts, master problem-solving, and boost your rank with 
            structured guidance for IIT-JEE.
          </p>

          {/* QUICK STATS */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90">Complete Syllabus Coverage</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90">Expert IIT Faculty</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90">Personalized Doubt Support</span>
            </div>
          </div>

          {/* CTA BUTTON */}
          <button
            onClick={scrollToSyllabus}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Explore Program Details →
          </button>

        </div>
      </section>

      {/* COURSES / CARDS */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
            Choose Your Program
          </p>
          <h2 className="text-3xl font-bold">
            Our IIT-JEE Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Card 1: JEE Main & Advanced */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition flex flex-col transform hover:-translate-y-3 hover:shadow-2xl border border-gray-100 flex-1">
            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/30/79/8e/30798efcbe595d8462804c7ef683198a.jpg"
                alt="JEE Main & Advanced"
                className="h-48 w-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">JEE Main & Advanced Preparation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive theory, problem-solving, and previous year questions for top performance.
              </p>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-2xl font-bold text-green-600">₹50,000</p>
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

          {/* Card 2: What You Gain by Joining */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-3 hover:shadow-2xl border border-gray-100 flex-1">
            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/c2/d3/c0/c2d3c03217d3bd7eace388a95189b135.jpg"
                alt="Achievements and Gains"
                className="h-48 w-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Achievements
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">What You Gain by Joining</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Unlock your potential: Achieve top ranks, secure IIT admissions, build lifelong skills, and gain confidence for a bright future.
              </p>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-2xl font-bold text-green-600">Success Stories</p>
                  <p className="text-sm text-gray-500">Real student achievements</p>
                </div>
                <button
                  onClick={() => window.location.href = "/#contact"}
                  className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-md transition"
                >
                  Join Now
                </button>
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Top Ranks</span>
                <span className="mx-3">•</span>
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>IIT Admissions</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* IIT-JEE Syllabus Section */}
      <section ref={syllabusRef} className="max-w-6xl mx-auto px-6 py-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
            Complete Coverage
          </p>
          <h2 className="text-3xl font-bold mb-4">
            IIT-JEE Syllabus – Conceptual Breakdown
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detailed subject-wise syllabus designed for JEE Main & Advanced preparation
          </p>
        </div>

        <div className="space-y-6">
          {iitSyllabus.map((item, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl border border-gray-200 hover:border-blue-200"
            >
              <summary className="flex justify-between items-center cursor-pointer">
                <div>
                  <h3 className="text-xl font-bold text-blue-700 group-hover:text-blue-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Complete JEE Main & Advanced syllabus
                  </p>
                </div>
                <span className="text-3xl text-blue-600 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {item.content}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
};

export default IITJEE;