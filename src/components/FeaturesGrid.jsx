import React from "react";

const features = [
  {
    title: "Two Way Audio & Video",
    desc: "Ensures that the student is engaged and understands the concepts.",
    icon: "🎥",
  },
  {
    title: "In-Class Practice",
    desc: "Ensures learning and practical application. AI portal for student queries.",
    icon: "🧑‍💻",
  },
  {
    title: "In-Class Doubts",
    desc: "All the doubts are resolved in the class itself to make students doubt-free.",
    icon: "❓",
  },
  {
    title: "Daily Homework",
    desc: "Includes 2 hours of practice work per class hour, plus weekly tests and mock tests.",
    icon: "📘",
  },
  {
    title: "Monthly PTMs",
    desc: "Address concerns and regularly share updates on attendance, performance feedback and test scores.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "1:1 Mentoring",
    desc: "Taken by senior faculty every 15 days to track, monitor and boost learning.",
    icon: "🎓",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Personalized & Futuristic Teaching
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
