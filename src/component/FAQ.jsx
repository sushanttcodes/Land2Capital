import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Do you offer business loans?",
    answer: "Yes, we provide business loans based on the value of your land."
  },
  {
    question: "What if my land is in a rural or semi-urban area?",
    answer: "As long as there’s development or connectivity potential, we’ll find its capital match."
  },
  {
    question: "How do you determine the value of my land?",
    answer: "Our team uses location, market rates, and government guidelines to determine land value."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-lg overflow-hidden transition-all duration-300 shadow-md"
            >
              {/* Question */}
              <div
                className={`flex justify-between items-center p-4 cursor-pointer transition-all duration-300 ${
                  isOpen
                    ? "bg-[#8B0D2E] text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">Q: {faq.question}</h3>
                <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
              </div>

              {/* Answer with smooth animation */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="bg-white px-4 py-3 text-gray-600 border-t">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
