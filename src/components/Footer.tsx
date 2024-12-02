import React from 'react';
import { Facebook, Twitter, Instagram, Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-transparent border-t border-gray-700/50 shadow-xl backdrop-blur-sm bg-opacity-75 py-6">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610735458851-dc59f4e7165f?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20"></div>
      {/* Content */}
      <div className="relative container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg">
                <Leaf className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-xl font-bold text-black">Exsimslanka</span>
            </div>
            <p className="text-black text-sm">
              Crafting exceptional Ceylon tea experiences since 1875. Every cup tells our story of quality and tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
            <h3 className="text-black font-semibold mb-3">Quick Links</h3>
            <ul className="flex space-x-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-black hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
            <h3 className="text-black font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-black text-sm">
                <Mail className="w-5 h-5 text-green-400" />
                <span>contact@exsimslanka.com</span>
              </li>
              <li className="flex items-center gap-2 text-black text-sm">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-2 text-black text-sm">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>123 Tea Garden Road, Kandy, Sri Lanka</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
            <h3 className="text-black font-semibold mb-3">Stay Updated</h3>
            <p className="text-black mb-3 text-sm">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-gray-600 text-black placeholder-gray-500 focus:outline-none focus:border-green-400 text-sm"
              />
              <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-black text-xs">
              &copy; {new Date().getFullYear()} Exsimslanka. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-black hover:text-green-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};