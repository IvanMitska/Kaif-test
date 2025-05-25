import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

import { 
  ContentContainer, 
  SectionHeader, 
  SectionTag, 
  SectionTitle, 
  SectionDescription 
} from '../../../styles/beauty/CommonStyles';

// Стили для компонента услуг
const ServicesContainer = styled.section`
  padding: 8rem 2rem;
  background-color: ${props => props.theme.colors.background};
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
`;

const TabButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text.secondary};
  padding: 0.5rem 2rem;
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${props => props.active ? props.theme.colors.primary : 'transparent'};
    border-radius: 3px;
    transition: all 0.3s ease;
  }
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ServiceCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ServiceContent = styled.div`
  padding: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.text.primary};
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 1.5rem;
`;

const ServicePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Price = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const BookButton = styled.button`
  padding: 0.6rem 1.5rem;
  background-color: rgba(210, 155, 132, 0.1);
  color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: ${props => props.theme.colors.text.secondary};
  
  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: ${props => props.theme.colors.primary};
  }
`;

// Данные для сервисов
const beautyServices = [
  {
    id: 1,
    title: 'Стрижка и укладка',
    description: 'Профессиональная стрижка и укладка от опытных стилистов.',
    price: '1,200 ฿',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: ['60 мин', 'Консультация', 'Стайлинг']
  },
  {
    id: 2,
    title: 'Окрашивание волос',
    description: 'Окрашивание волос с использованием премиальных красителей.',
    price: '2,500 ฿',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: ['120 мин', 'Консультация', 'Уход за волосами']
  },
  {
    id: 3,
    title: 'Маникюр и педикюр',
    description: 'Комплексный уход за ногтями рук и ног с покрытием гель-лаком.',
    price: '1,800 ฿',
    image: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: ['90 мин', 'Дизайн ногтей', 'Увлажнение']
  },
  {
    id: 4,
    title: 'Уход за лицом',
    description: 'Процедуры по уходу за лицом с использованием органической косметики.',
    price: '1,500 ฿',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: ['60 мин', 'Глубокое очищение', 'Массаж лица']
  },
  {
    id: 5,
    title: 'Наращивание ресниц',
    description: 'Профессиональное наращивание ресниц различных объемов.',
    price: '1,600 ฿',
    image: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: ['90 мин', 'Консультация', 'Натуральный эффект']
  },
  {
    id: 6,
    title: 'Макияж',
    description: 'Профессиональный макияж для любого случая с использованием люксовых брендов.',
    price: '1,300 ฿',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: ['60 мин', 'Консультация', 'Индивидуальный подход']
  }
];

const spaServices = [
  {
    id: 1,
    title: 'Тайский массаж',
    description: 'Традиционный тайский массаж для полного расслабления и восстановления энергии.',
    price: '1,500 ฿',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: ['60 мин', 'Восстановление', 'Релакс']
  },
  {
    id: 2,
    title: 'Аромамассаж',
    description: 'Ароматерапевтический массаж с использованием эфирных масел премиум-класса.',
    price: '1,800 ฿',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: ['90 мин', 'Расслабление', 'Ароматерапия']
  },
  {
    id: 3,
    title: 'Массаж горячими камнями',
    description: 'Специальная техника массажа с использованием гладких нагретых камней.',
    price: '2,000 ฿',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: ['90 мин', 'Детоксикация', 'Глубокая релаксация']
  },
  {
    id: 4,
    title: 'Травяной пилинг',
    description: 'Обновление кожи с помощью натуральных тайских трав и скрабов.',
    price: '1,300 ฿',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: ['45 мин', 'Очищение', 'Обновление']
  },
  {
    id: 5,
    title: 'СПА для лица',
    description: 'Комплексный уход за лицом с использованием натуральных компонентов.',
    price: '1,700 ฿',
    image: 'https://images.unsplash.com/photo-1515489202285-5675ba9bc5c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: ['60 мин', 'Питание', 'Омоложение']
  },
  {
    id: 6,
    title: 'Фут-массаж',
    description: 'Традиционный тайский массаж стоп для снятия усталости и напряжения.',
    price: '1,100 ฿',
    image: 'https://images.unsplash.com/photo-1582653521877-0f6cc0b1c85d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    features: ['45 мин', 'Снятие напряжения', 'Точечное воздействие']
  }
];

// Анимационные варианты
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
    transition: { duration: 0.5 }
  }
};

const BeautyServicesSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('beauty');
  
  const services = activeTab === 'beauty' ? beautyServices : spaServices;

  return (
    <ServicesContainer id="services">
      <ContentContainer>
        <SectionHeader>
          <SectionTag
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('beauty.services.tag', 'Наши услуги')}
          </SectionTag>
          
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('beauty.services.title', 'Предлагаем широкий спектр услуг')}
          </SectionTitle>
          
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('beauty.services.description', 'Мы используем только лучшие косметические средства и инновационные техники для достижения максимального результата. Каждая процедура адаптирована под индивидуальные потребности клиента.')}
          </SectionDescription>
        </SectionHeader>
        
        <TabsContainer>
          <TabButton 
            active={activeTab === 'beauty'} 
            onClick={() => setActiveTab('beauty')}
          >
            {t('beauty.services.tab_beauty', 'Красота')}
          </TabButton>
          <TabButton 
            active={activeTab === 'spa'} 
            onClick={() => setActiveTab('spa')}
          >
            {t('beauty.services.tab_spa', 'СПА')}
          </TabButton>
        </TabsContainer>
        
        <AnimatePresence mode="wait">
          <ServicesGrid
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
          >
            {services.map((service) => (
              <ServiceCard key={service.id} variants={itemVariants}>
                <ServiceImage>
                  <img src={service.image} alt={service.title} />
                </ServiceImage>
                
                <ServiceContent>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  
                  <FeaturesList>
                    {service.features.map((feature, index) => (
                      <FeatureItem key={index}>
                        <CheckCircleIcon />
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeaturesList>
                  
                  <ServicePrice>
                    <Price>{service.price}</Price>
                    <BookButton>
                      {t('beauty.services.book_button', 'Забронировать')}
                    </BookButton>
                  </ServicePrice>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </AnimatePresence>
      </ContentContainer>
    </ServicesContainer>
  );
};

export default BeautyServicesSection;
