import React from 'react';
import { Leaf } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1546845776-dcdf70fd09e3?auto=format&fit=crop&q=80&w=1920"
          alt="Tea Garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
            <Leaf className="w-12 h-12 text-green-600" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">A S Exim Lanka</h1>
            </div>
          <p className="text-xl md:text-3xl mb-8 text-center max-w-2xl font-light">
            Experience the Essence of Ceylon Tea
          </p>
          <a href="/products">
  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 border border-white/30 hover:scale-105">
    Explore Our Tea
  </button>
</a>
        </div>
      </div>
    </div>
  );
};