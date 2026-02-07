import React from "react";
import {
  Monitor,
  BookOpen,
  ClipboardList,
  Users,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

const steps = [
  {
    step: "STEP 1",
    title: "Online Classes",
    desc: "Student attends live one-to-one class with expert teacher with 2-way video & audio mandatory.",
    color: "text-sky-400",
    dot: "bg-sky-400",
    icon: <Monitor size={18} />,
    side: "right",

    
  },
  {
    step: "STEP 2",
    title: "Practice & Homework",
    desc: "Daily practice homework provided by teachers & checked before every new class.",
    color: "text-orange-400",
    dot: "bg-orange-400",
    icon: <BookOpen size={18} />,
    side: "left",
  },
  {
    step: "STEP 3",
    title: "Weekly Tests & Mocks",
    desc: "Chapter quizzes, part syllabus tests and full syllabus mock tests provided.",
    color: "text-cyan-400",
    dot: "bg-cyan-400",
    icon: <ClipboardList size={18} />,
    side: "right",
  },
  {
    step: "STEP 4",
    title: "Mentoring & Tracking",
    desc: "Every 15 days, senior faculty guides and mentors students with full performance tracking.",
    color: "text-emerald-400",
    dot: "bg-emerald-400",
    icon: <Users size={18} />,
    side: "left",
  },
  {
    step: "STEP 5",
    title: "Doubt Solving",
    desc: "All doubts resolved in class. Special doubt sessions scheduled as per need.",
    color: "text-sky-400",
    dot: "bg-sky-400",
    icon: <HelpCircle size={18} />,
    side: "right",
  },
  {
    step: "STEP 6",
    title: "PTM & Feedback",
    desc: "Monthly PTM, daily updates and feedback to parents by teachers.",
    color: "text-orange-400",
    dot: "bg-orange-400",
    icon: <MessageSquare size={18} />,
    side: "left",
  },
];

const StatsBar = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#2a0f1f] via-[#0b0d1a] to-[#05060f] text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold mb-2">
          The Wavemind Way
        </h2>

        {/* Timeline */}
        <div className="relative mt-6">
          {/* center line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/20" />

          <div className="space-y-4">
            {steps.map((item, i) => (
              <div
                key={i}
                className={`relative grid grid-cols-2 items-center ${
                  item.side === "left" ? "text-right" : "text-left"
                }`}
              >
                {/* LEFT */}
                <div className={`${item.side === "left" ? "pr-4" : "opacity-0"}`}>
                  {item.side === "left" && (
                    <>
                      <span
                        className={`text-[14px] font-bold ${item.color}`}
                      >
                        {item.step}
                      </span>
                      <h3 className="text-2xl font-bold mt-1 flex items-center justify-end gap-2">
                        {item.title}
                        {item.icon}
                      </h3>
                      <p className="text-gray-400 mt-0.5  leading-snug text-lg">
                        {item.desc}
                      </p>
                    </>
                  )}
                </div>

                {/* DOT */}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${item.dot}`}
                />

                {/* RIGHT */}
                <div
                  className={`${item.side === "right" ? "pl-4" : "opacity-0"}`}
                >
                  {item.side === "right" && (
                    <>
                      <span
                        className={`text-[14px] font-bold ${item.color}`}
                      >
                        {item.step}
                      </span>
                      <h3 className="text-2xl font-bold mt-1 flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mt-0.5  leading-snug text-lg">
                        {item.desc}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
