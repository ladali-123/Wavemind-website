import React from "react";
import mobile1 from "../assets/mobilelogo1.png";
import mobile2 from "../assets/mobilelogo2.png";
import qrCode from "../assets/qrcode.png";

const DownloadAppSection = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Download App
          </h2>
          <p className="text-gray-600 mb-2 text-sm sm:text-base lg:text-lg">
            Free App for 1:1 Learning & Practice
          </p>
          <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg">
            Access to Live Classes | Unlimited Free Practice Tests | Mentoring
          </p>

          {/* QR BOX */}
         <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-gray-50 border rounded-xl p-4 sm:p-6 w-full sm:w-fit shadow-sm">
  <img
    src={qrCode}
    alt="QR Code"
    className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 object-contain"
  />
  <div className="text-center sm:text-left">
    <p className="text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
      Scan QR code to install on your device
    </p>
    <a
      href="https://play.google.com/store/apps/details?id=com.wavemind.edu.com&pcampaignid=web_share"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center sm:justify-start gap-2 bg-black text-white
                 px-4 py-2 rounded-lg text-sm sm:text-base"
    >
      <span className="text-lg sm:text-xl">▶</span>
      Download From <br /> Google Play
    </a>
  </div>
</div>

        </div>

        {/* RIGHT MOBILE IMAGES */}
        <div className="relative flex justify-center items-center w-full min-h-[360px] sm:min-h-[450px] lg:min-h-[520px]">
          {/* BACK MOBILE */}
          <img
            src={mobile2}
            alt="Mobile App Back"
            className="
      w-44 sm:w-56 lg:w-70
      absolute
      left-1/2
      -translate-x-1/2 lg:-translate-x-[110%]  /* mobile centered, desktop offset */
      rotate-[-6deg]
      opacity-95
      drop-shadow-[0_35px_45px_rgba(0,0,0,0.28)]
      animate-floatSlow
    "
          />

          {/* FRONT MOBILE */}
          <img
            src={mobile1}
            alt="Mobile App Front"
            className="
      w-50 sm:w-64 lg:w-72
      relative z-10
      drop-shadow-[0_50px_70px_rgba(0,0,0,0.35)]
      animate-floatFast
    "
          />
        </div>

      </div>
    </section>
  );
};

export default DownloadAppSection;
