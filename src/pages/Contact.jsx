import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from 'react-icons/fa';
import { useState } from 'react';
import data from '../data/data.json';

const Contact = () => {
  const company = data.company || {}; // use data import for social links
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formsubmit.co/ajax/gainrealestate1@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success === 'true' || response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      console.error('Form submission error', err);
    }
  };

  const contactInfo = [
    { icon: FaPhone, label: 'Phone', value: '+91 9891902115\n+91 9111002323' },
    { icon: FaEnvelope, label: 'Email', value: 'gainrealestate1@gmail.com' },
    { icon: FaMapMarkerAlt, label: 'Address', value: 'Dwarka & Dwarka Expressway, New Delhi' },
    { icon: FaClock, label: 'Hours', value: 'Mon-Sat: 9AM - 6PM' }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Have questions? We're here to help!
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <Icon className="text-orange-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Social */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: FaFacebook, href: company.social?.facebook || '#' },
                // { icon: FaTwitter, href: company.social?.twitter || '#' },
                { icon: FaInstagram, href: company.social?.instagram || '#' },
                { icon: FaLinkedin, href: company.social?.linkedin || '#' },
                { icon: FaPinterest, href: company.social?.pinterest || '#' },
                { icon: FaYoutube, href: company.social?.youtube || '#' },

                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href} 
                    className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 required"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 required"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 required"
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition"
            >
              Send Message
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-center font-semibold"
              >
                ✓ Message sent successfully! We'll reply soon.
              </motion.p>
            )}
          </motion.form>
        </div>

        {/* Map */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Find Us On Map</h2>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-600">Interactive map would be embedded here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
