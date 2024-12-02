import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { FeaturedTeas } from '../components/FeaturedTeas';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedTeas />
      <Testimonials />
      <ContactForm />
    </main>
  );
};