import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import {
  HeroSection as HeroSectionContainer,
  HeroBackground,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroCTAContainer,
  PrimaryButton,
  SecondaryButton,
  HeroStatsContainer,
  HeroStat,
  HeroStatNumber,
  HeroStatLabel,
  HeroImageContainer,
  HeroImage
} from './HeroStyles';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <HeroSectionContainer>
      <HeroBackground />

      <HeroContainer>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ paddingTop: '2rem' }}
        >
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('sports.hero.title', 'Достигайте новых <span>спортивных высот</span> с KAIF')}
          </HeroTitle>

          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {t('sports.hero.subtitle', 'В KAIF Jungle Club & SPA вы найдете все необходимое для активного образа жизни, тренировок и спортивного развлечения в атмосфере роскоши и комфорта.')}
          </HeroSubtitle>

          <HeroCTAContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <PrimaryButton
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('sports.hero.primary_cta', 'Записаться на тренировку')}
              <ArrowRightIcon />
            </PrimaryButton>

            <SecondaryButton
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('sports.hero.secondary_cta', 'Узнать подробнее')}
              <ChevronRightIcon />
            </SecondaryButton>
          </HeroCTAContainer>

          <HeroStatsContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <HeroStat
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <HeroStatNumber>5+</HeroStatNumber>
              <HeroStatLabel>{t('sports.hero.stats.facilities', 'Спортивных объектов')}</HeroStatLabel>
            </HeroStat>

            <HeroStat
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <HeroStatNumber>10+</HeroStatNumber>
              <HeroStatLabel>{t('sports.hero.stats.trainers', 'Профессиональных тренеров')}</HeroStatLabel>
            </HeroStat>

            <HeroStat
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <HeroStatNumber>24/7</HeroStatNumber>
              <HeroStatLabel>{t('sports.hero.stats.access', 'Доступ для резидентов')}</HeroStatLabel>
            </HeroStat>
          </HeroStatsContainer>
        </HeroContent>

        <HeroImageContainer
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginTop: '2rem' }}
        >
          <HeroImage
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Sports facility"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
        </HeroImageContainer>
      </HeroContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
