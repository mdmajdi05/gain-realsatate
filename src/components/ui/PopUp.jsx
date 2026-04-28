import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPhone, FaEnvelope, FaUser, FaHome } from 'react-icons/fa';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Add your form submission logic here
  //   alert('Thank you! We will contact you soon.');
  //   setIsOpen(false);
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      'https://formsubmit.co/ajax/gainrealestate1@gmail.com',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }
    );

    const data = await response.json();

    if (data.success === 'true' || response.ok) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: ''
      });

      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
      }, 3000);
    }
  } catch (error) {
    console.error('Popup form error:', error);
  }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            className="relative w-full max-w-lg bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <FaTimes size={24} />
            </button>

            {/* Header */}
            <div className="relative h-48 bg-gradient-to-r from-white to-white">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-3xl font-bold text-white mb-2">
                  <img src="/logo-without-bckgrnd.png" alt="GAIN Realstate" className="w-50 h-12  sm:block" />
                </h2>
                <p className="text-gray-800">Get Exclusive Property Deals!</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                />
              </div>

              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                />
              </div>

              <div className="relative">
                <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                >
                  <option value="">Interested in</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="office">Office Space</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 rounded-xl transform hover:scale-105 transition duration-300 shadow-lg shadow-orange-500/25"
              >
                Get Free Consultation
              </button>

              <p className="text-xs text-center text-gray-400">
                We'll contact you within 24 hours
              </p>
            </form>

            {submitted && (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-green-400 text-center font-semibold"
  >
    ✓ Thank you! We will contact you soon.
  </motion.p>
)}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;