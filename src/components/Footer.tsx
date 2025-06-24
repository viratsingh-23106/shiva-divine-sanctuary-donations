
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-orange-100 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Om Namah Shivaya</h3>
            <p className="text-orange-200 mb-2">
              🕉️ भगवान शिव का आशीर्वाद सदा आप पर बना रहे
            </p>
            <p className="text-orange-200">
              May Lord Shiva's blessings always be upon you
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-orange-200">
              <li><a href="#about" className="hover:text-white transition-colors">About Temple</a></li>
              <li><a href="#donations" className="hover:text-white transition-colors">Donations</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">Admin Panel</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Temple Timings</h4>
            <div className="text-orange-200 space-y-1">
              <p>Morning: 5:00 AM - 12:00 PM</p>
              <p>Evening: 4:00 PM - 9:00 PM</p>
              <p className="text-sm mt-2">Special prayers on Mondays</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-800 mt-8 pt-6 text-center text-orange-300">
          <p>&copy; 2024 Shiva Temple. All rights reserved. 🙏</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
