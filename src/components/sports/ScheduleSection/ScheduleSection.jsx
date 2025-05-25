import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/outline';

import { Section, SectionTag, SectionTitle, SectionSubtitle, ContentContainer, BottomLeftShape, BookButton } from '../../../styles/sports/CommonStyles';

const ScheduleSection = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <BottomLeftShape 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1 
        }}
      />
      
      <ContentContainer>
        <div style={{ textAlign: 'center' }}>
          <SectionTag
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {t('sports.schedule.tag', 'Планирование')}
          </SectionTag>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            {t('sports.schedule.title', 'Расписание занятий')}
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('sports.schedule.coming_soon', 'Расписание тренировок скоро будет доступно. Для получения актуальной информации, пожалуйста, свяжитесь с нами.')}
          </SectionSubtitle>
        </div>
        
        <div style={{ maxWidth: '600px', margin: '3rem auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BookButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ margin: '0 auto' }}
            >
              {t('sports.schedule.contact_button', 'Связаться с нами')}
              <PhoneIcon style={{ width: '18px', height: '18px' }} />
            </BookButton>
          </motion.div>
        </div>
      </ContentContainer>
    </Section>
  );
};

export default ScheduleSection;
