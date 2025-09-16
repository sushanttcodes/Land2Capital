import React, { useEffect, useState } from "react";

function WhatsAppWidget() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    // Auto open after 5s then close after 3s
    const timer = setTimeout(() => {
      setShowChat(true);
      const hideTimer = setTimeout(() => {
        setShowChat(false);
      }, 3000);
      return () => clearTimeout(hideTimer);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Box */}
      {showChat && (
        <div className="w-80 rounded-md shadow-lg overflow-hidden mb-3">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#075E54] text-white px-3 py-3">
            <div className="flex items-center gap-2 ">
              <img
                src="/images/whatshap-fev.webp"
                alt="Logo"
                className="w-9 h-8 rounded-large bg-white"
              />
              <div>
                <p className="text-sm font-medium leading-tight">
                  Land2Capital – Expert Consultant
                </p>
                <p className="text-xs text-green-200">Online</p>
              </div>
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="text-sm hover:text-red-400"
            >
              ✖
            </button>
          </div>

          {/* Body */}
          <div className="bg-white p-3">
            <div className="bg-[#f0f0f0] text-gray-800 px-3 py-2 rounded-lg text-sm w-max shadow">
              👋 Welcome to Land2Capital!
              <br />
              How can we help you?
            </div>
          </div>

          {/* Start Chat Button */}
          <a
            href="https://wa.me/919650982781"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#25D366] text-white text-center py-3 font-semibold hover:bg-[#20bd5a] transition"
          >
            Start Chat
          </a>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleToggle}
        className="bg-[#25D366] p-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition"
      >
        <img src="/images/whatsapp.webp" alt="WhatsApp" className="w-10 h-10" />
      </button>
    </div>
  );
}

export default WhatsAppWidget;
