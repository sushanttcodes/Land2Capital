import React, { useState } from 'react';
import ContactModal from "./ContactModal"; 
const problems = [
  {
    title: "IL-Liquidity of Land Assets",
    img: "/images/4land-to-capital-2.webp",
    desc: "Land isn’t like stocks or gold; it can’t be quickly converted into cash. Selling takes months due to legal checks, negotiations and slow demand cycles."
  },
  {
    title: "Under-Valuation by Buyers or Lenders",
    img: "/images/2Land-to-capital.webp",
    desc: "Land is often undervalued due to poor documentation, zoning uncertainty, or non-prime location. You rarely get the actual potential worth, just “safe” estimates."
  },
  {
    title: "Title and Encumbrance Issues",
    img: "/images/3land-to-capital.webp",
    desc: "Outdated paperwork, inheritance disputes, or missing NOCs often block financing and buyer interest, even when the land is valuable."
  },
  {
    title: "Limited Loan Options",
    img: "/images/4land-to-capital.webp",
    desc: "Land that's zoned for agriculture or lacks clear development permissions gets ignored by traditional investors or financiers, no matter its potential."
  },
  {
    title: "Land Development Constraints",
    img: "/images/5land-to-capital.webp",
    desc: "Land that's zoned for agriculture or lacks clear development permissions gets ignored by traditional investors or financiers, no matter its potential."
  },
  {
    title: "Poor Market Visibility",
    img: "/images/6land-to-capital.webp",
    desc: "Most landowners don’t have access to leasing models, joint ventures, or investor-backed monetization. Instead, they're stuck thinking: “Sell or hold.”"
  },
  {
    title: "No Strategic Advisory Support",
    img: "/images/7land-to-capital.webp",
    desc: "You’re expected to figure everything out on your own — from legal to market to investors. But without the right partners, opportunities are missed."
  },
  {
    title: "Idle Land Earns Nothing",
    img: "/images/8land-to-capital.webp",
    desc: "While you pay taxes and holding costs, your land sits idle, with zero return and a rising maintenance burden."
  },
  {
    title: "Physical Disadvantages That Lower Value",
    img: "/images/9land-to-capital.webp",
    desc: "Even good land is devalued if it lacks a boundary wall, approach road, or nearby infrastructure. Buyers and funders use this to push down offers, despite long-term potential."
  }
];

