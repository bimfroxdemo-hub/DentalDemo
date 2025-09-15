import { motion } from "framer-motion";
motion
const team = [
  {
    name: "Dr. Emily Carter",
    role: "Chief Dentist",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. James Wilson",
    role: "Orthodontist",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Dr. Sophia Lee",
    role: "Pediatric Dentist",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dr. Raj Patel",
    role: "Implant Specialist",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Team = () => {
  return (
    <section className="py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
      >
        Meet Our Experts
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100 shadow-md"
            />
            <h4 className="font-semibold text-lg text-gray-800">{member.name}</h4>
            <p className="text-sm text-blue-600 font-medium">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
