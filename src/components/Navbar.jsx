import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', path: '/destinations' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Flights', path: '/flights' },
    { name: 'Bookings', path: '/bookings' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 🔥 Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-3xl font-bold tracking-tight">
              <span className="text-jadoo-dark">Jad</span>
              <span className="text-yellow-500">oo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-jadoo-gray hover:text-yellow-600 font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            
            {/* Login */}
            <button 
              className="text-jadoo-gray hover:text-yellow-600 font-medium transition-colors duration-300"
            >
              Login
            </button>

            {/* Sign Up */}
            <button className="px-6 py-2 border-2 border-yellow-600 text-yellow-600 rounded-md font-medium transition-all duration-300 hover:bg-yellow-600 hover:text-white hover:scale-105">
              Sign up
            </button>

            {/* Language */}
            <button className="text-jadoo-gray hover:text-yellow-600 transition-colors">
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-jadoo-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-jadoo-gray hover:text-yellow-600 font-medium transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Login */}
              <button className="text-jadoo-gray hover:text-yellow-600 font-medium text-left transition-colors duration-300">
                Login
              </button>

              {/* Sign Up */}
              <button className="px-6 py-2 border-2 border-yellow-600 text-yellow-600 rounded-md font-medium transition-all duration-300 hover:bg-yellow-600 hover:text-white hover:scale-105 w-fit">
                Sign up
              </button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;