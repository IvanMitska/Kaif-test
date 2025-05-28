import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  SparklesIcon, 
  StarIcon, 
  CheckCircleIcon, 
  ArrowRightIcon, 
  UserIcon,
  ClockIcon,
  PhoneIcon
} from '@heroicons/react/24/solid';

// Импортируем компоненты SPA
import SpaHeroSection from '../components/spa/SpaHeroSection';
import SpaServicesSection from '../components/spa/SpaServicesSection';
import SpaFeaturesSection from '../components/spa/SpaFeaturesSection';
import SpaTestimonialsSection from '../components/spa/SpaTestimonialsSection';
import SpaBookingSection from '../components/spa/SpaBookingSection';
import SpaFAQSection from '../components/spa/SpaFAQSection';

/**
 * Контейнер для SPA страницы в стиле Modern Oasis
 */
const SpaContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${props => props.theme.fonts.primary};
  overflow-x: hidden;
`;

/**
 * Декоративный элемент фона
 */
const BackgroundDecoration = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(210, 155, 132, 0.05) 0%, rgba(224, 232, 225, 0.05) 100%);
  filter: blur(70px);
  z-index: 0;
  pointer-events: none;
`;

const TopRightDecoration = styled(BackgroundDecoration)`
  width: 50vw;
  height: 50vw;
  top: -10%;
  right: -15%;
  opacity: 0.6;
`;

const BottomLeftDecoration = styled(BackgroundDecoration)`
  width: 60vw;
  height: 60vw;
  bottom: 10%;
  left: -20%;
  opacity: 0.4;
`;


/**
 * SPA Page Component
 * 
 * Современная страница для SPA & Beauty секции в стиле Modern Oasis
 * Интегрирует модульные компоненты с анимациями и обновленным дизайном
 */
const SpaPage = () => {
  const { t } = useTranslation();
  
  // Варианты анимации
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  const decorationVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 }
  };
  
  return (
    <SpaContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.6 }}
    >
      {/* Декоративные элементы фона */}
      <TopRightDecoration 
        variants={decorationVariants}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.7, 0.6]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.2
        }}
      />
      
      <BottomLeftDecoration 
        variants={decorationVariants}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.5, 0.4]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.4
        }}
      />
      
      {/* Компоненты страницы */}
      <SpaHeroSection />
      <SpaServicesSection />
      <SpaFeaturesSection />
      <SpaTestimonialsSection />
      <SpaFAQSection />
      <SpaBookingSection />
    </SpaContainer>
  );
};

export default SpaPage;
