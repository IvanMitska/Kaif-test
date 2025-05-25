import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { StarIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/solid';

const BookingSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
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
      <motion.div 
        className="absolute top-40 left-20 w-32 h-32 rounded-full bg-primary opacity-5"
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, 30, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
              {t('restaurant.booking.label', 'Бронирование')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              {t('restaurant.booking.title', 'Забронируйте стол в нашем ресторане')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('restaurant.booking.description', 'Заранее зарезервируйте столик для особого события или просто для гарантированного места в нашем ресторане.')}
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t('restaurant.booking.open_hours', 'Часы работы')}</p>
                  <p className="text-gray-500 text-sm">10:00 - 22:00</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t('restaurant.booking.reservation', 'Резервация')}</p>
                  <p className="text-gray-500 text-sm">{t('common.phone_number')}</p>
                </div>
              </div>
            </div>
            
            <a 
              href="tel:+66624805877"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 text-lg"
            >
              {t('restaurant.booking.call_now', 'Позвонить сейчас')}
              <PhoneIcon className="w-5 h-5" />
            </a>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <div className="h-6 w-px bg-gray-300"></div>
                <p className="font-medium">4.9 (2.5k+)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
