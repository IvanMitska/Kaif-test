import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  StarIcon, 
  ArrowRightIcon, 
} from '@heroicons/react/24/solid';

// Импорт стилей
import { 
  HeroSection, 
  HeroBackground, 
  HeroContainer, 
  HeroContent, 
  HeroTitle, 
  HeroSubtitle, 
  HeroStatsContainer, 
  HeroStat, 
  HeroStatNumber, 
  HeroStatLabel, 
  HeroButtonsContainer,
  HeroImageContainer,
  HeroImage
} from './HeroStyles';

import { PrimaryButton, SecondaryButton } from '../../../styles/beauty/CommonStyles';

// Анимационные варианты
const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const BeautyHeroSection = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroBackground />
      
      <HeroContainer>
        <HeroContent
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <HeroTitle>
              {t('beauty.hero.title', 'Современный салон красоты в сердце Пхукета')}
            </HeroTitle>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <HeroSubtitle>
              {t('beauty.hero.subtitle', 'Мы предлагаем широкий спектр услуг по уходу за волосами, кожей и телом с использованием премиальных продуктов и инновационных методик.')}
            </HeroSubtitle>
          </motion.div>
          
          <HeroStatsContainer variants={itemVariants}>
            <HeroStat>
              <HeroStatNumber>10+</HeroStatNumber>
              <HeroStatLabel>{t('beauty.hero.stat1', 'Лет опыта')}</HeroStatLabel>
            </HeroStat>
            
            <HeroStat>
              <HeroStatNumber>15+</HeroStatNumber>
              <HeroStatLabel>{t('beauty.hero.stat2', 'Мастеров')}</HeroStatLabel>
            </HeroStat>
            
            <HeroStat>
              <HeroStatNumber>4.9</HeroStatNumber>
              <HeroStatLabel>{t('beauty.hero.stat3', 'Рейтинг')}</HeroStatLabel>
            </HeroStat>
          </HeroStatsContainer>
          
          <HeroButtonsContainer variants={itemVariants}>
            <PrimaryButton as={Link} to="/booking">
              {t('beauty.hero.cta_primary', 'Записаться')}
              <ArrowRightIcon />
            </PrimaryButton>
            
            <SecondaryButton as={Link} to="/beauty-services">
              {t('beauty.hero.cta_secondary', 'Узнать больше')}
              <SparklesIcon />
            </SecondaryButton>
          </HeroButtonsContainer>
        </HeroContent>
        
        <HeroImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <HeroImage 
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Beauty salon"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            style={{
              position: 'absolute',
              top: '15%',
              right: '-5%',
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '12px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <SparklesIcon style={{ width: 30, height: 30, color: '#D29B84' }} />
          </motion.div>
          
          <motion.div
            style={{
              position: 'absolute',
              bottom: '15%',
              left: '-5%',
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '15px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <div style={{ display: 'flex' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} style={{ width: 20, height: 20, color: '#F59E0B' }} />
              ))}
            </div>
            <span style={{ fontWeight: 600 }}>
              {t('beauty.hero.reviews', '500+ отзывов')}
            </span>
          </motion.div>
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default BeautyHeroSection;
