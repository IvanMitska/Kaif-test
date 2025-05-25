import React from 'react';
import { motion } from 'framer-motion';

// Импорт модульных компонентов
import BeautyHeroSection from '../components/beauty/HeroSection';
import BeautyServicesSection from '../components/beauty/ServicesSection';
import BeautyTeamSection from '../components/beauty/TeamSection';
import BeautyBookingSection from '../components/beauty/BookingSection';

// Импорт общих стилей
import { PageContainer } from '../styles/beauty/CommonStyles';

const BeautyPage = () => {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BeautyHeroSection />
      <BeautyServicesSection />
      <BeautyTeamSection />
      <BeautyBookingSection />
    </PageContainer>
  );
};

export default BeautyPage;
