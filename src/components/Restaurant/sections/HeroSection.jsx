import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { StarIcon, ClockIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const HeroSection = ({ menuSectionRef }) => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden" style={{ position: 'relative' }}>
      {/* Background image with blur effect */}
      <div className="absolute inset-0 z-0" style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px) brightness(0.7)',
        transform: 'scale(1.1)', // Немного увеличиваем изображение, чтобы избежать прозрачных краев при размытии
      }}></div>
      {/* Additional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary opacity-5"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary opacity-5"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh] relative z-10">
        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-black bg-opacity-40 p-8 rounded-xl backdrop-blur-sm"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
            {t('restaurant.hero.label', 'Our Restaurant')}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6 leading-tight relative text-white">
            {t('restaurant.hero.title', 'Exquisite Cuisine')} <span className="text-primary">{t('restaurant.hero.highlight', 'with a Modern Twist')}</span>
            <div className="w-24 h-1.5 bg-primary mt-6 rounded-full"></div>
          </h1>
          
          <p className="text-lg text-white mb-8 max-w-lg">
            {t('restaurant.hero.subtitle', 'Our chefs create unique dishes by combining traditional recipes with new culinary techniques.')}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 text-lg border-2 border-white"
            onClick={() => {
              // Плавный скролл к секции меню при нажатии на кнопку
              menuSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-xl">{t('restaurant.hero.button', 'Наше меню')}</span>
            <ArrowRightIcon className="w-6 h-6" />
          </motion.button>
        </motion.div>
        
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative">
            <div className="w-[400px] h-[400px] mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Elegant dish" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-primary" />
                <p className="font-medium">4.9 (1.2k+)</p>
              </div>
              <p className="text-sm text-gray-500">{t('restaurant.hero.reviews', 'Excellent Reviews')}</p>
            </motion.div>
            
            <motion.div 
              className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-primary" />
                <p className="font-medium">30-45 {t('restaurant.hero.min', 'min')}</p>
              </div>
              <p className="text-sm text-gray-500">{t('restaurant.hero.delivery', 'Delivery Time')}</p>
            </motion.div>
            
            <motion.div
              className="absolute bottom-10 right-10 bg-primary text-white py-1.5 px-4 rounded-full text-sm font-medium shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {t('restaurant.hero.featured', 'Featured')}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
