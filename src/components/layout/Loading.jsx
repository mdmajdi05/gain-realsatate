import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg"
      />
    </div>
  );
};

export default Loading;
