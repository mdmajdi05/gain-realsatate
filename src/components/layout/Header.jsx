import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-4 bg-white/90 backdrop-blur sticky top-0 z-40 border-b border-gray-100">
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="C:\Users\md majdi\Desktop\gain-realsatate\new\public\gain-logo.jpeg" alt="GAIN Realstate" className="h-8 w-auto hidden sm:block" />
          <div className="text-xl font-bold text-orange-500">GAIN Realstate</div>
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/listings" className="hover:text-orange-500">Properties</Link>
          <Link to="/about" className="hover:text-orange-500">About</Link>
          <Link to="/contact" className="hover:text-orange-500">Contact</Link>
        </nav>

        <div className="md:hidden">☰</div>
      </div>
    </header>
  );
};

export default Header;
