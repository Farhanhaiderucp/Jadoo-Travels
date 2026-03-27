import React from 'react';
import { Plane, Globe2, Mic2, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe2,
      title: 'Calculated Weather',
      description: 'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
      icon: Plane,
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.',
      featured: true,
    },
    {
      icon: Mic2,
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Preferred to men it engrossed listening.',
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-wide font-semibold mb-2">
            CATEGORY
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            We Offer Best Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 text-center relative cursor-pointer transition-all duration-300
              hover:-translate-y-3 hover:shadow-2xl group ${
                service.featured ? 'shadow-xl scale-105' : 'shadow-md'
              }`}
            >
              
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-100 group-hover:bg-red-600 transition-all duration-300">
                <service.icon
                  size={40}
                  strokeWidth={1.5}
                  className="text-red-600 group-hover:text-white transition-all duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;