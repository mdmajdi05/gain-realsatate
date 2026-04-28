import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import siteConfig from '../config/siteConfig.json';

const Sitemap = () => {
  return (
    <div className="container-custom py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Sitemap
      </motion.h1>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="list-disc list-inside text-gray-600"
      >
        {siteConfig.navLinks.map((link, i) => (
          <li key={i}>
            <Link to={link.href} className="text-orange-500 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
        {siteConfig.footerLinks.map((link, i) => (
          <li key={`f-${i}`}>
            <Link to={link.href} className="text-orange-500 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Sitemap;