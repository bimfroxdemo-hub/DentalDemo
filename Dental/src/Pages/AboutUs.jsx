import { Heart, Award, Users, Star } from "lucide-react";
import ab from "../assets/smiling-dentists-before-checking-patient.jpg"
const About = () => {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Image */}
        <div className="relative">
          <img
            src = {ab}
            alt="BrightSmile Clinic"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-4 rounded-xl shadow-xl">
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-sm">Years of Experience</p>
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            About <span className="text-blue-600">BrightSmile</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold">BrightSmile Dental Care</span>,
            we believe every smile tells a story. Our mission is to provide
            exceptional dental care in a warm and welcoming environment. From
            routine checkups to advanced cosmetic treatments, we combine
            state-of-the-art technology with a gentle touch to ensure the best
            results for our patients.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">10,000+</h4>
                <p className="text-sm text-gray-500">Happy Patients</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Award className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Best Dental Clinic</h4>
                <p className="text-sm text-gray-500">Award 2023</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Heart className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Gentle Care</h4>
                <p className="text-sm text-gray-500">Patient-focused</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Star className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">4.9/5</h4>
                <p className="text-sm text-gray-500">Patient Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
