import React from 'react';
import { Play } from 'lucide-react';
import travelImg from '../assets/travel.png';
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white" data-testid="hero-section">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-pink-100 to-orange-50 rounded-full blur-3xl opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6" data-testid="hero-content">
            <p className="text-jadoo-coral uppercase tracking-wide font-bold text-o text-red-500">
              Best Destinations around the world
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-jadoo-dark leading-tight">
              Travel, enjoy and live a new and full life
            </h1>
            <p className="text-jadoo-gray text-base lg:text-lg leading-relaxed max-w-xl">
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <button 
                className="px-8 py-4 bg-jadoo-orange text-black bg-yellow-600 rounded-xl font-medium hover:bg-opacity-90 shadow-lg hover:shadow-xl transition-all"
                data-testid="find-out-more-btn"
              >
                Find out more
              </button>
              <button 
  className="flex items-center space-x-3 text-jadoo-gray hover:text-yellow-600 transition-colors group"
>
  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
    <Play className="text-white fill-white ml-1" size={20} />
  </div>
  <span className="font-medium">Play Demo</span>
</button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative" data-testid="hero-image">
            <div className="relative">
              <img
                src={travelImg}
                alt="Happy travelers"
                className="w-full h-auto rounded-3xl"
              />
              {/* Floating decoration */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-600 to-orange-400 rounded-full blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;