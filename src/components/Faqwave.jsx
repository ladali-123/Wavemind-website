import React, { useState } from "react";
import faqimg from "../assets/faqimg.jpg";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do you ensure high quality of teaching consistently?",
    a: "We follow a structured academic plan, regular faculty reviews, student feedback, and continuous content upgrades to ensure consistent teaching quality."
  },
  {
    q: "How will you take mock tests and give All India Ranks?",
    a: "Mock tests are conducted on a national-level test platform with real-time evaluation and All India Rank generation."
  },
  {
    q: "When are the batches starting?",
    a: "Batches start every month. Please contact our academic counselor for the exact schedule."
  },
  {
    q: "Can I talk to a teacher before enrolling the student?",
    a: "Yes, you can book a counseling session or academic interaction before enrollment."
  },
  {
    q: "Can I get a demo class before enrolling in the course?",
    a: "Yes, demo classes are available both online and offline."
  },
  {
    q: "Why should I not join an old known institute but join PracBee?",
    a: "PracBee focuses on personalized learning, updated content, smaller batches, and measurable outcomes."
  },
  {
    q: "How do I pay for the course?",
    a: "You can pay online via UPI, card, net banking, or visit our center for offline payment."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null); // default closed

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] shadow-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        {/* LEFT FAQ */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-10">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-gray-200">
            {faqs.map((item, index) => (
              <div key={index} className="py-4 sm:py-5">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-800">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-full">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center mt-8 lg:mt-0">
          <img
            src={faqimg}
            alt="FAQ Illustration"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
