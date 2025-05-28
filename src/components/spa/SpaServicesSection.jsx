import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

// Используем плейсхолдеры для изображений
const thaiMassageImg = 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const aromatherapyImg = 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const saunaImg = 'https://images.unsplash.com/photo-1554157628-d1e1a0a36b83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const hammamImg = 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const swimmingImg = 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const jacuzziImg = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

// Плейсхолдеры для Beauty услуг
const haircutImg = 'https://images.unsplash.com/photo-1560869713-2cc18e9d0d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const hairColorImg = 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const manicureImg = 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const pedicureImg = 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const facialImg = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

// =============================================================================
// НЕЖНАЯ СЕКЦИЯ УСЛУГ SPA
// =============================================================================

// Секция услуг
const ServicesSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, 
    #fdfcfb 0%,
    #f5f3f0 50%,
    #ede9e4 100%
  );
  position: relative;
  overflow: hidden;
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.$color};
  filter: blur(60px);
  opacity: 0.3;
`;

const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  background: linear-gradient(135deg, #5A6B5D 0%, #7A8A7D 50%, #90B3A7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  width: 100%;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: #7A8A7D;
  text-align: center;
  max-width: 700px;
  margin: 2.5rem auto 4.5rem auto;
  line-height: 1.8;
  font-weight: 400;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Tab = styled(motion.button)`
  padding: 1rem 2.5rem;
  border: none;
  background-color: ${props => props.active 
    ? 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)' 
    : 'rgba(255, 255, 255, 0.7)'
  };
  color: ${props => props.active ? 'white' : '#5A6B5D'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(144, 179, 167, 0.2)'};
  border-radius: 50px;
  font-weight: ${props => props.active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.active 
    ? '0 8px 25px rgba(144, 179, 167, 0.3)' 
    : '0 4px 15px rgba(144, 179, 167, 0.08)'
  };
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.active ? '100%' : '0%'};
    height: 100%;
    background: linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%);
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: ${props => !props.active && 'white'};
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.2);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  &:focus {
    outline: none;
  }
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.08);
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #90B3A7, #B8C4A8);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(144, 179, 167, 0.15);
    background: rgba(255, 255, 255, 0.95);
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ServiceImageContainer = styled.div`
  height: 240px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, 
      rgba(144, 179, 167, 0) 60%, 
      rgba(144, 179, 167, 0.1) 100%
    );
    z-index: 1;
    transition: opacity 0.3s ease;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease;
  }
  
  ${ServiceCard}:hover & img {
    transform: scale(1.08);
  }
`;

const ServiceContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-family: ${props => props.theme?.fonts?.heading || '"Poppins", sans-serif'};
  color: #5A6B5D;
  position: relative;
  transition: color 0.3s ease;
  
  ${ServiceCard}:hover & {
    color: #90B3A7;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #7A8A7D;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
  font-weight: 400;
`;

const ServicePrice = styled.div`
  font-weight: 700;
  color: #90B3A7;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-family: ${props => props.theme?.fonts?.elegant || '"Playfair Display", serif'};
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 2px;
    background-color: #90B3A7;
    margin-right: 0.75rem;
    border-radius: 1px;
  }
`;

const ServiceFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
`;

const ServiceFeature = styled.span`
  background: rgba(144, 179, 167, 0.1);
  color: #5A6B5D;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(144, 179, 167, 0.15);
  
  ${ServiceCard}:hover & {
    background: rgba(144, 179, 167, 0.15);
    color: #90B3A7;
  }
`;

