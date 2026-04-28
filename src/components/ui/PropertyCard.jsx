// src/components/home/PropertyCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaRuler, FaHeart, FaShare } from 'react-icons/fa';
import { useState } from 'react';

const PropertyCard = ({ property }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer my-12"
    >
      {/* Image Slider */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={property.images[currentImage]}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
        
        {/* Image Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {property.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition ${
                currentImage === index ? 'bg-orange-500 w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition group"
          >
            <FaHeart className={`${isLiked ? 'text-red-500' : 'text-gray-600'} group-hover:text-white`} />
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition group">
            <FaShare className="text-gray-600 group-hover:text-white" />
          </button>
        </div>
        
        {/* Price Tag */}
        <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
          {property.price}
        </div>
      </div>
      
      {/* Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-4">{property.location}</p>
        
        <div className="flex justify-between mb-4">
          <div className="flex items-center gap-1 text-gray-600">
            <FaBed className="text-orange-500" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaBath className="text-orange-500" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaRuler className="text-orange-500" />
            <span>{property.area}</span>
          </div>
        </div>
        
        <button className="w-full py-3 border-2 border-orange-500 text-orange-500 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default React.memo(PropertyCard);