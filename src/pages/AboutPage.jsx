import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  SparklesIcon, 
  HeartIcon, 
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  TrophyIcon,
  CalendarDaysIcon,
  MapPinIcon,
  PlayIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// ABOUT PAGE - СОВРЕМЕННЫЙ ДИЗАЙН СПА-КОМПЛЕКСА
// =============================================================================

const AboutPageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme?.colors?.background || '#F5F3F0'};
`;

// Hero Section
const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    rgba(44, 62, 45, 0.9) 0%,
    rgba(90, 107, 93, 0.8) 50%,
    rgba(44, 62, 45, 0.9) 100%
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
    background: 
      radial-gradient(circle at 20% 80%, rgba(144, 179, 167, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(212, 165, 116, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(184, 196, 168, 0.08) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
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
  gap: 3rem;
  align-items: center;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const HeroText = styled(motion.div)`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 1) 0%, 
    rgba(144, 179, 167, 0.9) 50%,
    rgba(212, 165, 116, 0.8) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.02em;
`;

const HeroDescription = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  max-width: 600px;
  
  @media (max-width: 1023px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.4s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors?.secondary || '#D4A574'};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
`;

// Mission Section
const Section = styled.section`
  position: relative;
  padding: 8rem 0;
  overflow: hidden;
`;

const SectionAlt = styled(Section)`
  background: rgba(255, 255, 255, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 70%, rgba(144, 179, 167, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(212, 165, 116, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  
  background: linear-gradient(135deg, 
    ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'} 0%,
    ${({ theme }) => theme?.colors?.primary || '#90B3A7'} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  max-width: 600px;
  margin: 0 auto;
`;

// Values Section
const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.1);
  border-radius: 24px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 50px rgba(144, 179, 167, 0.15);
    border-color: rgba(144, 179, 167, 0.2);
  }
`;

const ValueIcon = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme?.colors?.primary || '#90B3A7'} 0%, 
    ${({ theme }) => theme?.colors?.secondary || '#D4A574'} 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.4s ease;
  
  svg {
    width: 2rem;
    height: 2rem;
  }
  
  ${ValueCard}:hover & {
    transform: scale(1.1) rotate(10deg);
  }
`;

const ValueTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  line-height: 1.6;
  flex: 1;
`;

// Story Section
const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

const StoryContent = styled(motion.div)`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const StoryText = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  margin-bottom: 2rem;
`;

const StoryHighlight = styled.span`
  color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
  font-weight: 600;
`;

const StoryVisual = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  height: 400px;
`;

const StoryImage = styled(motion.div)`
  background: linear-gradient(135deg, 
    rgba(144, 179, 167, 0.1) 0%, 
    rgba(212, 165, 116, 0.1) 100%
  );
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(144, 179, 167, 0.1);
  transition: all 0.4s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(144, 179, 167, 0.15);
  }
  
  &:nth-child(1) {
    grid-row: 1 / 2;
  }
  
  &:nth-child(2) {
    grid-row: 1 / 3;
    align-self: end;
  }
  
  &:nth-child(3) {
    grid-row: 2 / 3;
    align-self: start;
  }
`;

// CTA Section
const CTASection = styled(Section)`
  background: linear-gradient(135deg, 
    rgba(144, 179, 167, 0.9) 0%,
    rgba(212, 165, 116, 0.8) 100%
  );
  color: white;
  text-align: center;
`;

const CTATitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 2rem;
`;

const CTAText = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 0.9);
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
  }
`;

const CTAButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: ${({ $primary }) => $primary ? 
    'rgba(255, 255, 255, 1)' : 
    'transparent'
  };
  color: ${({ $primary }) => $primary ? 
    '#2C3E2D' : 
    'white'
  };
  border: 2px solid ${({ $primary }) => $primary ? 
    'transparent' : 
    'rgba(255, 255, 255, 0.3)'
  };
  border-radius: 60px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    background: ${({ $primary }) => $primary ? 
      'rgba(255, 255, 255, 0.9)' : 
      'rgba(255, 255, 255, 0.1)'
    };
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: ${({ $primary }) => $primary ? 
      'translateX(4px)' : 
      'scale(1.1)'
    };
  }
`;

// Floating decorations
const FloatingDecoration = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${({ $variant }) => {
    switch($variant) {
      case 'secondary':
        return 'linear-gradient(135deg, rgba(212, 165, 116, 0.08) 0%, rgba(184, 196, 168, 0.06) 100%)';
      case 'tertiary':
        return 'linear-gradient(135deg, rgba(184, 196, 168, 0.08) 0%, rgba(144, 179, 167, 0.06) 100%)';
      default:
        return 'linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(212, 165, 116, 0.06) 100%)';
    }
  }};
  filter: blur(60px);
  z-index: 2;
  pointer-events: none;
  
  &.deco-1 {
    top: 10%;
    left: 5%;
  }
  
  &.deco-2 {
    top: 60%;
    right: 10%;
  }
  
  &.deco-3 {
    bottom: 20%;
    left: 20%;
  }
`;

// =============================================================================
// ABOUT PAGE COMPONENT
// =============================================================================

