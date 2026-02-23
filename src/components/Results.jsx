import resultImg from "../assets/result.jpg";

export default function Results() {
  return (
    <section className="w-full py-14 px-4 bg-gray-100 flex justify-center">
      
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* Heading Top */}
        <div className="px-10 pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our JEE Mains Results
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center p-10 pt-6 gap-10">

          {/* LEFT IMAGE */}
          <div className="md:w-1/2 w-full">
            <img
              src={resultImg}
              alt="JEE Mains Results"
              className="w-full h-[340px] object-cover rounded-2xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-1/2 w-full">
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Our students have delivered exceptional performance in 
              <span className="font-semibold text-gray-900"> JEE Mains 2026 </span>. 
              With rigorous test series, concept-focused learning, and 
              personalized mentorship, we have consistently produced 
              top percentile scorers year after year.
            </p>

            <ul className="mt-6 space-y-3 text-gray-800 text-base md:text-lg">
              <li>✓ 99+ Percentile Achievers</li>
              <li>✓ Consistent Improvement Across Attempts</li>
              <li>✓ Strong Foundation for JEE Advanced</li>
              <li>✓ Data-Driven Test Analysis & Mentorship</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}