import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaGlobe, FaHeart } from 'react-icons/fa';

const About = () => {
  const values = [
    { icon: FaHeart, title: 'Integrity', desc: 'We prioritize honesty and transparency' },
    { icon: FaAward, title: 'Excellence', desc: 'We deliver the highest quality service' },
    { icon: FaUsers, title: 'Customer Focus', desc: 'Your needs are our top priority' },
    { icon: FaGlobe, title: 'Innovation', desc: 'We embrace modern real estate solutions' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About GAIN Realstate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Leading India's real estate revolution with trust, innovation, and customer excellence
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2008, GAIN Realstate has revolutionized how people buy, sell, and rent properties across India. Our commitment to transparency and customer satisfaction has made us a trusted name in the industry.
            </p>
            <p className="text-gray-600 mb-4">
              With over 15 years of experience, we've helped thousands of customers find their dream homes and make sound investment decisions. Our team of expert agents works tirelessly to ensure every transaction is smooth and hassle-free.
            </p>
            <p className="text-gray-600">
              Today, we operate in 50+ cities with a portfolio of 500+ premium properties, and our customer base continues to grow every day.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
            alt="About"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl text-center"
                >
                  <Icon className="text-orange-500 mx-auto mb-4 text-4xl" />
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '15+', label: 'Years' },
              { num: '2500+', label: 'Sold' },
              { num: '50+', label: 'Cities' },
              { num: '5000+', label: 'Clients' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold">{stat.num}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
