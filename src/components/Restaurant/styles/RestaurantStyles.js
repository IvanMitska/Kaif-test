import styled from 'styled-components';
import { motion } from 'framer-motion';

// Контейнер для страницы ресторана
export const RestaurantContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${props => props.theme.fonts.primary};
  overflow-x: hidden;
`;

// Компоненты для секции меню
export const MenuTabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const MenuTab = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: ${props => props.active ? '#D29B84' : '#E0E8E1'};
  color: ${props => props.active ? 'white' : '#333333'};
  font-weight: ${props => props.active ? '600' : '500'};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    background-color: ${props => props.active ? '#D29B84' : '#d0d8d1'};
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: none;
  }
`;

export const MenuGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const MenuCard = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const MenuCardImage = styled.div`
  height: 200px;
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
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${MenuCard}:hover &::after {
    opacity: 1;
  }
`;

export const MenuCardContent = styled.div`
  padding: 1.5rem;
`;

export const MenuCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
  color: #333333;
`;

export const MenuCardDescription = styled.p`
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const MenuCardPrice = styled.div`
  font-weight: 600;
  color: #D29B84;
  font-size: 1.1rem;
`;

export const MenuCardTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const MenuCardTag = styled.span`
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  background-color: #f0f0f0;
  border-radius: 20px;
  color: #666666;
`;

// Модальное окно для детального просмотра блюда
export const DishModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
`;

export const DishModalContent = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const DishModalImage = styled.div`
  height: 300px;
  background-size: cover;
  background-position: center;
  
  @media (min-width: 768px) {
    height: 100%;
  }
`;

export const DishModalDetails = styled.div`
  padding: 2rem;
  overflow-y: auto;
`;

export const DishModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 5;
  
  &:hover {
    transform: rotate(90deg);
    background-color: #f0f0f0;
  }
`;

export const DishModalTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  color: #333333;
`;

export const DishModalDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const DishModalPrice = styled.div`
  font-weight: 600;
  color: #D29B84;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

export const DishModalSection = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333333;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    
    li {
      margin-bottom: 0.5rem;
      color: #666666;
    }
  }
`;

export const DishModalButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background-color: #D29B84;
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #c48b74;
  }
`;

// Компоненты Hero секции
export const HeroSection = styled.section`
  height: 100vh;
  min-height: 700px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  padding: 0;
  margin: 0;
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
  z-index: 5;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  color: white;
`;

export const HeroButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #c48b74;
    transform: translateY(-3px);
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
