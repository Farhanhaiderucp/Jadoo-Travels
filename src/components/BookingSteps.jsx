import React from 'react';
import { Map, CreditCard, Car, MapPin, Calendar } from 'lucide-react';

const BookingSteps = () => {
  const steps = [
    {
      icon: Map,
      title: 'Choose Destination',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
      color: 'bg-yellow-400',
    },
    {
      icon: CreditCard,
      title: 'Make Payment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
      color: 'bg-red-400',
    },
    {
      icon: Car,
      title: 'Reach Airport on Selected Date',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
      color: 'bg-blue-400',
    },
  ];

  return (
    <section className="py-20 bg-white" data-testid="booking-steps-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Steps */}
          <div>
            <div className="mb-12">
              <p className="text-jadoo-gray uppercase tracking-wide font-semibold mb-2">Easy and Fast</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-jadoo-dark leading-tight">
                Book Your Next Trip <br />In 3 Easy Steps
              </h2>
            </div>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-5" data-testid={`booking-step-${index}`}>
                  <div className={`${step.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-jadoo-gray font-bold mb-1">{step.title}</h3>
                    <p className="text-jadoo-gray text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Trip Card */}
          <div className="relative" data-testid="trip-card-container">
            <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md mx-auto relative z-10">
              <img
                src="https://images.unsplash.com/photo-1721215517301-ba6600e5a826?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxHcmVlY2UlMjBiZWFjaCUyMHZhY2F0aW9uJTIwcGFyYWRpc2V8ZW58MHx8fHwxNzc0NTYyNDQ2fDA&ixlib=rb-4.1.0&q=85"
                alt="Trip to Greece"
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-lg font-semibold text-jadoo-dark mb-4">Trip To Greece</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-jadoo-gray text-sm">
                  <Calendar className="mr-3 text-jadoo-gray" size={18} />
                  <span>14 Feb 2022 - 28 Feb 2022</span>
                </div>
                <div className="flex items-center text-jadoo-gray text-sm">
                  <MapPin className="mr-3 text-jadoo-gray" size={18} />
                  <span>24 people going</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-jadoo-gray hover:text-jadoo-coral">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2l2.5 5 5.5.5-4 4 1 5.5-5-2.5-5 2.5 1-5.5-4-4 5.5-.5z"/>
                  </svg>
                </button>
                <button className="text-jadoo-gray hover:text-jadoo-coral">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 18l-1.45-1.32C3.4 12.36 0 9.28 0 5.5 0 2.42 2.42 0 5.5 0c1.74 0 3.41.81 4.5 2.09C11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 3.78-3.4 6.86-8.55 11.18L10 18z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white rounded-2xl shadow-lg p-4 z-20 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="text-xs text-jadoo-gray">Ongoing</p>
                  <p className="text-sm font-semibold text-jadoo-dark">Trip to Rome</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-jadoo-coral">40%</span>
                    <div className="ml-2 w-20 h-1 bg-gray-200 rounded-full">
                      <div className="w-2/5 h-full bg-jadoo-coral rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;