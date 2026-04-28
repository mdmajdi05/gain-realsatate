import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="container-custom py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Privacy Policy
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gray-600"
      >
        This is the privacy policy for GAIN Realstate. Your data is important to us. (Add real content here.)
      </motion.p>
    </div>
  );
};

export default Privacy;