import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// =============================================================================
// ABOUT PAGE - СОВРЕМЕННЫЙ ДИЗАЙН СПА-КОМПЛЕКСА KAIF
// =============================================================================

const AboutPageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme?.colors?.background || '#F5F3F0'};
  overflow-x: hidden;
`;

// Hero Section
const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
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
// Standard Sections
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
  max-width: 800px;
  margin: 0 auto;
`;

// Миссия и ценности
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

// Объекты и услуги
const FacilitiesSection = styled(Section)`
  position: relative;
  padding: 8rem 0;
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FacilityCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(144, 179, 167, 0.15);
  }
`;

const FacilityImage = styled.div`
  height: 220px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${FacilityCard}:hover &::after {
    opacity: 1;
  }
`;

const FacilityContent = styled.div`
  padding: 1.5rem;
`;

const FacilityTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
`;

const FacilityDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  margin-bottom: 1rem;
`;

const FacilityStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const FacilityStat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(144, 179, 167, 0.1);
  border-radius: 30px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.85rem;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  
  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
  }
`;
// FAQ секция
const FAQSection = styled(SectionAlt)`
  position: relative;
  padding: 8rem 0;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto 0;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border-radius: 12px;
  background: white;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 25px rgba(144, 179, 167, 0.1);
  }
`;

const FAQHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    transition: transform 0.3s ease;
    flex-shrink: 0;
    margin-left: 1rem;
  }
`;

