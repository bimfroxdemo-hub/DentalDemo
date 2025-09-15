import { motion } from "framer-motion";
import { Stethoscope, Star, Shield, Award, Heart, Phone } from "lucide-react";
motion
const services = [
  {
    title: "General Dentistry",
    description: "Check-ups, fillings, cleanings, and preventive care.",
    icon: <Stethoscope className="w-6 h-6" />,
    features: ["Check-ups", "Cleaning", "Fillings", "Root Canal"],
  },
  {
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, and smile makeovers.",
    icon: <Star className="w-6 h-6" />,
    features: ["Whitening", "Veneers", "Smile Makeover", "Bonding"],
  },
  {
    title: "Orthodontics",
    description: "Straighten teeth with braces & aligners.",
    icon: <Shield className="w-6 h-6" />,
    features: ["Braces", "Aligners", "Invisalign", "Retainers"],
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions.",
    icon: <Award className="w-6 h-6" />,
    features: ["Single Implants", "All-on-4", "Implant Crowns"],
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle care for children.",
    icon: <Heart className="w-6 h-6" />,
    features: ["Kids Check-ups", "Fluoride", "Sealants"],
  },
  {
    title: "Emergency Care",
    description: "Immediate urgent dental care.",
    icon: <Phone className="w-6 h-6" />,
    features: ["24/7 Emergency", "Pain Relief", "Trauma Care"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
      >
        Our Services
      </motion.h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
        From preventive care to advanced treatments, BrightSmile provides
        everything you need for a healthy, confident smile.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative p-6 rounded-2xl shadow-md bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon Container */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mb-4 text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            <ul className="text-sm text-gray-500 space-y-1">
              {service.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
