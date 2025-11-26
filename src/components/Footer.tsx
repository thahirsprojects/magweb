import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl mb-4">MAG</h3>
            <p className="text-sm mb-4">
              Empowering industries and universities with essential soft skills training for success in the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#2D5BFF] transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2D5BFF] transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2D5BFF] transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2D5BFF] transition-colors duration-300">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2D5BFF] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#2D5BFF]" />
                <span>info@magresourcerevolution .com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#2D5BFF]" />
                <span>+91 78680 23276</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#2D5BFF] mt-1" />
                <span>VQ7P+WPQ, Thavalakuppam, Puducherry 605007, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Mag-Resource-Revolution/61575093089959/?mibextid=wwXIfr&rdid=oxQnAfp8j9HmJXiT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19c8HvsZEK%2F%3Fmibextid%3DwwXIfr"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#2D5BFF] transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#2D5BFF] transition-all duration-300 hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#2D5BFF] transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/mag_resource_revolution/?igsh=aXJwNnZreDgxY2Rv&utm_source=qr#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#2D5BFF] transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 MAG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}