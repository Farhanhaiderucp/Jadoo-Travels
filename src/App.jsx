import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import BookingSteps from './components/BookingSteps';
import Partners from './components/Partners';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Destinations />
            <BookingSteps />
            <Partners />
            <Subscribe />
          </>
        } />
        <Route path="/destinations" element={
          <>
            <div className="pt-32 pb-12">
              <Destinations />
            </div>
          </>
        } />
        <Route path="/hotels" element={
          <div className="pt-32 pb-12 min-h-screen">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-jadoo-dark text-center mb-8">Hotels Coming Soon</h1>
            </div>
          </div>
        } />
        <Route path="/flights" element={
          <>
            <div className="pt-32 pb-12">
              <Partners />
            </div>
          </>
        } />
        <Route path="/bookings" element={
          <>
            <div className="pt-32 pb-12">
              <BookingSteps />
            </div>
          </>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;