import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Axon' },
    { name: 'Jetstar' },
    { name: 'Expedia' },
    { name: 'Qantas' },
    { name: 'Alitalia' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted by Top Brands
          </h2>
          <p className="text-gray-500 mt-2">
            We collaborate with industry leaders worldwide
          </p>
        </div>

        {/* Partners */}
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="px-6 py-4 bg-white rounded-xl shadow-md 
              opacity-70 hover:opacity-100 
              grayscale hover:grayscale-0 
              hover:shadow-xl hover:-translate-y-2 
              transition-all duration-300 cursor-pointer"
            >
              <div className="text-xl font-bold text-gray-700 hover:text-yellow-600 transition-colors">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;