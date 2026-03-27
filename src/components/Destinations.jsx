import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Destinations = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const destinations = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/36581134/pexels-photo-36581134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      location: 'Rome, Italy',
      price: '$5,42k',
      duration: '10 Days Trip',
      description: 'Explore the ancient Colosseum, Vatican City, and indulge in authentic Italian cuisine. Experience the rich history and vibrant culture of the Eternal City.',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3765281/pexels-photo-3765281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      location: 'London, UK',
      price: '$4.2k',
      duration: '12 Days Trip',
      description: 'Visit Big Ben, Buckingham Palace, and explore world-class museums. Discover the perfect blend of royal heritage and modern metropolitan life.',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/5072366/pexels-photo-5072366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      location: 'Full Europe',
      price: '$15k',
      duration: '28 Days Trip',
      description: 'A grand tour across multiple European countries. From Nordic landscapes to Mediterranean coasts, experience the diversity of European culture.',
    },
  ];

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-20 bg-white" data-testid="destinations-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-jadoo-gray uppercase tracking-wide font-semibold mb-2">Top Selling</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-jadoo-dark">Top Destinations</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {destinations.map((destination) => {
            const isExpanded = expandedCard === destination.id;
            return (
              <div
                key={destination.id}
                onClick={() => toggleExpand(destination.id)}
                className={`bg-white rounded-3xl overflow-hidden shadow-hover cursor-pointer transition-all duration-300 ${
                  isExpanded ? 'ring-4 ring-jadoo-coral scale-105' : ''
                }`}
                data-testid={`destination-card-${destination.id}`}
              >
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.location}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-jadoo-gray">{destination.location}</h3>
                    <span className="text-lg font-medium text-jadoo-gray">{destination.price}</span>
                  </div>
                  <div className="flex items-center text-jadoo-gray">
                    <Send size={18} className="mr-2" />
                    <span>{destination.duration}</span>
                  </div>
                  
                  {/* Expandable content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-jadoo-gray text-sm leading-relaxed border-t pt-4">
                      {destination.description}
                    </p>
                    <button 
                      className="mt-4 w-full py-2 bg-jadoo-coral text-white bg-yellow-600 rounded-lg hover:bg-opacity-90 transition-all"
                      data-testid={`book-now-btn-${destination.id}`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Destinations;