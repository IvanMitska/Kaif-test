import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronRightIcon, PhoneIcon } from '@heroicons/react/24/solid';

// =============================================================================
// СЕКЦИЯ БРОНИРОВАНИЯ SPA
// =============================================================================

// Секция бронирования (CTA)
const BookingSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, 
    #ede9e4 0%,
    #e6e2dc 50%,
    #ddd8d0 100%
  );
  position: relative;
  overflow: hidden;
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.$color};
  filter: blur(40px);
  opacity: 0.5;
`;

const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  background: linear-gradient(135deg, #5A6B5D 0%, #7A8A7D 50%, #90B3A7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  width: 100%;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: #7A8A7D;
  text-align: center;
  max-width: 700px;
  margin: 2.5rem auto 4.5rem auto;
  line-height: 1.8;
  font-weight: 400;
`;

const BookingCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 3.5rem;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 20px 60px rgba(144, 179, 167, 0.12);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #90B3A7, #B8C4A8);
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const BookingText = styled.p`
  text-align: center;
  color: #6B7B6E;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  font-weight: 400;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%);
  color: white;
  font-weight: 600;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0 10px 25px rgba(144, 179, 167, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  text-decoration: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(135deg, #7A8A7D 0%, #90B3A7 100%);
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    box-shadow: 0 15px 35px rgba(144, 179, 167, 0.4);
    transform: translateY(-2px);
    color: white;
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
    transform: translateX(3px);
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.8);
  color: #5A6B5D;
  font-weight: 600;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  border: 2px solid rgba(144, 179, 167, 0.3);
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  text-decoration: none;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%);
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    transform: translateY(-2px);
    border-color: rgba(144, 179, 167, 0.5);
    box-shadow: 0 10px 25px rgba(144, 179, 167, 0.2);
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
    transform: translateX(3px);
  }
`;

const SpaBookingSection = () => {
  const { t } = useTranslation();

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <BookingSection>
      <FloatingElements>
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(184, 196, 168, 0.08) 100%)"
          style={{ width: '200px', height: '200px', top: '20%', left: '15%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
        />
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(184, 196, 168, 0.06) 0%, rgba(144, 179, 167, 0.06) 100%)"
          style={{ width: '150px', height: '150px', bottom: '25%', right: '20%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 3 }}
        />
      </FloatingElements>
      
      <SectionContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Записаться на процедуру
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Забронируйте SPA-процедуру или услугу салона красоты для полного расслабления
        </SectionSubtitle>
        
        <BookingCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <BookingText>
            Онлайн-бронирование скоро будет доступно. Пока что, пожалуйста, позвоните нам 
            для записи или отправьте сообщение в WhatsApp.
          </BookingText>
          
          <ButtonGroup>
            <PrimaryButton 
              href="tel:+66624805877"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <PhoneIcon />
              +66 62 480 5877
            </PrimaryButton>
            
            <SecondaryButton 
              href="https://wa.me/66624805877"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              WhatsApp
              <ChevronRightIcon />
            </SecondaryButton>
          </ButtonGroup>
        </BookingCard>
      </SectionContainer>
    </BookingSection>
  );
};

export default SpaBookingSection;
