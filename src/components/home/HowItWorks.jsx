import { motion } from 'framer-motion';
import { FaHome, FaSearchLocation, FaHandshake, FaFileContract } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: FaSearchLocation,
      title: 'Browse Properties',
      description: 'Search from our extensive collection of premium properties'
    },
    {
      icon: FaHome,
      title: 'View Details',
      description: 'Get detailed information, photos, and virtual tours'
    },
    {
      icon: FaHandshake,
      title: 'Connect with Agent',
      description: 'Talk to our expert agents to schedule a visit'
    },
    {
      icon: FaFileContract,
      title: 'Complete Transaction',
      description: 'We handle all legal documentation and paperwork'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600">Four simple steps to find your perfect property</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <Icon className="text-orange-500 mx-auto mb-4 text-4xl" />
                  <h3 className="font-semibold text-lg text-center mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{step.description}</p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