const ServiceButton = styled(motion.button)`
  background: rgba(144, 179, 167, 0.1);
  color: #5A6B5D;
  border: 1px solid rgba(144, 179, 167, 0.2);
  padding: 0.9rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${props => props.theme?.fonts?.primary || 'Inter, sans-serif'};
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  align-self: flex-start;
  position: relative;
  overflow: hidden;
  z-index: 1;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%);
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.2);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const SpaServicesSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0); // 0 = Spa, 1 = Beauty
  
  // Данные для SPA услуг
  const spaServices = [
    {
      id: 1,
      title: 'Тайский массаж',
      description: 'Традиционный тайский массаж для полного расслабления и восстановления энергии.',
      price: '1,500 ฿',
      image: thaiMassageImg,
      features: ['60 мин', 'Восстановление', 'Релакс']
    },
    {
      id: 2,
      title: 'Ароматерапевтический массаж',
      description: 'Массаж с использованием эфирных масел для глубокого расслабления и ароматерапии.',
      price: '1,800 ฿',
      image: aromatherapyImg,
      features: ['90 мин', 'Ароматерапия', 'Антистресс']
    },
    {
      id: 3,
      title: 'Финская сауна',
      description: 'Традиционная финская сауна с высокой температурой для детоксикации организма.',
      price: '800 ฿',
      image: saunaImg,
      features: ['30 мин', 'Детокс', 'Очищение']
    },
    {
      id: 4,
      title: 'Хаммам',
      description: 'Турецкая баня с паром и пилингом для глубокого очищения кожи.',
      price: '1,000 ฿',
      image: hammamImg,
      features: ['45 мин', 'Пилинг', 'Увлажнение']
    },
    {
      id: 5,
      title: 'Плавание в бассейне',
      description: 'Доступ к нашему бассейну с контролируемой температурой на целый день.',
      price: '500 ฿',
      image: swimmingImg,
      features: ['Весь день', 'Фитнес', 'Релакс']
    },
    {
      id: 6,
      title: 'Гидромассажная ванна',
      description: 'Расслабляющая гидромассажная ванна с пузырьками для снятия напряжения.',
      price: '700 ฿',
      image: jacuzziImg,
      features: ['30 мин', 'Релаксация', 'Гидротерапия']
    }
  ];

  // Данные для услуг салона красоты
  const beautyServices = [
    {
      id: 1,
      title: 'Стрижка и укладка',
      description: 'Профессиональная стрижка и укладка от наших опытных стилистов.',
      price: '1,200 ฿',
      image: haircutImg,
      features: ['60 мин', 'Стрижка', 'Укладка']
    },
    {
      id: 2,
      title: 'Окрашивание волос',
      description: 'Профессиональное окрашивание волос с использованием качественных красителей.',
      price: '2,500 ฿',
      image: hairColorImg,
      features: ['120 мин', 'Окрашивание', 'Уход']
    },
    {
      id: 3,
      title: 'Маникюр',
      description: 'Классический маникюр с покрытием гель-лаком на выбор.',
      price: '800 ฿',
      image: manicureImg,
      features: ['60 мин', 'Маникюр', 'Гель-лак']
    },
    {
      id: 4,
      title: 'Педикюр',
      description: 'Педикюр с массажем ног и покрытием гель-лаком.',
      price: '1,000 ฿',
      image: pedicureImg,
      features: ['75 мин', 'Педикюр', 'Массаж']
    },
    {
      id: 5,
      title: 'Очищающая маска для лица',
      description: 'Глубокое очищение кожи лица с использованием профессиональных средств.',
      price: '1,300 ฿',
      image: facialImg,
      features: ['45 мин', 'Очищение', 'Увлажнение']
    },
    {
      id: 6,
      title: 'Антивозрастной уход',
      description: 'Комплексный уход за лицом с антивозрастным эффектом.',
      price: '2,200 ฿',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      features: ['90 мин', 'Омоложение', 'Лифтинг']
    }
  ];
  
  const servicesToShow = activeTab === 0 ? spaServices : beautyServices;
  
  // Варианты анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-15, 15, -15],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <ServicesSection id="services">
      <FloatingElements>
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(144, 179, 167, 0.06) 0%, rgba(184, 196, 168, 0.06) 100%)"
          style={{ width: '300px', height: '300px', top: '5%', left: '5%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
        />
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(184, 196, 168, 0.05) 0%, rgba(144, 179, 167, 0.05) 100%)"
          style={{ width: '200px', height: '200px', top: '70%', right: '10%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 4 }}
        />
      </FloatingElements>

      <SectionContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('spa.services.title', 'Наши услуги')}
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Используем текст напрямую вместо перевода, так как перевод отсутствует */}
          Откройте для себя мир релаксации и красоты с нашими профессиональными услугами.
        </SectionSubtitle>
        
        <TabsContainer>
          <Tab 
            active={activeTab === 0}
            onClick={() => setActiveTab(0)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            SPA & Wellness
          </Tab>
          <Tab 
            active={activeTab === 1}
            onClick={() => setActiveTab(1)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Beauty & Care
          </Tab>
        </TabsContainer>
        
        <ServicesGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeTab}
        >
          {servicesToShow.map((service, index) => (
            <ServiceCard 
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceImageContainer>
                <img src={service.image} alt={service.title} />
              </ServiceImageContainer>
              
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                
                <ServiceFeatures>
                  {service.features.map((feature, i) => (
                    <ServiceFeature key={i}>{feature}</ServiceFeature>
                  ))}
                </ServiceFeatures>
                
                <ServicePrice>{service.price}</ServicePrice>
                
                <ServiceButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Забронировать
                  <ArrowLongRightIcon />
                </ServiceButton>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </SectionContainer>
    </ServicesSection>
  );
};

export default SpaServicesSection;
