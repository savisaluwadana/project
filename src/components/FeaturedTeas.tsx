import React from 'react';
import { Link } from 'react-router-dom';
import { teas } from '../data/teas';

export const FeaturedTeas = () => {
  const featuredTeas = teas.slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
            Our Signature Teas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our most beloved Ceylon teas, carefully selected from our premium collection.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredTeas.map((tea) => (
            <div key={tea.id} className="group">
              <div className="relative backdrop-blur-sm bg-white/80 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={tea.image}
                    alt={tea.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{tea.name}</h3>
                  <p className="text-gray-600 mb-4">{tea.description}</p>
                  <p className="text-2xl font-bold mb-6 text-green-600">${tea.price}</p>
                  <Link
                    to={`/product/${tea.id}`}
                    className="block text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 px-6 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/products"
            className="inline-block backdrop-blur-sm bg-white/80 text-green-600 border-2 border-green-600 py-3 px-10 rounded-full font-medium hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};