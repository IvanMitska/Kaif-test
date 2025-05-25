import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { PhotoGallery, PhotoCard, PhotoPlaceholder } from './GalleryStyles';
import { Section, SectionTag, SectionTitle, SectionSubtitle, ContentContainer, BottomLeftShape } from '../../../styles/sports/CommonStyles';

const GallerySection = () => {
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
            {t('sports.gallery.tag', 'Фото')}
          </SectionTag>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            {t('sports.gallery.title', 'Галерея спортивных объектов')}
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('sports.gallery.subtitle', 'Взгляните на атмосферу и оснащение наших спортивных пространств. Каждый объект создан для комфортных и эффективных тренировок.')}
          </SectionSubtitle>
        </div>
        
        <PhotoGallery>
          <PhotoCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Gym" />
            <div className="photo-overlay">
              <div className="photo-title">{t('sports.gallery.gym', 'Тренажерный зал')}</div>
              <div className="photo-subtitle">{t('sports.gallery.subtitle_gym', 'Современное оборудование')}</div>
            </div>
          </PhotoCard>
          
          <PhotoCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src="https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Boxing ring" />
            <div className="photo-overlay">
              <div className="photo-title">{t('sports.gallery.boxing', 'Бойцовский клуб')}</div>
              <div className="photo-subtitle">{t('sports.gallery.subtitle_boxing', 'Профессиональный ринг')}</div>
            </div>
          </PhotoCard>
          
          <PhotoCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Personal training" />
            <div className="photo-overlay">
              <div className="photo-title">{t('sports.gallery.training', 'Персональный тренинг')}</div>
              <div className="photo-subtitle">{t('sports.gallery.subtitle_training', 'Индивидуальный подход')}</div>
            </div>
          </PhotoCard>
          
          <PhotoCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Swimming pool" />
            <div className="photo-overlay">
              <div className="photo-title">{t('sports.gallery.swimming', 'Бассейн')}</div>
              <div className="photo-subtitle">{t('sports.gallery.subtitle_swimming', 'Расслабление и восстановление')}</div>
            </div>
          </PhotoCard>
          
          {/* Заглушки для будущих фото */}
          {[1, 2, 3, 4, 5].map((item) => (
            <PhotoPlaceholder
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (item + 3) }}
            >
              {t('common.photo_placeholder', 'Фото будет добавлено')}
            </PhotoPlaceholder>
          ))}
        </PhotoGallery>
      </ContentContainer>
    </Section>
  );
};

export default GallerySection;
