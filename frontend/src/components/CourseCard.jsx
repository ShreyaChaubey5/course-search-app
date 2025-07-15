import React from "react";
import { FaUser, FaClock, FaRupeeSign, FaShoppingCart } from "react-icons/fa";

const CourseCard = ({ image, title, desc, age, hours, price, language, level, classes, tag }) => {
  return (
    <div className="relative rounded-2xl border hover:shadow-xl hover:scale-[1.01] transition-all duration-300 bg-white max-w-sm">
      {/* Tag */}
      {tag && (
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-lg z-10">
          {tag}
        </div>
      )}

      {/* Image */}
      <img src={image} alt={title} className="rounded-t-2xl w-full h-52 object-cover" />

      {/* Info */}
      <div className="p-4 space-y-2">
        {/* Badges */}
        <div className="flex gap-2">
          <span className="text-xs bg-gray-100 text-black px-2 py-1 rounded-full">{language}</span>
          <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">{level}</span>
          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">{classes}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-md line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{desc}</p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
          <span className="flex items-center gap-1"><FaUser /> {age} yrs</span>
          <span className="flex items-center gap-1"><FaClock /> {hours}</span>
          <span className="flex items-center gap-1"><FaRupeeSign /> {price}</span>
          <FaShoppingCart className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
