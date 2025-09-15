import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/Gemini_Generated_Image_wx06lgwx06lgwx06.png";
motion
const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to book an appointment at BrightSmile Dental Care.";
    const phoneNumber = "+919537766568";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+1234567890";
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-700/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white px-6 max-w-3xl"
      >
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-white">Your Smile,</span>{" "}
          <span className="text-yellow-400">Our Priority</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Experience premium dental care in a modern, comfortable environment.
          We’re dedicated to creating beautiful, healthy smiles for the whole family.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleWhatsAppClick}
            className="px-6 py-3 rounded-full flex items-center gap-2 bg-green-500 hover:bg-green-600 transition shadow-lg"
          >
            <MessageCircle className="w-5 h-5" /> Book on WhatsApp
          </button>
          <button
            onClick={handleCallClick}
            className="px-6 py-3 rounded-full flex items-center gap-2 bg-white text-blue-600 font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            <Phone className="w-5 h-5" /> Call Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
