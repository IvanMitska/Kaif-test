import styled from 'styled-components';
import { motion } from 'framer-motion';

// Фотогалерея и расписание
export const PhotoGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const PhotoCard = styled(motion.div)`
  height: 280px;
  background-color: ${props => props.theme.colors.surface};
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: ${props => props.theme.shadows.md};
  transition: all 0.3s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
  
  .photo-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    color: white;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
    
    img {
      transform: scale(1.05);
    }
    
    .photo-overlay {
      padding-bottom: 2rem;
    }
  }
  
  .photo-title {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  
  .photo-subtitle {
    font-size: 0.85rem;
    opacity: 0.8;
  }
`;

// Заглушка для фотографий
export const PhotoPlaceholder = styled(motion.div)`
  height: 280px;
  background-color: ${props => props.theme.colors.secondary};
  background-opacity: 0.1;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.95rem;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;
