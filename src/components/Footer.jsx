import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-white py-16" data-testid="footer">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-jadoo-dark mb-4">Jadoo.</h3>
            <p className="text-jadoo-gray text-sm leading-relaxed">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-jadoo-dark font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-jadoo-gray text-sm">
              <li><a href="#" className="hover:text-jadoo-coral transition-colors">About</a></li>
              <li><a href="#" className="hover:text-jadoo-coral transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-jadoo-coral transition-colors">Mobile</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-jadoo-dark font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-jadoo-gray text-sm">
              <li><a href="#" className="hover:text-jadoo-coral transition-colors">Help/FAQ</a></li>
              <li><a href="#" className="hover:text-jadoo-coral transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-jadoo-coral transition-colors">Affiliates</a></li>
            </ul>
          </div>

          {/* More Column */}
          <div>
            <h4 className="text-jadoo-dark font-bold mb-4">More</h4>
            <ul className="space-y-2 text-jadoo-gray text-sm">
              <li><a href="#" className="hover:text-jadoo-coral transition-colors">Airlinefees</a></li>
              <li><a href="#" className="hover:text-jadoo-coral transition-colors">Airline</a></li>
              <li><a href="#" className="hover:text-jadoo-coral transition-colors">Low fare tips</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-jadoo-gray text-sm mb-4 md:mb-0">All rights reserved@jadoo.co</p>
          
          

          {/* App Store Buttons */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-jadoo-dark text-white bg-black text-sm rounded-lg hover:bg-opacity-90 transition-all" data-testid="google-play-btn">
              Google Play
            </button>
            <button className="px-4 py-2 bg-jadoo-dark text-white bg-black text-sm rounded-lg hover:bg-opacity-90 transition-all" data-testid="apple-store-btn">
              Apple Store
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;