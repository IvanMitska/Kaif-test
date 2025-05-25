import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShoppingBagIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { getRestaurantData } from '../data/restaurantData';

const MenuSection = ({ menuSectionRef }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = React.useState('all');
  const { menuItems, tagStyles } = getRestaurantData(t);

  return (
    <section ref={menuSectionRef} className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="menu-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-opacity-10 bg-primary text-primary text-sm font-medium mb-4">
          {t('restaurant.menu.tag', 'Изысканные блюда')}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
          {t('restaurant.menu.title', 'Наше меню')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('restaurant.menu.description', 'Откройте для себя разнообразие вкусов в нашем меню, созданном талантливыми шеф-поварами')}
        </p>
      </motion.div>

      {/* Menu Categories */}
      <div className="mb-16">
        <motion.div 
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {['all', 'breakfast', 'lunch', 'dinner', 'desserts', 'drinks'].map((category) => (
            <motion.button 
              key={category}
              style={{
                padding: '0.625rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                backgroundColor: activeCategory === category ? '#D29B84' : '#FFFFFF',
                color: activeCategory === category ? '#FFFFFF' : '#4B5563',
                border: `2px solid ${activeCategory === category ? '#D29B84' : '#D1D5DB'}`,
                boxShadow: activeCategory === category ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 1px 2px rgba(0, 0, 0, 0.05)'
              }}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              onClick={() => setActiveCategory(category)}
            >
              {t(`restaurant.menu.categories.${category}`, category.charAt(0).toUpperCase() + category.slice(1))}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Фильтруем блюда по выбранной категории */}
          {menuItems
            .filter(item => activeCategory === 'all' || item.category === activeCategory)
            .map((item, index) => (
              <motion.div 
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                      {t('restaurant.menu.popular', 'Popular')}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${tagStyles[tag] || 'bg-gray-50 text-gray-600'}`}
                      >
                        {t(`restaurant.menu.tags.${tag}`, tag.charAt(0).toUpperCase() + tag.slice(1))}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-playfair">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary text-xl font-bold">{item.price}</span>
                    <motion.button 
                      className="flex items-center justify-center gap-2 px-3 py-2 bg-primary rounded-full text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title={t('restaurant.menu.add_to_order', 'Добавить в заказ')}
                    >
                      <ShoppingBagIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">{t('restaurant.menu.add', 'Добавить')}</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg border-2 border-white hover:bg-opacity-90 transition-all duration-300 relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Плавный скролл к секции меню при нажатии на кнопку
              menuSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-base font-bold">{t('restaurant.menu.view_all', 'Открыть полное меню')}</span>
            <ArrowRightIcon className="w-5 h-5" />
          </motion.button>
          <p className="mt-2 text-gray-600 font-medium">{t('restaurant.menu.navigation_hint', 'Нажмите, чтобы перейти к полному меню ресторана')}</p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
