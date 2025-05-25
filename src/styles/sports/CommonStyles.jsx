import styled from 'styled-components';
import { motion } from 'framer-motion';

// Основные стилизованные компоненты
export const PageContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${props => props.theme.fonts.primary};
  overflow-x: hidden;
`;

export const Section = styled.section`
  padding: 9rem 2rem;
  background-color: ${props => props.bgColor || props.theme.colors.background};
  position: relative;
  overflow: hidden;
  
  &:nth-child(even) {
    background-color: ${props => props.bgColor || props.theme.colors.surface};
  }
`;

export const SectionTag = styled(motion.span)`
  display: inline-block;
  background-color: rgba(210, 155, 132, 0.1);
  color: ${props => props.theme.colors.primary};
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  color: ${props => props.theme.colors.text.primary};
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 700;
  
  span {
    color: ${props => props.theme.colors.primary};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.15em;
      background-color: ${props => props.theme.colors.primary};
      opacity: 0.3;
      border-radius: 2px;
    }
  }
`;

export const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${props => props.theme.colors.text.secondary};
  text-align: center;
  max-width: 800px;
  margin: 2.5rem auto 4.5rem auto;
  line-height: 1.8;
  font-weight: 300;
`;

export const ContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const BackgroundShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}10, ${props => props.theme.colors.primary}30);
  filter: blur(60px);
  z-index: 1;
`;

export const TopRightShape = styled(BackgroundShape)`
  width: 500px;
  height: 500px;
  top: -100px;
  right: -100px;
`;

export const BottomLeftShape = styled(BackgroundShape)`
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: -200px;
`;

export const BottomRightShape = styled(BackgroundShape)`
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -150px;
`;

// Кнопка бронирования
export const BookButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(210, 155, 132, 0.25);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: width 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 6px 20px rgba(210, 155, 132, 0.35);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;
