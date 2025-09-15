import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
motion
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold">Get In Touch</h2>

          <div className="space-y-5">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <a href="tel:+1234567890" className="text-gray-700 hover:text-blue-600">
                +1 (234) 567-890
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4">
              <MessageCircle className="text-green-500 w-6 h-6" />
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600">
                +1 (234) 567-890
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <a href="mailto:info@brightsmiledentalcare.com" className="text-gray-700 hover:text-blue-600">
                info@brightsmiledentalcare.com
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700">
                123 Dental Avenue, Healthcare District, HD 12345
              </span>
            </div>
          </div>

          {/* Clinic Hours */}
          <div>
            <h3 className="font-semibold flex items-center gap-2 text-gray-800">
              <Clock className="w-5 h-5 text-blue-600" /> Clinic Hours
            </h3>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>Monday - Friday: <span className="font-medium">8:00 AM - 6:00 PM</span></li>
              <li>Saturday: <span className="font-medium">9:00 AM - 4:00 PM</span></li>
              <li>Sunday: <span className="font-medium">Emergency Only</span></li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
            >
              <MessageCircle className="w-5 h-5" /> Book on WhatsApp
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 border border-blue-500 text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </motion.div>

        {/* Right - Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.99948794083!2d-73.9871556845936!3d40.75889697932673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855b1a5a7fb%3A0x6b9c6a2b8ef80b9a!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1634820539154!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border-0 w-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
