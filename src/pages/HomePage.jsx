import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutPreviewSection from '../components/home/AboutPreviewSection';
import PromotionsSection from '../components/home/PromotionsSection';
import FAQSection from '../components/home/FAQSection';
import LocationSection from '../components/home/LocationSection';

const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection />
      <ServicesSection />
      <AboutPreviewSection />
      <PromotionsSection />
      <FAQSection />
      <LocationSection />
    </motion.main>
  );
};

export default HomePage; 