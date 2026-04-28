import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaTrophy } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    { icon: FaBuilding, label: 'Properties Sold', value: '2,500+' },
    { icon: FaUsers, label: 'Happy Clients', value: '5,000+' },
    { icon: FaTrophy, label: 'Awards Won', value: '50+' }
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center text-white"
              >
                <Icon className="text-orange-500 mx-auto mb-4" size={48} />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
