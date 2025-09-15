import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
motion
import bf from "../assets/beforeafter.jpeg";
import bf2 from "../assets/close-up-perfect-smile.jpg";
import clink from "../assets/dental-chair-other-accesorries-used-by-dentist-empty-cabinet-stomatology-cabinet-with-nobody-it-orange-equipment-oral-treatment.jpg";
import team from "../assets/doctor-performing-medical-research-lab.jpg";

const images = [
  { id: 1, url: bf, category: "Before & After" },
  { id: 2, url: bf2, category: "Before & After" },
  { id: 3, url: clink, category: "Clinic" },
  { id: 4, url: clink, category: "Clinic" },
  { id: 5, url: team, category: "Team" },
];

const categories = ["All", "Before & After", "Clinic", "Team"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
      >
        Our Gallery
      </motion.h2>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mb-10 flex-wrap gap-4"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium shadow-sm transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredImages.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="cursor-pointer group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl"
            onClick={() => setSelectedImage(img.url)}
          >
            <img
              src={img.url}
              alt={img.category}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-lg font-semibold">
              {img.category}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              className="max-w-3xl max-h-[80vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
