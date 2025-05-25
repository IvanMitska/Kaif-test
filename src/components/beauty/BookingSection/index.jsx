import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ClockIcon, PhoneIcon, StarIcon } from '@heroicons/react/24/solid';

import { ContentContainer } from '../../../styles/beauty/CommonStyles';

// Стили для компонента бронирования
const BookingContainer = styled.section`
  padding: 8rem 2rem;
  background-color: ${props => props.theme.colors.background};
`;

const BookingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
`;

const BookingContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BookingTag = styled.span`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: rgba(210, 155, 132, 0.1);
  color: ${props => props.theme.colors.primary};
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const BookingTitle = styled.h2`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 700;
  font-family: ${props => props.theme.fonts.heading || '"Playfair Display", serif'};
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.primary};
`;

const BookingDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 2rem;
`;

const BookingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const BookingInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const IconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: rgba(210, 155, 132, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${props => props.theme.colors.primary};
  }
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.p`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: ${props => props.theme.colors.text.primary};
`;

const InfoValue = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const BookingButton = styled.a`
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
  font-size: 1.1rem;
  box-shadow: 0 10px 25px rgba(210, 155, 132, 0.3);
  transition: all 0.3s ease;
  text-decoration: none;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.primary}CC;
  }
`;

const BookingImageContainer = styled(motion.div)`
  position: relative;
`;

const BookingImage = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RatingBadge = styled(motion.div)`
  position: absolute;
  bottom: -1.5rem;
  left: -1.5rem;
  background-color: white;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 2;
`;

const Stars = styled.div`
  display: flex;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #F59E0B;
  }
`;

const Rating = styled.p`
  font-weight: 600;
  font-size: 1rem;
`;

const BeautyBookingSection = () => {
  const { t } = useTranslation();

  return (
    <BookingContainer id="booking">
      <ContentContainer>
        <BookingGrid>
          <BookingContent
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <BookingTag>
              {t('beauty.booking.label', 'Бронирование')}
            </BookingTag>
            
            <BookingTitle>
              {t('beauty.booking.title', 'Запишитесь на процедуру прямо сейчас')}
            </BookingTitle>
            
            <BookingDescription>
              {t('beauty.booking.description', 'Забронируйте удобное время для процедуры и позвольте нашим мастерам позаботиться о вашей красоте и самочувствии.')}
            </BookingDescription>
            
            <BookingInfoContainer>
              <BookingInfoItem>
                <IconContainer>
                  <ClockIcon />
                </IconContainer>
                <InfoContent>
                  <InfoTitle>{t('beauty.booking.open_hours', 'Часы работы')}</InfoTitle>
                  <InfoValue>10:00 - 21:00</InfoValue>
                </InfoContent>
              </BookingInfoItem>
              
              <BookingInfoItem>
                <IconContainer>
                  <PhoneIcon />
                </IconContainer>
                <InfoContent>
                  <InfoTitle>{t('beauty.booking.reservation', 'Резервация')}</InfoTitle>
                  <InfoValue>{t('common.phone_number', '+66 624 805 877')}</InfoValue>
                </InfoContent>
              </BookingInfoItem>
            </BookingInfoContainer>
            
            <BookingButton href="tel:+66624805877">
              {t('beauty.booking.call_now', 'Позвонить сейчас')}
              <PhoneIcon />
            </BookingButton>
          </BookingContent>
          
          <BookingImageContainer
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <BookingImage>
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Beauty salon interior" 
              />
            </BookingImage>
            
            <RatingBadge
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Stars>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} />
                ))}
              </Stars>
              <Rating>4.9 (2.8k+)</Rating>
            </RatingBadge>
          </BookingImageContainer>
        </BookingGrid>
      </ContentContainer>
    </BookingContainer>
  );
};

export default BeautyBookingSection;
