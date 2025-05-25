import styled from 'styled-components';
import { motion } from 'framer-motion';

// Карточки спортивных объектов
export const SportFacility = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 6rem 0;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  &:nth-child(even) {
    grid-template-columns: 1fr 1fr;
    
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
    
    .facility-content {
      order: 2;
      
      @media (max-width: 992px) {
        order: 1;
      }
    }
    
    .facility-gallery {
      order: 1;
      
      @media (max-width: 992px) {
        order: 2;
      }
    }
  }
  
  &:first-child {
    margin-top: 0;
  }
`;

export const FacilityTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 0.8rem;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 2px;
  }
`;

export const FacilityDescription = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 2rem;
  
  p {
    margin-bottom: 1rem;
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

export const FacilityGallery = styled.div`
  position: relative;
  direction: ltr;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 230px);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 180px);
  }
`;

export const GalleryImage = styled(motion.div)`
  height: 100%;
  background-color: ${props => props.theme.colors.secondary};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%);
    opacity: 0.7;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: scale(1.03);
    box-shadow: ${props => props.theme.shadows.xl};
    
    &::after {
      opacity: 1;
    }
  }
  
  &:first-child {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`;

export const FacilityFeature = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.colors.primary};
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
  
  span {
    font-size: 1rem;
    color: ${props => props.theme.colors.text.secondary};
  }
`;

export const FacilityMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const FacilityMetaItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.colors.primary};
    margin-right: 0.75rem;
  }
  
  span {
    font-size: 0.95rem;
    color: ${props => props.theme.colors.text.secondary};
  }
`;
