import React, { useState } from "react";
import toast from "react-hot-toast";

function ContactSection() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Detail: "",
    Message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://sheet2api.com/v1/Ilg7XvgTSycR/land2capital/Sheet1", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.success("Message Sent ");
      setFormData({
        Name: "",
        Email: "",
        Mobile: "",
        Detail: "",
        Message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold text-[#7a0c2e] uppercase mb-2">
            Contact
          </h2>
          <h3 className="text-3xl font-semibold text-gray-900 leading-snug">
            Get in Touch to Unlock the Full Potential of Your Land
          </h3>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Image */}
          <div className="w-full">
            <img
              src="/images/contact.webp"
              alt="Contact"
              className="rounded-md"
            />
          </div>

          {/* Right Form */}
          <div className="w-full lg:mt-[35px]">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Inputs Grid */}
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Good Name"
                  required
                  value={formData.Name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-[#8080800f] border border-gray-200 rounded-md text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#7a0c2e] outline-none"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="E-Mail"
                  required
                  value={formData.Email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-[#8080800f] border border-gray-200 rounded-md text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#7a0c2e] outline-none"
                />
                <input
                  type="text"
                  name="Mobile"
                  placeholder="Mobile Number"
                  value={formData.Mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-[#8080800f] border border-gray-200 rounded-md text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#7a0c2e] outline-none"
                />
                <input
                  type="text"
                  name="Detail"
                  placeholder="Land Detail"
                  value={formData.Detail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-[#8080800f] border border-gray-200 rounded-md text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#7a0c2e] outline-none"
                />
              </div>

              {/* Message Box */}
              <textarea
                name="Message"
                rows="5"
                placeholder="Your message Here"
                onChange={handleChange}
                required
                value={formData.Message}
                className="w-full px-4 py-4 bg-[#8080800f] border border-gray-200 rounded-md text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#7a0c2e] outline-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#7a0c2e] text-white font-semibold px-6 py-4 rounded-md hover:bg-[#600a24] transition-all"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
