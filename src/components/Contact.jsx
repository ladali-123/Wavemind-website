import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_jkt03um",
        "template_7sh373b",
        e.target,
        "44ACjl1zaWtq0u3Tt"
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        e.target.reset();
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong. Please try again.");
        console.error(err);
      });
  };

  return (
    <section id="contact" className="w-full  py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 bg-gray-100">
     <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-2 md:gap-14 items-stretch">


        {/* LEFT IMAGE - DESKTOP */}
        <div className="hidden md:block h-full">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="JEE Olympiad preparation"
            className="h-full w-full object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* IMAGE FOR MOBILE */}
        <div className="md:hidden w-full mb-6">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="JEE Olympiad preparation"
            className="w-full h-auto object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl border border-gray-300 shadow-lg p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center md:text-left">
            Contact Us
          </h2>

          <p className="mt-2 text-gray-600 text-center md:text-left text-sm sm:text-base">
            Apply for JEE / Olympiad classes (Class 9 – 12)
          </p>

          {submitted && (
            <div className="mt-6 p-4 rounded-lg bg-green-100 text-green-700 font-medium text-center md:text-left">
              ✅ Thank you! Your enquiry has been submitted.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* Student Name */}
            <input
              name="student_name"
              placeholder="Student Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
            />

            {/* Phone */}
            <input
              name="phone"
              placeholder="WhatsApp / Phone Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
            />

            {/* City */}
            <input
              name="city"
              placeholder="City"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
            />

            {/* Class + Apply */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                name="class"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
              >
                <option>Class 8</option>
                <option>Class 10</option>
                <option>Class 11</option>
                 <option>Class 12</option>
              </select>

              <select
                name="apply_for"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
              >
                <option>Olympiad</option>
                <option>JEE</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              placeholder="Any message or query"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
