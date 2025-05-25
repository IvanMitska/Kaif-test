import styled from 'styled-components';
import { motion } from 'framer-motion';

// Современная героическая секция
export const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  background-color: #000;
  overflow: hidden;
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://images.unsplash.com/photo-1601397922721-4292554b5e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  position: relative;
  z-index: 2;
  
  @media (min-width: 1024px) {
    grid-template-columns: 6fr 5fr;
    gap: 5rem;
  }
`;

export const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #FFFFFF;
  text-align: left;
`;

export const HeroTitle = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -12px;
    width: 80px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 3px;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  max-width: 540px;
  font-weight: 300;
`;

export const HeroStatsContainer = styled(motion.div)`
  display: flex;
  gap: 3.5rem;
  margin-bottom: 3.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const HeroStat = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -12px;
    width: 40px;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 3px;
    opacity: 0.7;
  }
`;

export const HeroStatNumber = styled.span`
  font-size: 2.8rem;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.heading};
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

export const HeroStatLabel = styled.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const HeroButtonsContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const HeroImageContainer = styled(motion.div)`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const HeroImage = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`;
