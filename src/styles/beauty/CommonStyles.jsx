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
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  
  &:nth-child(even) {
    background-color: ${props => props.bgColor || props.theme.colors.surface};
  }
`;

export const SectionTag = styled(motion.span)`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: rgba(210, 155, 132, 0.1);
  color: ${props => props.theme.colors.primary};
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.heading || '"Playfair Display", serif'};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

export const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text.secondary};
  max-width: 700px;
  margin: 0 auto 3rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

export const PrimaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-weight: 600;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0 10px 25px rgba(210, 155, 132, 0.3);
  transition: all 0.3s ease;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

export const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: transparent;
  color: white;
  font-weight: 600;
  padding: 1.15rem 2.45rem;
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
