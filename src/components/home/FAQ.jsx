import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: 'How do I search for properties?', a: 'Use our search bar to filter by location, price, or property type. Visit the Properties page for advanced filters.' },
    { q: 'Can I list my property?', a: 'Yes! Contact our team or use our property listing form. We help market your property to serious buyers.' },
    { q: 'What payments do you accept?', a: 'We accept all major payment methods including bank transfers, digital wallets, and checks.' },
    { q: 'Are properties verified?', a: 'All properties on our platform undergo strict verification and legal checks.' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <h3 className="font-semibold text-gray-900 text-left">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: open === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-orange-500" />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: open === idx ? 'auto' : 0,
                  opacity: open === idx ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 py-4 text-gray-600 border-t border-gray-200">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
