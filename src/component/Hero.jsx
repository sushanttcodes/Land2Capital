import React, { useEffect, useState } from "react";
import ContactModal from "./ContactModal"; 

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/embed/ytjlasbuqb.js";
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);
  }, []);

  return (
    <section
      className="relative flex items-center min-h-screen bg-black text-white"
      id="home"
    >

      {/* Modal Component */}
      <div className="transition-opacity duration-300 ease-in-out opacity-100 ...">
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
      

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:mx-[50px]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center lg:text-left">
            Unlock Capital From Your{" "}
            <span className="text-[#ff264e]">₹100 Crore+ Land Assets</span>
          </h1>
          <p className="text-base sm:text-lg mb-6 text-center lg:text-left px-2 sm:px-0">
            Private, discreet and structured funding solutions — trusted by
            India’s elite landowners and promoters.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#ff264e] hover:bg-[#e02544] text-white py-3 px-6 rounded-lg text-base sm:text-lg"
            >
              📩 Book Consultation
            </button>
          </div>
        </div>

        {/* Right Video */}
        <div className="lg:w-1/2 w-full px-2 sm:px-4">
          <div className="relative w-full" style={{ paddingTop: "100%" }}>
            <wistia-player
              media-id="ytjlasbuqb"
              aspect="1.0"
              className="absolute top-0 left-0 w-full h-full"
            ></wistia-player>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