const FAQContent = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
`;

// CTA Section
const CTASection = styled(Section)`
  background: linear-gradient(135deg, 
    rgba(144, 179, 167, 0.9) 0%,
    rgba(212, 165, 116, 0.8) 100%
  );
  color: white;
  text-align: center;
  padding: 6rem 0;
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
`;

// =============================================================================
// ABOUT PAGE COMPONENT
// =============================================================================

const AboutPage = () => {
  const { t } = useTranslation();
  const [activeQuestion, setActiveQuestion] = useState(null);
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

  // Данные для страницы
  const stats = [
    { number: '50м²', label: 'Самая большая сауна' },
    { number: '5', label: 'Кухонь мира' },
    { number: '70+', label: 'Тренажеров' },
    { number: '25м', label: 'Олимпийский бассейн' }
  ];

  const values = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>,
      title: 'Забота о здоровье',
      description: 'Мы создаем пространство для физического и душевного восстановления, где каждая деталь продумана для вашего комфорта.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>,
      title: 'Премиальное качество',
      description: 'Используем только лучшее оборудование и материалы, предоставляем услуги мирового уровня для достижения максимального результата.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
      </svg>,
      title: 'Индивидуальный подход',
      description: 'Каждый гость уникален. Мы разрабатываем персональные программы, учитывая ваши потребности и цели.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
      </svg>,
      title: 'Мультикультурность',
      description: 'Объединяем лучшие практики wellness из разных стран: тайские, турецкие, скандинавские и современные методики.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
      </svg>,
      title: 'Инновации',
      description: 'Постоянно внедряем новые технологии и методы оздоровления, чтобы предложить вам самые эффективные решения.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
        <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
      </svg>,
      title: 'Профессионализм',
      description: 'Наша команда - это сертифицированные специалисты с многолетним опытом работы в индустрии красоты и здоровья.'
    }
  ];
  const facilities = [
    {
      title: 'СПА комплекс',
      description: 'Самая большая сауна в Таиланде, хаммам, массажные кабинеты и процедурные комнаты.',
      stats: ['50м² сауна', 'Тайский хаммам', 'Турецкий хаммам'],
      image: 'spa-image.jpg'
    },
    {
      title: 'Тренажерный зал',
      description: 'Современный фитнес-центр с более чем 70 тренажерами и оборудованием для любого типа тренировок.',
      stats: ['70+ тренажеров', 'Персональные тренеры', 'Кардио-зона'],
      image: 'gym-image.jpg'
    },
    {
      title: 'Ресторан',
      description: 'Изысканная кухня, объединяющая 5 кулинарных традиций мира, с акцентом на здоровое и вкусное питание.',
      stats: ['5 кухонь мира', 'Здоровое меню', 'Авторские коктейли'],
      image: 'restaurant-image.jpg'
    },
    {
      title: 'Бассейн',
      description: 'Плавательная дорожка олимпийского стандарта и зона отдыха вокруг бассейна.',
      stats: ['25м длина', 'Подогрев воды', 'Шезлонги'],
      image: 'pool-image.jpg'
    },
    {
      title: 'Салон красоты',
      description: 'Салон красоты полного цикла с услугами для мужчин и женщин, современное оборудование и профессиональные мастера.',
      stats: ['Косметология', 'Парикмахерская', 'Маникюр/Педикюр'],
      image: 'beauty-image.jpg'
    },
    {
      title: 'Бойцовский клуб',
      description: 'Профессиональное оборудование для тренировок по боксу, муай-тай и другим боевым искусствам.',
      stats: ['Боксерский ринг', 'Груши', 'Тренировки с тренером'],
      image: 'fightclub-image.jpg'
    }
  ];

  const faqs = [
    {
      question: 'Какие услуги входят в стоимость дневного пропуска?',
      answer: 'В стоимость дневного пропуска (390 THB) входит доступ к тренажерному залу, бассейну, ледяной купели и сауне. Дополнительные услуги, такие как массаж, спа-процедуры и ресторан, оплачиваются отдельно.'
    },
    {
      question: 'Как забронировать спа-процедуру или массаж?',
      answer: 'Вы можете забронировать спа-процедуру или массаж через WhatsApp по номеру +66624805877, или обратившись к администратору на ресепшн. Рекомендуем бронировать заранее, особенно в высокий сезон.'
    },
    {
      question: 'Есть ли в комплексе детская комната?',
      answer: 'Да, в KAIF есть детская комната для детей от 3 до 14 лет. Мы предоставляем услуги присмотра за детьми, пока вы наслаждаетесь нашими услугами. Стоимость услуги можно уточнить у администратора.'
    },
    {
      question: 'Какие виды массажа вы предлагаете?',
      answer: 'Мы предлагаем различные виды массажа, включая традиционный тайский массаж, oil-массаж, массаж горячими камнями, спортивный массаж, антицеллюлитный массаж и фут-массаж. Полный прайс доступен на нашем сайте.'
    },
    {
      question: 'Возможно ли арендовать студию для занятий йогой или танцами?',
      answer: 'Да, наша танцевальная и йога студия доступна для аренды. Вы можете организовать групповые или индивидуальные занятия. Для уточнения стоимости и бронирования обратитесь к администратору.'
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <AboutPageContainer ref={containerRef}>
      {/* Плавающие декорации */}
      <FloatingDecoration 
        className="deco-1"
        $variant="primary"
        variants={floatVariants}
        animate="animate"
        style={{ top: '10%', left: '5%' }}
      />
      <FloatingDecoration 
        className="deco-2"
        $variant="secondary"
        variants={floatVariants}
        animate="animate"
        style={{ top: '60%', right: '10%', animationDelay: '-2s' }}
      />
      <FloatingDecoration 
        className="deco-3"
        $variant="tertiary"
        variants={floatVariants}
        animate="animate"
        style={{ bottom: '20%', left: '20%', animationDelay: '-4s' }}
      />

      {/* Секция Hero */}
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
                  Мы создали уникальное пространство на Пхукете, где жизнь становится ярче. 
                  Наша миссия – сделать отдых и заботу о себе не обязанностью, а удовольствием.
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

      {/* Секция миссии */}
      <Section>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeader>
              <SectionTitle variants={itemVariants}>
                Наша миссия
              </SectionTitle>
              <SectionSubtitle variants={itemVariants}>
                KAIF PHUKET – это место, где вы восстанавливаете силы, заряжаетесь энергией и 
                наслаждаетесь каждым моментом. Всё здесь создано так, чтобы вам хотелось 
                вернуться: тренировки, которые вдохновляют, отдых, который наполняет, и 
                атмосфера, которая дарит настоящий кайф. Мы верим, что гармония – не роскошь, 
                а необходимость, и делаем её доступной для вас.
              </SectionSubtitle>
            </SectionHeader>
          </motion.div>
        </Container>
      </Section>

      {/* Секция ценностей */}
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

      {/* Секция объектов */}
      <FacilitiesSection>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeader>
              <SectionTitle variants={itemVariants}>
                Наши объекты
              </SectionTitle>
              <SectionSubtitle variants={itemVariants}>
                KAIF объединяет премиальные услуги в одном месте для вашего комфорта и удовольствия
              </SectionSubtitle>
            </SectionHeader>

            <FacilitiesGrid>
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <FacilityCard
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <FacilityImage 
                      style={{ 
                        backgroundColor: '#90B3A7',
                        backgroundImage: `url(/assets/images/${facility.image})`,
                        backgroundSize: 'cover' 
                      }}
                    />
                    <FacilityContent>
                      <FacilityTitle>{facility.title}</FacilityTitle>
                      <FacilityDescription>{facility.description}</FacilityDescription>
                      <FacilityStats>
                        {facility.stats.map((stat, i) => (
                          <FacilityStat key={i}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                            </svg>
                            {stat}
                          </FacilityStat>
                        ))}
                      </FacilityStats>
                    </FacilityContent>
                  </FacilityCard>
                </motion.div>
              ))}
            </FacilitiesGrid>
          </motion.div>
        </Container>
      </FacilitiesSection>

      {/* Секция FAQ */}
      <FAQSection>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeader>
              <SectionTitle variants={itemVariants}>
                Часто задаваемые вопросы
              </SectionTitle>
              <SectionSubtitle variants={itemVariants}>
                Ответы на популярные вопросы о KAIF Jungle Club & Spa
              </SectionSubtitle>
            </SectionHeader>

            <FAQContainer>
              {faqs.map((faq, index) => (
                <FAQItem key={index}>
                  <FAQHeader
                    onClick={() => toggleQuestion(index)}
                  >
                    {faq.question}
                    {activeQuestion === index ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                      </svg>
                    )}
                  </FAQHeader>
                  <AnimatePresence>
                    {activeQuestion === index && (
                      <FAQContent
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </FAQContent>
                    )}
                  </AnimatePresence>
                </FAQItem>
              ))}
            </FAQContainer>
          </motion.div>
        </Container>
      </FAQSection>

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
                  as="div"
                  $primary
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  Забронировать визит
                </CTAButton>
              </Link>
              
              <Link to="/contacts">
                <CTAButton
                  as="div"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Связаться с нами
                </CTAButton>
              </Link>
            </CTAButtons>
          </motion.div>
        </Container>
      </CTASection>
    </AboutPageContainer>
  );
};

export default AboutPage;
