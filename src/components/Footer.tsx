import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-gray-200 rounded-t-4xl overflow-hidden mt-16">
      <footer className="bg-gray-900 text-gray-300 px-8 md:px-16 py-14">

        {/* Top Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">

          {/* Company Info */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-4">MAGRR</h3>
            <p className="leading-relaxed text-sm">
              Empowering industries and universities with essential soft skills
              training for success in the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#2D5BFF] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#2D5BFF] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#2D5BFF] transition">Services</a></li>
              <li><a href="#" className="hover:text-[#2D5BFF] transition">Clients</a></li>
              <li><a href="#" className="hover:text-[#2D5BFF] transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
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
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Mag-Resource-Revolution/61575093089959/?mibextid=wwXIfr&rdid=oxQnAfp8j9HmJXiT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19c8HvsZEK%2F%3Fmibextid%3DwwXIfr"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#2D5BFF] transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCeoqPQv2LAEkNMEVzrmLUCg"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#2D5BFF] transition-all duration-300 hover:scale-110"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/mag-resources-revolution/"
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>© 2025 MAGRR. All rights reserved.</p>
        </div>

      </footer>
    </div>
  );
}

