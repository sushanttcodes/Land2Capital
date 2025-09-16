import React from "react";

function BecomePartner() {
  return (
    <section className="flex justify-center items-center bg-gray-100 px-4 py-[70px]">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6 shadow-lg overflow-hidden ">
        
        {/* Left Side Image */}
        <div className="hidden md:block">
          <img
            src="/images/partner-img.webp"
            alt="Handshake"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-8 flex flex-col justify-center bg-white rounded-2xl">
          {/* Scrolling Welcome Text with Bouquets */}
          <div className="overflow-hidden whitespace-nowrap mb-4">
            <p className="text-2xl font-bold text-red-900 inline-block animate-marquee flex items-center">
           <marquee behavior="scroll" direction="left" scrollamount="10">

              <img
                src="/images/bookey.webp"
                alt="Bouquet"
                className="h-8 w-8 mr-2 inline-block"
              />
              Welcome to Land2Capital
              <img
                src="/images/bookey.webp"
                alt="Bouquet"
                className="h-8 w-8 ml-2 inline-block"
              />
               </marquee>
            </p>
          </div>

          <p className="text-gray-600 mb-6">Become Our B2B Associate</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Good Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="tel"
              placeholder="Your Mobile No."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              placeholder="Your City"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <button
              type="submit"
              className="w-full bg-red-900 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BecomePartner;
