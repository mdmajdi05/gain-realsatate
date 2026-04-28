import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaPinterest, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import siteConfig from '../../config/siteConfig.json';

const FooterEnhanced = ({ company = {} }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-orange-500 mb-4">
              <img src="/logo-without-bckgrnd.png" alt="GAIN Realstate" className="w-50 h-12 sm:block" />
              </div>
            <p className="text-gray-400 mb-4">Your trusted partner in finding the perfect property.</p>
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
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              { (siteConfig.quickLinks || []).map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="text-gray-400 hover:text-orange-500 transition">
                    {link.label}
                  </Link>
                </li>
              )) }
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-orange-500 cursor-pointer transition">Property Sales</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Rental Services</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Property Management</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Legal Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-orange-500" />
                <a href={`tel:${company.phone}`}>{company.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-orange-500" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-orange-500" />
                {company.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400">
          <p>© {new Date().getFullYear()} {company.name || 'GAIN Realstate'}. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <span className="text-sm">
              Developed by <a href={siteConfig.developer.href} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">{siteConfig.developer.name}</a>
            </span>
            <a href="/privacy" className="hover:text-orange-500 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-orange-500 transition">Terms of Service</a>
            <a href="/sitemap" className="hover:text-orange-500 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEnhanced;
