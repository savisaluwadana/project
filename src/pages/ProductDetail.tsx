import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { teas } from '../data/teas';
import { Clock, Thermometer, MapPin } from 'lucide-react';

export const ProductDetail = () => {
  const { id } = useParams();
  const tea = teas.find(t => t.id === Number(id));

  if (!tea) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="text-green-600 hover:text-green-700 mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src={tea.image}
                alt={tea.name}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-4">{tea.name}</h1>
              <p className="text-2xl font-bold text-green-600 mb-6">${tea.price}</p>
              
              <div className="prose max-w-none mb-8">
                <p className="text-gray-600">{tea.longDescription}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-green-600" />
                  <span>Origin: {tea.origin}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-green-600" />
                  <span>Brewing Time: {tea.brewingTime}</span>
                </div>
                <div className="flex items-center">
                  <Thermometer className="w-5 h-5 mr-3 text-green-600" />
                  <span>Temperature: {tea.temperature}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};