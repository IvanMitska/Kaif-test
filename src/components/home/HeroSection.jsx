import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronDownIcon, 
  PlayIcon, 
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// СОВРЕМЕННЫЙ МИНИМАЛИСТИЧНЫЙ HERO
// =============================================================================

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    #0f172a 0%,
    #1e293b 100%
  );
  color: white;
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
    background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    z-index: 1;
  }
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
    grid-template-columns: 1.2fr 0.8fr;
    gap: 6rem;
  }
`;

const MainContent = styled(motion.div)`
  text-align: left;
  max-width: 600px;
  
  @media (max-width: 1023px) {
    text-align: center;
    margin: 0 auto;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: white;
  letter-spacing: -0.02em;
`;

const Subtitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Description = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.125rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 3rem;
  max-width: 500px;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
  
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
  padding: 1rem 2rem;
  background: white;
  color: #0f172a;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
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
  padding: 1rem 2rem;
  background: transparent;
  color: white;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
`;

// Правая сторона с услугами
const ServicesSection = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const ServiceBadge = styled.span`
  padding: 0.25rem 0.75rem;
  background: ${({ $type }) => 
    $type === 'energy' 
      ? 'rgba(255, 255, 255, 0.15)' 
      : 'rgba(255, 255, 255, 0.08)'
  };
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ServiceDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.4;
`;

// Скролл индикатор
const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  z-index: 10;
`;

const ScrollText = styled.span`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ScrollIcon = styled(motion.div)`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  
  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

// =============================================================================
// HERO КОМПОНЕНТ
// =============================================================================

const HeroSection = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Услуги
  const services = [
    {
      title: 'Фитнес-центр',
      description: '70+ тренажеров, кардио-зона, персональные тренировки',
      type: 'energy'
    },
    {
      title: 'Боевые искусства',
      description: 'MMA, бокс, муай-тай с профессиональными тренерами',
      type: 'energy'
    },
    {
      title: 'Бассейн 25м',
      description: 'Олимпийский стандарт с подогревом воды',
      type: 'energy'
    },
    {
      title: 'СПА-центр',
      description: 'Тайский массаж, ароматерапия, релаксация',
      type: 'relax'
    },
    {
      title: 'Ресторан',
      description: '5 кухонь мира с панорамной террасой',
      type: 'relax'
    },
    {
      title: 'Салон красоты',
      description: 'Косметология, уходы, парикмахерские услуги',
      type: 'relax'
    }
  ];

  const stats = [
    { number: '7', label: 'Зон отдыха' },
    { number: '50м²', label: 'Сауна' },
    { number: '70+', label: 'Тренажеров' }
  ];

  return (
    <HeroContainer>
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
                <StarIcon />
                Премиальный комплекс на Пхукете
              </Badge>

              <Title variants={itemVariants}>
                KAIF
              </Title>

              <Subtitle variants={itemVariants}>
                Многофункциональный комплекс
              </Subtitle>

              <Description variants={itemVariants}>
                Современное пространство, объединяющее фитнес, релаксацию, 
                гастрономию и красоту в одном месте.
              </Description>

              <ButtonContainer variants={itemVariants}>
                <Link to="/spa">
                  <PrimaryButton
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Забронировать
                    <ArrowRightIcon />
                  </PrimaryButton>
                </Link>

                <SecondaryButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PlayIcon />
                  Виртуальный тур
                </SecondaryButton>
              </ButtonContainer>

              <StatsContainer variants={itemVariants}>
                {stats.map((stat, index) => (
                  <StatItem key={index}>
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatItem>
                ))}
              </StatsContainer>
            </MainContent>

            {/* Услуги */}
            <ServicesSection variants={itemVariants}>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <ServiceHeader>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceBadge $type={service.type}>
                      {service.type === 'energy' ? 'Активность' : 'Релаксация'}
                    </ServiceBadge>
                  </ServiceHeader>
                  <ServiceDescription>
                    {service.description}
                  </ServiceDescription>
                </ServiceCard>
              ))}
            </ServicesSection>
          </HeroGrid>
        </motion.div>
      </ContentWrapper>

      {/* Скролл индикатор */}
      <ScrollIndicator
        onClick={handleScrollDown}
        whileHover={{ scale: 1.05 }}
        style={{ y }}
      >
        <ScrollText>Прокрутить</ScrollText>
        <ScrollIcon
          animate={{
            y: [0, 3, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <ChevronDownIcon />
        </ScrollIcon>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;
