import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './assets/images/ptz-footer.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-2">
              <img src={Logo} alt="Pure Tech Zone" className=" w-auto h-24" />
              {/* <span className="text-xl font-bold">Pure Tech Zone</span> */}
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Building smart digital solutions for the future. We transform ideas into scalable technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span>Baghpat, Uttar Pradesh, India 250609</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 81716 54421</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-primary" />
                <span>deepsoftskills@gmail.com </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61585774898207" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/deepsoftskills" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:bg-blue-400 hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/deepsoftskills/" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/deepak-kashyap-8bb7433a2/" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:bg-blue-700 hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pure Tech Zone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