const AboutPage = () => {
  const { t } = useTranslation();
  const [hoveredValue, setHoveredValue] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const stats = [
    { number: '50м²', label: 'Самая большая сауна' },
    { number: '5', label: 'Кухонь мира' },
    { number: '70+', label: 'Тренажеров' },
    { number: '25м', label: 'Олимпийский бассейн' }
  ];

  const values = [
    {
      icon: <HeartIcon />,
      title: 'Забота о здоровье',
      description: 'Мы создаем пространство для физического и душевного восстановления, где каждая деталь продумана для вашего комфорта.'
    },
    {
      icon: <ShieldCheckIcon />,
      title: 'Премиальное качество',
      description: 'Используем только лучшее оборудование и материалы, предоставляем услуги мирового уровня для достижения максимального результата.'
    },
    {
      icon: <UserGroupIcon />,
      title: 'Индивидуальный подход',
      description: 'Каждый гость уникален. Мы разрабатываем персональные программы, учитывая ваши потребности и цели.'
    },
    {
      icon: <GlobeAltIcon />,
      title: 'Мультикультурность',
      description: 'Объединяем лучшие практики wellness из разных стран: тайские, турецкие, скандинавские и современные методики.'
    },
    {
      icon: <SparklesIcon />,
      title: 'Инновации',
      description: 'Постоянно внедряем новые технологии и методы оздоровления, чтобы предложить вам самые эффективные решения.'
    },
    {
      icon: <AcademicCapIcon />,
      title: 'Профессионализм',
      description: 'Наша команда - это сертифицированные специалисты с многолетним опытом работы в индустрии красоты и здоровья.'
    }
  ];

  return (
    <AboutPageContainer ref={containerRef}>
      {/* Floating Decorations */}
      <FloatingDecoration 
        className="deco-1"
        $variant="primary"
        variants={floatVariants}
        animate="animate"
      />
      <FloatingDecoration 
        className="deco-2"
        $variant="secondary"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: '-2s' }}
      />
      <FloatingDecoration 
        className="deco-3"
        $variant="tertiary"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: '-4s' }}
      />

      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroGrid>
              <HeroText>
                <HeroTitle variants={itemVariants}>
                  О KAIF
                </HeroTitle>
                
                <HeroSubtitle variants={itemVariants}>
                  Jungle Club & Spa
                </HeroSubtitle>
                
                <HeroDescription variants={itemVariants}>
                  Мы создали уникальное пространство на Пхукете, где премиальный сервис встречается с тайским гостеприимством. 
                  KAIF - это не просто спа-комплекс, это философия здорового образа жизни и гармонии.
                </HeroDescription>
              </HeroText>

              <HeroStats variants={itemVariants}>
                {stats.map((stat, index) => (
                  <StatCard
                    key={index}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatCard>
                ))}
              </HeroStats>
            </HeroGrid>
          </motion.div>
        </HeroContent>
      </HeroSection>

      {/* Our Story Section */}
      <Section>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <StoryGrid>
              <StoryContent>
                <motion.h2
                  variants={itemVariants}
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 700,
                    marginBottom: '2rem',
                    background: 'linear-gradient(135deg, #2C3E2D 0%, #90B3A7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Наша история
                </motion.h2>
                
                <StoryText variants={itemVariants}>
                  В 2020 году мы мечтали создать место, где люди могли бы <StoryHighlight>восстановить баланс</StoryHighlight> 
                  между работой и отдыхом, найти гармонию между телом и душой.
                </StoryText>
                
                <StoryText variants={itemVariants}>
                  Сегодня KAIF объединяет <StoryHighlight>лучшие мировые оздоровительные практики</StoryHighlight> 
                  с уникальной атмосферой тропического острова. Мы создали пространство, где каждый найдет 
                  свой путь к здоровью и красоте.
                </StoryText>
                
                <StoryText variants={itemVariants}>
                  От традиционных тайских техник до современных фитнес-программ - мы предлагаем 
                  <StoryHighlight> комплексный подход к оздоровлению</StoryHighlight>, который подходит каждому гостю.
                </StoryText>
              </StoryContent>

              <StoryVisual>
                <StoryImage 
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  🧘‍♀️
                </StoryImage>
                <StoryImage 
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: -2,
                    transition: { duration: 0.3 }
                  }}
                >
                  🌿
                </StoryImage>
                <StoryImage 
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  💆‍♀️
                </StoryImage>
              </StoryVisual>
            </StoryGrid>
          </motion.div>
        </Container>
      </Section>

      {/* Values Section */}
      <SectionAlt>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeader>
              <SectionTitle variants={itemVariants}>
                Наши ценности
              </SectionTitle>
              <SectionSubtitle variants={itemVariants}>
                Принципы, которые определяют каждый аспект нашей работы и создают уникальный опыт KAIF
              </SectionSubtitle>
            </SectionHeader>

            <ValuesGrid>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <ValueCard
                    onMouseEnter={() => setHoveredValue(index)}
                    onMouseLeave={() => setHoveredValue(null)}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <ValueIcon>
                      {value.icon}
                    </ValueIcon>
                    <ValueTitle>{value.title}</ValueTitle>
                    <ValueDescription>{value.description}</ValueDescription>
                  </ValueCard>
                </motion.div>
              ))}
            </ValuesGrid>
          </motion.div>
        </Container>
      </SectionAlt>

      {/* CTA Section */}
      <CTASection>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <CTATitle variants={itemVariants}>
              Готовы начать свое оздоровительное путешествие?
            </CTATitle>
            
            <CTAText variants={itemVariants}>
              Присоединяйтесь к тысячам гостей, которые уже открыли для себя уникальный мир KAIF. 
              Позвольте нам позаботиться о вашем здоровье и красоте.
            </CTAText>
            
            <CTAButtons variants={itemVariants}>
              <Link to="/spa">
                <CTAButton
                  $primary
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SparklesIcon />
                  Забронировать визит
                </CTAButton>
              </Link>
              
              <CTAButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PlayIcon />
                Виртуальная экскурсия
              </CTAButton>
            </CTAButtons>
          </motion.div>
        </Container>
      </CTASection>
    </AboutPageContainer>
  );
};

export default AboutPage;
