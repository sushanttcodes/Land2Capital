import React, { useState } from "react";
import ContactModal from "../component/ContactModal";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ABOUT SECTION */}
      <section className="py-20 bg-gray-50 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-[#8c1627] font-bold uppercase text-4xl tracking-wide">
              About
            </h3>
            <h2 className="text-2xl lg:text-3xl font-extrabold leading-snug">
              Where Idle Land Becomes <span className="text-[#8c1627]">Active Capital</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              In India, many landowners and businesses own valuable land, but this potential
              has remained unused. <strong>At Land2Capital</strong>, we are dedicated to
              transforming those unused potentials into growth, opportunity and income.
              <br />
              <br />
              We excel in creating <strong>systematic and strategic</strong> models that align
              the land's assets with real capital gains to enable landowners, MSMEs,
              developers and entrepreneurs to take the next big step forward.
              <br />
              <br />
              From structuring income-generating arrangements to enabling capital access
              through partnerships, our solutions are designed to work with the potential your
              land already holds.
            </p>
            <p className="text-lg font-semibold text-gray-800">
              If you have land, then you've already got one big resource on hand.{" "}
              <span className="text-[#8c1627]">We simply help you activate it.</span>
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative group">
            <img
              src="/images/about2.webp"
              alt="About Land2Capital"
              className="rounded-2xl shadow-lg w-full transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#8c1627]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="py-20 bg-white px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="lg:w-1/2 relative group">
            <img
              src="/images/about1.webp"
              alt="Our Philosophy"
              className="rounded-2xl shadow-lg w-full transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#8c1627]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-[#8c1627] font-bold uppercase text-4xl tracking-wide">
              Our Philosophy
            </h3>
            <h2 className="text-2xl lg:text-3xl font-extrabold leading-snug">
              Land is more than real estate —{" "}
              <span className="text-[#8c1627]">it’s a foundation for growth.</span>
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                At <strong>Land2Capital</strong>, we hold that every piece of land will be key
                to India’s economic future, from an{" "}
                <strong>urban expansion zone to a logistics corridor or part of the industrial belt.</strong>
              </p>
              <p>
                But we do not advocate <strong>one-size-fits-all solutions.</strong>
              </p>
              <p>
                Our <strong>high-efficiency market guidance model</strong> is centered on your
                land's strength and market readiness — each one of our plans is custom-designed
                for your goals.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="bg-gray-50 py-20 px-6 md:px-20 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Mission */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#840f27] mb-4">
              OUR MISSION
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To establish a future where landowners can confidently put their assets to work,
              achieve their ambitions and make India grow because we believe that land is not
              just a static asset, but a dynamic force for financial growth, entrepreneurship,
              and national development.
            </p>
          </div>

          {/* Unlock Power */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#840f27] mb-4">
              LET’S UNLOCK THE POWER OF YOUR LAND
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              If you’ve ever wondered what your land could really do, here is the opportunity
              to discover. We’re here to guide the journey, structure the right model and{" "}
              <span className="font-semibold">connect you to real opportunities.</span>
            </p>
          </div>

          {/* Button */}
          <div>
            <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#840f27] text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 shadow-lg transition">
              Book Your Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
