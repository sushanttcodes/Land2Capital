import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Detail: "",
    Message: "",
  });

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      toast('Message Sent ✅');
      

      // reset form
      setFormData({
        Name: "",
        Email: "",
        Mobile: "",
        Detail: "",
        Message: "",
      });

      onClose(); // Modal close after submit
    } catch (error) {
      console.error("Error:", error);
      toast('Something went wrong ❌');
      <ToastContainer />
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-600 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Form */}
        <h2 className="text-2xl font-semibold mb-4 text-center text-black">
          Connect With Our Team
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            placeholder="Your Good Name"
            required
            value={formData.Name}
            onChange={handleChange}
            className="w-full border text-black border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            value={formData.Email}
            onChange={handleChange}
            className="w-full border text-black border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            name="Mobile"
            placeholder="Your Mobile No"
            required
            value={formData.Mobile}
            onChange={handleChange}
            className="w-full border text-black border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="Detail"
            placeholder="Your Land Detail"
            required
            value={formData.Detail}
            onChange={handleChange}
            className="w-full border text-black border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            rows="3"
            value={formData.Message}
            onChange={handleChange}
            className="w-full text-black border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#ff264e] hover:bg-[#e02544] text-white py-3 rounded text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
