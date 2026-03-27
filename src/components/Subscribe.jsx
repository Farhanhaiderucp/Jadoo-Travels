import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } else {
      setMessage('Please enter a valid email address');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden" data-testid="subscribe-section">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-8 h-8 text-jadoo-coral opacity-30">
        <Send size={32} />
      </div>
      <div className="absolute bottom-10 left-10 w-8 h-8 text-blue-400 opacity-30">
        <Mail size={32} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-jadoo-gray mb-4 leading-tight">
            Subscribe to get information, latest news and other interesting offers about Jadoo
          </h2>

          <form onSubmit={handleSubmit} className="mt-12 relative max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-jadoo-gray" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-0 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  data-testid="email-input"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-yellow-600 text-white rounded-xl font-medium hover:bg-yellow-600 hover:shadow-lg transition-all whitespace-nowrap"
                data-testid="subscribe-btn"
              >
                Subscribe
              </button>
            </div>
          </form>

          {message && (
            <div 
              className={`mt-6 p-4 rounded-lg ${
                message.includes('Thank you') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
              data-testid="subscribe-message"
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;