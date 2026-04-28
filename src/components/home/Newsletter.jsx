import { motion } from 'framer-motion';
import { FaEnvelope, FaBell } from 'react-icons/fa';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <div className="flex justify-center mb-4">
            <FaBell className="text-white" size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-2">Stay Updated</h2>
          <p className="mb-6 text-white/90">Get the latest property listings and exclusive deals in your inbox</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <button className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-xl hover:bg-gray-100 transition">
              Subscribe
            </button>
          </form>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-white/90"
            >
              ✓ Thank you! Check your inbox.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
