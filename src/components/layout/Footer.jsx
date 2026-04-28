const Footer = ({ company = {} }) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="container-custom py-10 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="text-xl font-bold text-orange-500">{company.name || 'GAIN Realstate'}</div>
          <div className="text-sm text-gray-600 mt-2">{company.address}</div>
        </div>

        <div className="text-sm text-gray-600">
          <div>Phone: {company.phone}</div>
          <div>Email: {company.email}</div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-4">© {new Date().getFullYear()} {company.name || 'GAIN Realstate'}. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
