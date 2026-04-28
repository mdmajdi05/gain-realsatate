import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import siteConfig from '../../config/siteConfig.json';

const HeaderEnhanced = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // navigation items come from configuration so new pages just update the JSON
  const navLinks = siteConfig.navLinks || [];

  return (
    <header className="w-full py-4 bg-white/95 backdrop-blur sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="container-custom flex items-center  justify-between">
        <div className='sm:w-50 sm:flex sm:items-center sm:justify-center'>
        {/* Logo */}
        <Link to="/" className=" flex flex-col items-center gap-0 group">
          <img src="/logo-without-bckgrnd.png" alt="GAIN Realstate" className="w-50 h-10 sm:block" />
          {/* <div className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-orange-700 transition">
            GAIN Realstate
          </div> */}
          <p className='text-sm text-start text-gray-600'>(Dwarka & Dwarka Express)</p>
        </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6  text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="relative font-medium hover:text-orange-500 transition group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        {/* <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
          >
            Get In Touch
          </motion.button>
        </Link> */}


<a href="tel:+919891902115">
  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className=" md:block px-4 md:px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition">
    9891902115,<br />
     9111002323
  </motion.button>
</a>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <nav className="container-custom py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition"
                >
                  {link.label}
                </Link>
              ))}
              {/* <Link to="/contact" className="w-full block">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold mt-2">
                  Get In Touch
                </button>
              </Link> */}
              <a href="tel:+919891902115">
  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold mt-2">
    +91 9891902115,<br />
     +91 9111002323
  </motion.button>
</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderEnhanced;
