import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  min-height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #111;
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
    background-image: url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    filter: brightness(0.6);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%);
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
    grid-template-columns: 7fr 5fr;
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

export const HeroTag = styled(motion.span)`
  display: inline-block;
  background-color: rgba(210, 155, 132, 0.2);
  color: ${props => props.theme.colors.primary};
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(210, 155, 132, 0.3);
`;

export const HeroTitle = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  position: relative;
  
  span {
    color: ${props => props.theme.colors.primary};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.2em;
      background-color: ${props => props.theme.colors.primary};
      opacity: 0.3;
      border-radius: 2px;
    }
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  max-width: 580px;
  font-weight: 300;
`;

// Кнопки для героической секции
export const HeroCTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
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
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 15px rgba(210, 155, 132, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
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
    box-shadow: 0 8px 25px rgba(210, 155, 132, 0.4);
    transform: translateY(-3px);
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

export const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: transparent;
  color: white;
  font-weight: 600;
  padding: 1.15rem 2.45rem;
  border-radius: 50px;
  cursor: pointer;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.05);
    transition: width 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-3px);
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

export const HeroStatsContainer = styled(motion.div)`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const HeroStat = styled(motion.div)`
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
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

// Изображение для героической секции
export const HeroImageContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  
  @media (max-width: 1023px) {
    justify-content: center;
  }
`;

export const HeroImage = styled(motion.img)`
  max-width: 100%;
  height: auto;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;
