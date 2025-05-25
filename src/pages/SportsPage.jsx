import React from 'react';
import { motion } from 'framer-motion';

// Импорт компонентов секций
import { HeroSection, FacilitySection, GallerySection, ScheduleSection } from '../components/sports';
import { PageContainer } from '../styles/sports/CommonStyles';

const SportsPage = () => {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Секции разделены на отдельные компоненты */}
      <HeroSection />
      <FacilitySection />
      <GallerySection />
      <ScheduleSection />
    </PageContainer>
  );
};

export default SportsPage;
