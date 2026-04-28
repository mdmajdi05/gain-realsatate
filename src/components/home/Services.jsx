import { motion } from 'framer-motion';

const Services = ({ services = [] }) => {
  return (
    <section className="container-custom py-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Comprehensive real estate solutions tailored to your needs
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, idx) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className={`p-8 rounded-2xl bg-gradient-to-br ${s.color} text-white card-shadow cursor-pointer group`}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">{s.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-white/90">{s.description}</p>

            <div className="mt-4 inline-block font-semibold text-sm group-hover:translate-x-2 transition duration-300">
              Learn More →
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
