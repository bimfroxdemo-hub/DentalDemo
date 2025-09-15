import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">BrightSmile Dental Care</h3>
          <p className="text-gray-400">
            Your smile is our priority. We provide high-quality dental care using modern techniques 
            in a comfortable and friendly environment.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white mb-2">Contact Us</h4>
          <p className="flex items-center gap-2">
            <MapPin className="text-blue-500" /> 123 BrightSmile Ave, City
          </p>
          <p className="flex items-center gap-2">
            <Phone className="text-blue-500" /> +1 234 567 890
          </p>
          <p className="flex items-center gap-2">
            <Mail className="text-blue-500" /> info@brightsmile.com
          </p>
          <p className="flex items-center gap-2">
            <Clock className="text-blue-500" /> Mon - Sat: 9am - 7pm
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} BrightSmile Dental Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
