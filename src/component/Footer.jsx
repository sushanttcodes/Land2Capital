import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-black text-gray-300 py-10 px-6 md:px-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Section */}
          <div>
            <img src="/images/logo.webp" alt="Land2Capital" className="w-40 mb-4" />
            <p>
              Your land is valuable. Let us help you unlock it for income,
              investment, or shared development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">CONTACT INFO</h3>
            <p>
              💼 808, 8th Floor, D-Mall,<br />
              Netaji Subhash Place, Pitampura,<br />
              Delhi-110034
            </p>
            <p className="mt-2">📞 +91-9650982781</p>
            <p>📧 info@land2capital.com</p>
            <p className="mt-2">Office Hours: 9:30AM - 6:30PM</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-4 text-sm">
          © 2025 Land to Capital. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
