import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  SliderContainer, 
  SlidesTrack, 
  Slide, 
  SliderButton, 
  SliderDots, 
  SliderDot 
} from './GalleryStyles';
import { 
  Section, 
  SectionTag, 
  SectionTitle, 
  SectionSubtitle, 
  ContentContainer, 
  BottomLeftShape 
} from '../../../styles/sports/CommonStyles';

// Данные слайдера
const sliderData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    title: "Тренажерный зал",
    subtitle: "Современное оборудование"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    title: "Бойцовский клуб",
    subtitle: "Профессиональный ринг"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    title: "Персональный тренинг",
    subtitle: "Индивидуальный подход"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1576443486731-ab46ed3a0a0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    title: "Бассейн",
    subtitle: "Релаксация и восстановление"
  }
];

const GallerySection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [autoplayActive, setAutoplayActive] = useState(true);

  // Автоматическое переключение слайдов
  useEffect(() => {
    let interval;
    if (autoplayActive) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentSlide, autoplayActive]);

  // Переключение на предыдущий слайд
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(prev => 
      prev === 0 ? sliderData.length - 1 : prev - 1
    );
  };
  
  // Переключение на следующий слайд
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide(prev => 
      prev === sliderData.length - 1 ? 0 : prev + 1
    );
  };
  
  // Переключение на конкретный слайд
  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };
  
  // Обработчики жестов смахивания
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setDragging(true);
    setAutoplayActive(false);
  };
  
  const handleTouchMove = (e) => {
    if (!dragging) return;
    setTouchEnd(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    setDragging(false);
    setAutoplayActive(true);
    
    if (touchStart - touchEnd > 75) {
      // Свайп влево - следующий слайд
      nextSlide();
    } else if (touchEnd - touchStart > 75) {
      // Свайп вправо - предыдущий слайд
      prevSlide();
    }
  };
  
  // Для клавиатурной навигации
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  // Варианты анимации для слайдов
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // Эффект для добавления обработчика клавиатуры
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <Section id="gallery">
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
            {t('sports.gallery.title', 'Gallery')}
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('sports.gallery.subtitle', 'Captured moments of sports life at KAIF Jungle Club & SPA. Join our community and share your own achievements')}
          </SectionSubtitle>
        </div>
        
        <SliderContainer
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          tabIndex="0"
          onMouseEnter={() => setAutoplayActive(false)}
          onMouseLeave={() => setAutoplayActive(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <SlidesTrack>
              <Slide
                key={currentSlide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <img 
                  src={sliderData[currentSlide].image} 
                  alt={sliderData[currentSlide].title}
                  loading="lazy"
                />
                <div className="slide-overlay">
                  <div className="slide-title">{t(`sports.gallery.${sliderData[currentSlide].title.toLowerCase().replace(/\s+/g, '_')}`, sliderData[currentSlide].title)}</div>
                  <div className="slide-subtitle">{t(`sports.gallery.subtitle_${sliderData[currentSlide].title.toLowerCase().replace(/\s+/g, '_')}`, sliderData[currentSlide].subtitle)}</div>
                </div>
              </Slide>
            </SlidesTrack>
          </AnimatePresence>
          
          <SliderButton 
            className="prev" 
            onClick={prevSlide}
            aria-label="Предыдущий слайд"
          >
            &#8249;
          </SliderButton>
          
          <SliderButton 
            className="next" 
            onClick={nextSlide}
            aria-label="Следующий слайд"
          >
            &#8250;
          </SliderButton>
          
          <SliderDots>
            {sliderData.map((_, index) => (
              <SliderDot 
                key={index} 
                active={index === currentSlide}
                onClick={() => goToSlide(index)}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </SliderDots>
        </SliderContainer>
      </ContentContainer>
    </Section>
  );
};

export default GallerySection;
