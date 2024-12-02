import React from 'react';
import { Award, Leaf, Shield, Sprout } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
      <img
          src="https://images.unsplash.com/photo-1546845776-dcdf70fd09e3?auto=format&fit=crop&q=80&w=1920"
          alt="Tea Garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Story</h1>
        </div>
      </div>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">A Legacy of Excellence</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 1875 in the pristine highlands of Sri Lanka, Exsimslanka has been at the 
              forefront of Ceylon tea production for nearly 150 years. Our journey began with a 
              single estate and a vision to produce the finest teas in the world.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Through generations of expertise and dedication, we have grown to become one of Sri Lanka's 
              most respected tea producers, maintaining the highest standards of quality while embracing 
              sustainable and ethical farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">Committed to producing only the finest Ceylon tea through careful selection and processing.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">Implementing eco-friendly practices to protect our environment for future generations.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tradition</h3>
              <p className="text-gray-600">Preserving traditional tea-making methods while embracing modern innovations.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for excellence in every aspect of our tea production and service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Certifications</h2>
            <p className="text-gray-600 mb-8">
              We maintain the highest standards of quality and sustainability through internationally 
              recognized certifications:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">ISO 9001:2015</h3>
                <p className="text-sm text-gray-600">Quality Management System</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Organic Certified</h3>
                <p className="text-sm text-gray-600">USDA & EU Organic Standards</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Rainforest Alliance</h3>
                <p className="text-sm text-gray-600">Sustainable Agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};