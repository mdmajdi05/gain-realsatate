import { motion } from "framer-motion";

const MaintenancePage = ({ message }) => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-[90%] text-center border"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          🚧 Developer Notice
        </h1>

        {/* <p className="text-red-500 font-medium mb-8 text-xl">
          {message}
        </p> */}

        <p
          className="text-red-500 font-medium mb-8 text-xl"
          dangerouslySetInnerHTML={{ __html: message }}
        ></p>

        {/* <a
          href="https://majdi-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 animate-bounce"
        >
          Contact Developer
        </a> */}
      </motion.div>
    </div>
  );
};

export default MaintenancePage;