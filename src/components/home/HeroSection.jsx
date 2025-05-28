import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Основной контейнер
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: #000;
`;

// Фоновое видео
const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 100%);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

// Основной контент
const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

// Верхняя часть с основным заголовком
const HeroHeader = styled.div`
  margin-bottom: 5rem;
  max-width: 800px;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

// Маленький декоративный заголовок
const Overline = styled(motion.div)`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.7);
    margin-right: 1rem;
  }
`;

// Основной заголовок KAIF
const MainTitle = styled(motion.h1)`
  font-size: clamp(5rem, 12vw, 10rem);
  font-weight: 700;
  line-height: 0.9;
  margin: 0 0 1.5rem;
  letter-spacing: -2px;
  background: linear-gradient(to right, #FFFFFF 0%, #A0A0A0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
`;

// Подзаголовок
const Subtitle = styled(motion.h2)`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 300;
  color: white;
  margin: 0 0 2rem;
  max-width: 650px;
`;

// Описание
const Description = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  max-width: 550px;
`;

// Контейнер для кнопок
const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

// Основная кнопка
const PrimaryButton = styled(Link)`
  padding: 1.25rem 3rem;
  background: white;
  color: black;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-5px);
  }
`;

// Вторичная кнопка
const SecondaryButton = styled.button`
  padding: 1.25rem 3rem;
  background: transparent;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: white;
    transform: translateY(-5px);
  }
`;

// Секция с карточками услуг
const ServicesSection = styled.div`
  margin-top: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -5rem;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`;

// Заголовок для секции услуг
const SectionTitle = styled(motion.h3)`
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 3rem;
  display: inline-block;
`;

// Контейнер с сеткой для карточек услуг
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

// Карточка услуги
const ServiceCard = styled(motion.div)`
  position: relative;
  padding: 2rem;
  background-color: rgba(15, 15, 15, 0.5);
  backdrop-filter: blur(10px);
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  border-bottom: 3px solid ${props => props.$isActivity ? '#3a3a3a' : '#2a2a2a'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(25, 25, 25, 0.8);
    transform: translateY(-10px);
    border-bottom-color: ${props => props.$isActivity ? '#505050' : '#404040'};
  }
`;

// Плашка активность/релаксация
const ServiceBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.8rem;
  background: ${props => props.$isActivity ? '#333333' : '#222222'};
  border-radius: 2px;
  color: white;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  
  &::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: white;
    margin-right: 0.5rem;
  }
`;

// Заголовок услуги
const ServiceTitle = styled.h4`
  font-size: 1.75rem;
  font-weight: 600;
  color: white;
  margin: 0 0 1rem;
`;

// Описание услуги
const ServiceDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

// Нижняя часть с статистикой
const StatsSection = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  gap: clamp(3rem, 10vw, 8rem);
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
  }
`;

// Элемент статистики
const StatItem = styled(motion.div)`
  text-align: center;
`;

// Число статистики
const StatNumber = styled.div`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  color: white;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

// Подпись к статистике
const StatLabel = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`;

// Индикатор прокрутки вниз
const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

// Иконка для скролла вниз
const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

const HeroSection = () => {
  // Услуги
  const services = [
    {
      title: 'Фитнес-центр',
      description: '70+ тренажеров, кардио-зона, персональные тренировки',
      isActivity: true
    },
    {
      title: 'Боевые искусства',
      description: 'MMA, бокс, муай-тай с профессиональными тренерами',
      isActivity: true
    },
    {
      title: 'Бассейн 25м',
      description: 'Олимпийский стандарт с подогревом воды',
      isActivity: true
    },
    {
      title: 'СПА-центр',
      description: 'Тайский массаж, ароматерапия, релаксация',
      isActivity: false
    },
    {
      title: 'Ресторан',
      description: '5 кухонь мира с панорамной террасой',
      isActivity: false
    },
    {
      title: 'Салон красоты',
      description: 'Косметология, уходы, парикмахерские услуги',
      isActivity: false
    }
  ];
  
  // Статистика
  const stats = [
    { number: '7', label: 'ЗОН ОТДЫХА' },
    { number: '50м²', label: 'САУНА' },
    { number: '70+', label: 'ТРЕНАЖЕРОВ' }
  ];
  
  // Анимация появления с задержкой
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Варианты анимации
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };
  
  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  return (
    <HeroContainer>
      <BackgroundVideo>
        <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" alt="KAIF Fitness" />
      </BackgroundVideo>
      
      <ContentWrapper>
        <HeroHeader>
          <Overline
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Премиальный комплекс на Пхукете
          </Overline>
          
          <MainTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            KAIF
          </MainTitle>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Многофункциональный комплекс
          </Subtitle>
          
          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Современное пространство, объединяющее фитнес, релаксацию, 
            гастрономию и красоту в одном месте
          </Description>
          
          <ButtonContainer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <PrimaryButton to="/spa">
              ЗАБРОНИРОВАТЬ
            </PrimaryButton>
            
            <SecondaryButton>
              ВИРТУАЛЬНЫЙ ТУР
            </SecondaryButton>
          </ButtonContainer>
        </HeroHeader>
        
        <div>
          <ServicesSection>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
              transition={{ duration: 0.6 }}
            >
              Наши услуги
            </SectionTitle>
            
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  $isActivity={service.isActivity}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <ServiceBadge $isActivity={service.isActivity}>
                    {service.isActivity ? 'АКТИВНОСТЬ' : 'РЕЛАКСАЦИЯ'}
                  </ServiceBadge>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>
                    {service.description}
                  </ServiceDescription>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </ServicesSection>
          
          <StatsSection>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.9 }}
                transition={{ duration: 0.7, delay: index * 0.2 + 0.5 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsSection>
        </div>
        
        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <ArrowDownIcon />
          <span>Прокрутите вниз</span>
        </ScrollIndicator>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
