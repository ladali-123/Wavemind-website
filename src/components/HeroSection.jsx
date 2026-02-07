import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section
      id="herosection"
      className="hero-gradient pt-24 sm:pt-20 md:pt-32 pb-10 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-16 text-dark"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-12 items-center">

        <div className="text-center md:text-left">
    <h1
  className="
    text-3xl sm:text-4xl md:text-6xl 
    font-bold
    leading-tight sm:leading-snug md:leading-[1.1]
    bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 
    bg-clip-text text-transparent
  "
>
  India's Best Elite{" "}
  <span className="block sm:inline">
    Physics Mentorship
  </span>{" "}
  <span className="block text-blue-600 md:text-4xl text-2xl md:mt-4 ">
    for IIT JEE, NSEP & Olympiads.
  </span>
</h1>




          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-full sm:max-w-2xl mx-auto md:mx-0">
            Master new skills with our engaging courses, interactive lessons, and
            personalized learning paths.
          </p>

          <p className="mt-3 sm:mt-3 text-sm sm:text-base font-bold text-blue-700 tracking-wide uppercase">
            Explore Our Courses
          </p>

          {/* Course Buttons */}
          <div className="mt-3 sm:mt-3 flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
            <button
              onClick={() => navigate('/olympiad')}
              className="px-5 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Olympiad
            </button>

            <button 
            onClick={() => navigate('/iit')}
            className="px-5 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              IIT JEE
            </button>
          </div>

          <div className="mt-3 sm:mt-4 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center
                px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-bold text-white
                rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 
                hover:from-blue-700 hover:to-blue-800
                transition-all duration-300 shadow-xl hover:shadow-2xl
                transform hover:-translate-y-1 hover:scale-105
                border-2 border-blue-500/20"
            >
              Register Today
              <svg
                className="ml-2 w-4 sm:w-5 h-4 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mt-4 md:mt-0">
          <img
            src="https://i.pinimg.com/736x/81/0d/23/810d2349c2595b63ecfd644a62ed1e90.jpg"
            alt="Students learning"
            className="rounded-xl shadow-2xl w-full"
          />

          <div className="absolute -bottom-4 -left-4 bg-white p-2 sm:p-6 rounded-xl shadow-lg hidden md:block">
            <p className="font-bold text-sm sm:text-base">Interactive Lessons</p>
            <p className="text-xs sm:text-sm mt-1">Engaging content that makes learning fun</p>
          </div>

          <div className="absolute -top-4 -right-4 bg-blue-900 text-white p-3 sm:p-6 rounded-xl shadow-lg hidden md:block">
            <p className="font-bold text-sm sm:text-base">Progress Tracking</p>
            <p className="text-xs sm:text-sm mt-1">Monitor your learning journey</p>
          </div>
        </div>
      </div>
    </section>
  );
}
