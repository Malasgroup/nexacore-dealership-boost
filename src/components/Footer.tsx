
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <img 
              src="/lovable-uploads/53f9bd91-958d-4154-90a7-382533fa92e6.png" 
              alt="Nexacore Marketing" 
              className="h-12 w-auto mb-4"
            />
            <p className="mt-4 text-gray-400">
              International marketing agency specialized in helping dealerships grow and reach their target clients effectively.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Digital Marketing</li>
              <li className="text-gray-400">Lead Generation</li>
              <li className="text-gray-400">Social Media Management</li>
              <li className="text-gray-400">SEO Optimization</li>
              <li className="text-gray-400">Content Strategy</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-orange-500 mt-1 mr-2" />
                <span className="text-gray-400">info@nexacoreagency.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-orange-500 mt-1 mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 mr-2" />
                <span className="text-gray-400">
                  Nexacore Headquarters<br />
                  123 Marketing Ave<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Nexacore Marketing Agency. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 text-gray-500 text-sm">
              <span>Privacy Policy</span>
              <span className="mx-2">|</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
