import { motion } from 'framer-motion';
import data from '../data/data.json';

const Services = () => {
  const services = data.services || [];

  return (
    <div className="container-custom py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Our Services
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-6 rounded-2xl bg-gradient-to-r ${s.color} text-white text-center flex flex-col justify-center`}
          >
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