const Service = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
   
    <section className="py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
         {/* Modal Component */}
      <div className="transition-opacity duration-300 ease-in-out opacity-100 ...">
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#a11b34] mb-6">The Real Problem Landowners Face</h2>
          <div className="flex flex-col md:flex-row md:justify-around md:space-x-6 text-left">
            <div className="text-base font-medium mb-4 md:mb-0 text-center ">
              <p>Every day, landowners face the same problems in India, with things <br /> like this happening to them:</p>
            </div>
            <div className="italic text-gray-600 text-sm space-y-4">
              <p className=' border-l-2 border-[#A11B34] px-[50px] py-[5px] rounded-sm bg-[#f8f9fa] font-medium'>“I've had this land for years now, but it's not earning me a paisa."</p>
              <p className=' border-l-2 border-[#A11B34] px-[50px] py-[5px] rounded-sm bg-[#f8f9fa] font-medium'>“I want to start a business & I have land but don’t have the liquid funds.”</p>
              <p className=' border-l-2 border-[#A11B34] px-[50px] py-[5px] rounded-sm bg-[#f8f9fa] font-medium'>“I’m forced to sell at throwaway prices just to raise money.”</p>
            </div>
          </div>
        </div>

        {/* Subheader */}
        <div className="text-center mb-12">
          <h4 className="text-2xl font-semibold text-gray-800">
            The truth is, the system makes it difficult to convert land into liquid capital. Here's why:
          </h4>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:drop-shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 p-5 border-2 border-transparent hover:border-[#840f27]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-md text-gray-700 mb-[50px] mt-[20px]">{item.desc}</p>
            </div>
          ))}
        </div>
          <div className="mt-5 bg-gray-200 text-black text-center flex flex-wrap justify-around items-center py-10">
            <div className="text-xl font-semibold">
              <p>We’re here to fix that by helping you monetize your land — without selling it or taking a loan.</p>
            </div>
            <div>
              <a
                href="#"
                className="bg-red-800 text-white text-base px-4 py-3 rounded-lg inline-block"
              >
                Reach Out To Us
              </a>
            </div>
        </div>
      </div>

    </section>

    
      {/* WHAT WE OFFER */}
      <section className="py-16  px-4 md:px-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-[#8c1627] font-bold uppercase text-4xl">What We Offer</h3>
            <h2 className="text-3xl lg:text-4xl font-bold">
              We Don’t Lend You Money — We Help Your Land Earn It
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>We don’t offer business loans.</strong> Instead, we provide innovative financial solutions that help you <strong>monetize your land or immovable property</strong> by converting it into a source of capital, income, or strategic value.
              <br /><br />
              Whether your land is vacant, underutilized, or waiting for the right opportunity, we structure models that allow you to generate funding from it, <strong>without disrupting ownership or long-term control.</strong>
              <br /><br />
              From structuring income-generating arrangements to enabling capital access through partnerships, our solutions are designed to work with the potential your land already holds. No matter where your property is located, urban or rural, we help you turn idle land into active capital.
              <br /><br />
              <strong>Your land holds value. We help you realise it.</strong>
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative">
            <img
              src="/images/service01.webp"
              alt="What We Offer"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute bottom-0 left-0 bg-[#8c1627] text-white px-[35px] py-[35px] rounded-tr-lg">
              <div className="text-7xl font-bold">8+</div>
              <div className="text-md font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16  px-4 md:px-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Image */}
          <div className="lg:w-1/2">
            <img
              src="/images/service02.webp"
              alt="How It Works"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-[#8c1627] font-bold uppercase text-4xl">How It Works</h3>
            <h2 className="text-3xl lg:text-4xl font-bold">
              A Clear, Step-by-Step Process
            </h2>
            <div className="space-y-4 text-gray-700">
              <p><strong className="text-red-800">1. Land Evaluation & Feasibility Check</strong><br />We assess legal status, zoning, potential uses and market trends.</p>
              <p><strong className="text-red-800">2. Custom Capital Strategy</strong><br />Based on your goals, we design a monetization plan: JV, lease, or investor-backed deal.</p>
              <p><strong className="text-red-800">3. Investor/Partner Matchmaking</strong><br />We introduce you to verified NBFCs, private capital providers and project partners.</p>
              <p><strong className="text-red-800">4. Legal Structuring & Execution</strong><br />We assist with title work, contracts, compliance and help close the deal professionally.</p>
              <p>Whether your land is along a highway, near an urban expansion zone, or in an industrial corridor, we’ll structure the right capital model.</p>
            </div>
            <button className="bg-red-800 text-white px-6 py-3 rounded-md hover:bg-red-900 transition" onClick={() => setIsModalOpen(true)}>
              Book Your Consultation
            </button>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="py-16  px-4 md:px-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-[#8c1627] font-bold uppercase text-4xl">Who We Help</h3>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Customized Solutions for Landowners, Businesses & Developers
            </h2>
            <div className="space-y-4 text-gray-700">
              <p><strong className="text-red-800">1. Individual Landowners</strong><br />If you inherited land or bought land that’s now sitting idle, we can help you activate it for income or lump-sum value.</p>
              <p><strong className="text-red-800">2. MSME & Fixed-Asset Business Owners</strong><br />Owners of land-rich businesses stuck without working capital — we bring in capital without loans.</p>
              <p><strong className="text-red-800">3. Real Estate Developers</strong><br />Landowners with land banks looking to raise capital or structure investor-driven projects.</p>
              <p><strong className="text-red-800">4. Startups or Founders with Land Access</strong><br />You have the land but not the capital — we’ll bridge that gap through partnerships.</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <img
              src="/images/service03.webp"
              alt="Who We Help"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Service;
