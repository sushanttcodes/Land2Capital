import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
        
        {/* Left Contact Info */}
        <div className="bg-[#840f27] text-white rounded-2xl shadow-xl p-8">
          <h3 className="uppercase text-sm tracking-wider mb-3 font-semibold">
            Contact Details
          </h3>
          <h2 className="text-2xl font-bold mb-4">Contacts</h2>
          <p className="mb-8 text-sm leading-relaxed">
            Your land is valuable. Let us help you unlock it for income, investment, or shared development.
          </p>

          <div className="space-y-5 text-sm">
            <div>
              <p className="font-semibold">Corporate Address:</p>
              <p>
                808, 8th Floor, D-Mall, Netaji Subhash Place,
                Pitampura, Delhi-110034
              </p>
            </div>
            <div>
              <p className="font-semibold">Email Information:</p>
              <p>info@land2capital.com</p>
            </div>
            <div>
              <p className="font-semibold">Calling Support:</p>
              <p>Mobile: +91-74283-37280</p>
              <p>Telephone: 011-47008280</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="uppercase text-sm tracking-wider mb-3 font-semibold text-gray-500">
            Get in Touch
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="number"
              placeholder="Phone Number *"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Land Detail *"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Message..."
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-[#840f27] hover:bg-red-500 text-white rounded-full shadow-lg transition-all duration-300"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-10 w-full max-w-6xl">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=IndiaIPO%2C%208th%2C%20DMALL%2C%20808%2C%20Netaji%20Subhash%20Place%2C%20Delhi%2C%20110034&output=embed"
          className="w-full h-80 rounded-xl border-none"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
