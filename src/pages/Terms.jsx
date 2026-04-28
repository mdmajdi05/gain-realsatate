import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="container-custom py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Terms of Service
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gray-600"
      >
        These are the terms of service for GAIN Realstate. (Add legal details here.)
      </motion.p>
    </div>
  );
};

export default Terms;