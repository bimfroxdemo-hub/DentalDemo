import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
motion
const testimonials = [
  {
    name: "Sarah Mitchell",
    rating: 5,
    text: "BrightSmile transformed my smile! The results exceeded expectations.",
    service: "Smile Makeover",
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "Outstanding service. Modern, clean clinic and caring staff!",
    service: "Dental Implants",
  },
  {
    name: "Emma Rodriguez",
    rating: 5,
    text: "My kids love it here! The pediatric team is amazing with children.",
    service: "Pediatric Care",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

      <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">
        What Our Patients Say
      </h2>

      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-blue-100"
      >
        {/* Testimonial Text */}
        <p className="text-xl text-gray-700 font-medium italic mb-6 leading-relaxed">
          “{testimonials[current].text}”
        </p>

        {/* Rating Stars */}
        <div className="flex justify-center mb-3">
          {Array.from({ length: testimonials[current].rating }).map((_, idx) => (
            <Star
              key={idx}
              className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow"
            />
          ))}
        </div>

        {/* Author Info */}
        <h4 className="font-bold text-lg text-gray-900">
          {testimonials[current].name}
        </h4>
        <p className="text-sm text-blue-600 font-medium">
          {testimonials[current].service}
        </p>

        {/* Navigation */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
            }
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 hover:from-blue-300 hover:to-blue-400 text-gray-700 font-semibold shadow-md transition"
          >
            ← Previous
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 hover:from-blue-300 hover:to-blue-400 text-gray-700 font-semibold shadow-md transition"
          >
            Next →
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
