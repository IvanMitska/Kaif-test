import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  SparklesIcon,
  StarIcon
} from '@heroicons/react/24/solid';

// Используем плейсхолдер для изображения
const spaHeroImage = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';

// =============================================================================
// СОВРЕМЕННЫЙ НЕЖНЫЙ SPA & BEAUTY HERO
// =============================================================================

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    #fdfcfb 0%,
    #f5f3f0 30%,
    #ede9e4 100%
  );
  overflow: hidden;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(144, 179, 167, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(184, 196, 168, 0.06) 0%, transparent 50%);
    z-index: 1;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.$color};
  filter: blur(50px);
  opacity: 0.4;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 80vh;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 6rem;
  }
`;

const MainContent = styled(motion.div)`
  text-align: left;
  max-width: 580px;
  
  @media (max-width: 1023px) {
    text-align: center;
    margin: 0 auto;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.12) 0%, rgba(184, 196, 168, 0.12) 100%);
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 30px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  font-weight: 500;
  color: #6B8471;
  backdrop-filter: blur(20px);
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(144, 179, 167, 0.08);
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7;
  }
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #5A6B5D 0%, #7A8A7D 50%, #90B3A7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`;

const Subtitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 2rem;
  color: #7A8A7D;
  letter-spacing: 0.02em;
`;

const Description = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.125rem;
  line-height: 1.7;
  color: #6B7B6E;
  margin-bottom: 3rem;
  max-width: 480px;
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
    max-width: 400px;
    margin: 0 auto 3rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  border: 1px solid rgba(144, 179, 167, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(144, 179, 167, 0.06);
  
  @media (min-width: 1024px) {
    text-align: center;
  }
`;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: 1.875rem;
  font-weight: 600;
  color: #5A6B5D;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  color: #7A8A7D;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const PrimaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%);
  color: white;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(144, 179, 167, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(144, 179, 167, 0.4);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: rgba(255, 255, 255, 0.8);
  color: #5A6B5D;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(144, 179, 167, 0.4);
    transform: translateY(-1px);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

// Правая сторона с изображением и услугами
const VisualSection = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  height: 300px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(144, 179, 167, 0.12);
  margin-bottom: 2rem;
  
  @media (min-width: 1024px) {
    height: 400px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(184, 196, 168, 0.08) 100%);
    z-index: 1;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.1);
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.85);
    border-color: rgba(144, 179, 167, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(144, 179, 167, 0.12);
  }
`;

const ServiceIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
`;

const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5A6B5D;
  margin: 0 0 0.5rem;
`;

const ServiceDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.75rem;
  color: #7A8A7D;
  margin: 0;
  line-height: 1.4;
`;

// =============================================================================
// SPA HERO КОМПОНЕНТ
// =============================================================================

const SpaHeroSection = () => {
  const { t } = useTranslation();

  // Анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // SPA услуги
  const spaServices = [
    {
      icon: '🌿',
      title: 'Тайский массаж',
      description: 'Традиционные техники релаксации'
    },
    {
      icon: '♨️',
      title: 'Сауна & Хаммам',
      description: 'Паровые и тепловые процедуры'
    },
    {
      icon: '💎',
      title: 'Косметология',
      description: 'Уходовые процедуры для лица'
    },
    {
      icon: '🏛️',
      title: 'Wellness',
      description: 'Комплексные программы здоровья'
    }
  ];

  const stats = [
    { number: '15+', label: 'Специалистов' },
    { number: '30+', label: 'Процедур' },
    { number: '50м²', label: 'Сауна' }
  ];

  return (
    <HeroContainer>
      <FloatingElements>
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(184, 196, 168, 0.08) 100%)"
          style={{ width: '250px', height: '250px', top: '10%', left: '10%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
        />
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(184, 196, 168, 0.06) 0%, rgba(144, 179, 167, 0.06) 100%)"
          style={{ width: '180px', height: '180px', top: '60%', right: '15%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 3 }}
        />
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(144, 179, 167, 0.04) 0%, rgba(255, 255, 255, 0.1) 100%)"
          style={{ width: '120px', height: '120px', bottom: '20%', left: '60%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 6 }}
        />
      </FloatingElements>

      <ContentWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroGrid>
            {/* Основной контент */}
            <MainContent>
              <Badge variants={itemVariants}>
                <SparklesIcon />
                SPA & Wellness
              </Badge>

              <Title variants={itemVariants}>
                Оазис спокойствия
              </Title>

              <Subtitle variants={itemVariants}>
                Центр красоты и восстановления
              </Subtitle>

              <Description variants={itemVariants}>
                Откройте для себя мир гармонии и релаксации. Наши 
                профессиональные мастера создадут для вас атмосферу 
                полного восстановления и обновления.
              </Description>

              <StatsContainer variants={itemVariants}>
                {stats.map((stat, index) => (
                  <StatItem
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatItem>
                ))}
              </StatsContainer>

              <ButtonContainer variants={itemVariants}>
                <Link to="/contacts">
                  <PrimaryButton
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Записаться на процедуру
                    <ArrowRightIcon />
                  </PrimaryButton>
                </Link>

                <SecondaryButton
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <StarIcon />
                  Наши услуги
                </SecondaryButton>
              </ButtonContainer>
            </MainContent>

            {/* Визуальная секция */}
            <VisualSection variants={itemVariants}>
              <ImageContainer
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={spaHeroImage} 
                  alt="SPA процедуры"
                  loading="eager" /* Улучшает производительность за счет приоритетной загрузки */
                />
              </ImageContainer>

              <ServicesGrid>
                {spaServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ServiceIcon>{service.icon}</ServiceIcon>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>
                      {service.description}
                    </ServiceDescription>
                  </ServiceCard>
                ))}
              </ServicesGrid>
            </VisualSection>
          </HeroGrid>
        </motion.div>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default SpaHeroSection;
