
import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Temple Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              🕉️ Puskeraswarnath Temple
            </h3>
            <p className="text-gray-300 mb-4">
              A sacred sanctuary dedicated to Lord Shiva, established on June 5, 2025. 
              Join us in our mission to serve humanity and spread divine blessings.
            </p>
            <div className="flex items-center space-x-2 text-orange-400">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Serving with devotion since 2025</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Temple</a></li>
              <li><a href="#donations" className="hover:text-orange-400 transition-colors">Make Donation</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
              <li><span className="cursor-pointer hover:text-orange-400 transition-colors">Daily Schedule</span></li>
              <li><span className="cursor-pointer hover:text-orange-400 transition-colors">Events & Festivals</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-orange-400">Contact Information</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="text-sm">Sacred Hills, Divine Valley</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-sm">+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-sm">info@puskeraswarnath.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2025 Puskeraswarnath Temple. All rights reserved.</p>
              <p className="mt-1">Built with devotion for Lord Shiva 🔱</p>
            </div>
            <div className="text-gray-400 text-sm text-center">
              <p className="font-bold text-orange-400">॥ ॐ नमः शिवाय ॥</p>
              <p>Om Namah Shivaya</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
