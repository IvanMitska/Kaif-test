import React, { useRef, useEffect, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  SparklesIcon,
  StarIcon,
  HeartIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/solid';

// Используем коллекцию премиальных изображений для многослойного коллажа
const spaMainImage = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85'; // Главное изображение спа процедуры
const spaDetailImage1 = 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Изображение с маслами и цветами
const spaDetailImage2 = 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Изображение релаксации
const spaDetailImage3 = 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Декоративное изображение с камнями

// =============================================================================
// СОВРЕМЕННЫЙ НЕЖНЫЙ SPA & BEAUTY HERO
// =============================================================================

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    #fcfaf8 0%,
    #f7f4f0 60%,
    #f4f0eb 100%
  );
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(144, 179, 167, 0.07) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(212, 165, 116, 0.07) 0%, transparent 50%),
      radial-gradient(ellipse at 60% 40%, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
    z-index: 1;
    pointer-events: none;
  }
`;

// Убираем шум для улучшения производительности
const Noise = styled.div`
  display: none;
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  pointer-events: none;
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.$color};
  filter: blur(${props => props.$blur || '30px'});
  opacity: ${props => props.$opacity || 0.25};
  mix-blend-mode: ${props => props.$blendMode || 'normal'};
  will-change: transform;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: ${props => props.$gradient || 'linear-gradient(135deg, rgba(144, 179, 167, 0.2) 0%, rgba(144, 179, 167, 0.01) 100%)'};
  border-radius: ${props => props.$borderRadius || '30% 70% 70% 30% / 30% 30% 70% 70%'};
  filter: blur(${props => props.$blur || '0px'});
  opacity: ${props => props.$opacity || 0.1};
  z-index: ${props => props.$zIndex || 1};
  mix-blend-mode: ${props => props.$blendMode || 'normal'};
  transform-origin: center center;
  box-shadow: ${props => props.$shadow || 'none'};
  border: ${props => props.$border || 'none'};
  overflow: ${props => props.$overflow || 'visible'};
  will-change: transform;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  
  @media (min-width: 1280px) {
    padding: 0 3rem;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (min-width: 1024px) {
    grid-template-columns: 0.9fr 1.1fr;
    gap: 2rem;
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: 0.85fr 1.15fr;
    gap: 4rem;
  }
`;

const MainContent = styled(motion.div)`
  position: relative;
  text-align: left;
  max-width: 600px;
  z-index: 10;
  
  @media (max-width: 1023px) {
    text-align: center;
    margin: 0 auto;
    padding-top: 2rem;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.12) 0%, rgba(144, 179, 167, 0.15) 100%);
  border: 1px solid rgba(212, 165, 116, 0.2);
  border-radius: 30px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  font-weight: 500;
  color: #8A6C55;
  backdrop-filter: blur(20px);
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(212, 165, 116, 0.08);
  letter-spacing: 0.03em;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #D4A574;
  }
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.75rem, 7vw, 4.5rem);
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, 
    #5A6B5D 0%, 
    #7A8A7D 40%, 
    #90B3A7 70%, 
    #D4A574 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
  text-shadow: 0px 10px 30px rgba(90, 107, 93, 0.1);
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
  padding: 1.1rem 2.75rem;
  background: linear-gradient(135deg, #D4A574 0%, #90B3A7 100%);
  color: white;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  box-shadow: 0 10px 30px rgba(212, 165, 116, 0.3), 0 5px 15px rgba(144, 179, 167, 0.2);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.02em;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%);
    transition: all 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(212, 165, 116, 0.4), 0 8px 20px rgba(144, 179, 167, 0.2);
  }
  
  &:hover::before {
    transform: translateY(100%);
  }
  
  svg {
    width: 1.1rem;
    height: 1.1rem;
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
  height: 400px;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(144, 179, 167, 0.15), 0 10px 30px rgba(212, 165, 116, 0.1);
  margin-bottom: 2rem;
  
  @media (min-width: 1024px) {
    height: 480px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1);
    filter: brightness(1.03) saturate(1.05);
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
    background: linear-gradient(135deg, 
      rgba(212, 165, 116, 0.05) 0%, 
      rgba(144, 179, 167, 0.05) 50%,
      rgba(184, 196, 168, 0.05) 100%
    );
    z-index: 1;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(212, 165, 116, 0.1);
  border-radius: 24px;
  padding: 1.75rem 1.5rem;
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  cursor: pointer;
  text-align: center;
  box-shadow: 0 5px 15px rgba(144, 179, 167, 0.05);
  
  &:hover {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(212, 165, 116, 0.25);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(144, 179, 167, 0.1), 0 10px 20px rgba(212, 165, 116, 0.05);
  }
`;

const ServiceIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 auto 1.25rem;
  background: linear-gradient(135deg, #D4A574 0%, #90B3A7 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 10px 25px rgba(212, 165, 116, 0.2);
  transition: all 0.4s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 35px rgba(212, 165, 116, 0.25);
  }
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

  // Упрощенные и оптимизированные анимации
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }), []);

  const floatVariants = useMemo(() => ({
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }), []);

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
      icon: '💆‍♀️',
      title: 'Косметология',
      description: 'Премиальные уходовые процедуры'
    },
    {
      icon: '🧘‍♀️',
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
      {/* Уменьшаем количество анимированных элементов */}
      <FloatingElements>
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(184, 196, 168, 0.05) 100%)"
          style={{ width: '200px', height: '200px', top: '15%', left: '10%' }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(184, 196, 168, 0.04) 0%, rgba(144, 179, 167, 0.04) 100%)"
          style={{ width: '150px', height: '150px', top: '60%', right: '15%' }}
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'relative' }}
              >
                <ImageContainer
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={spaMainImage} 
                    alt="SPA и релаксация"
                    loading="eager"
                  />
                </ImageContainer>
                
                {/* Малое декоративное изображение - новый элемент */}
                {/* Показываем детальное изображение только на больших экранах для оптимизации */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '-10%',
                    width: '40%',
                    height: '180px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(144, 179, 167, 0.15)',
                    zIndex: 5,
                    display: 'none'
                  }}
                  css={`
                    @media (min-width: 1280px) {
                      display: block !important;
                    }
                  `}
                >
                  <img 
                    src={spaDetailImage1} 
                    alt="Детали SPA"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.05) saturate(1.05)'
                    }}
                  />
                </motion.div>
              </motion.div>

              <ServicesGrid>
                {spaServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ delay: index * 0.05 }}
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
