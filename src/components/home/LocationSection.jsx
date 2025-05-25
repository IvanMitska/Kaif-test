import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  GlobeAltIcon,
  CalendarDaysIcon,
  InformationCircleIcon,
  TruckIcon,
  BuildingOfficeIcon,
  MapIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// СОВРЕМЕННАЯ МИНИМАЛИСТИЧНАЯ СЕКЦИЯ ЛОКАЦИИ
// =============================================================================

const LocationContainer = styled.section`
  position: relative;
  padding: 8rem 0 4rem;
  background: white;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #94a3b8;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`;

const SectionSubtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const InfoSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoCard = styled(motion.div)`
  background: #fafafa;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border-color: #e2e8f0;
  }
`;

const CardIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.5rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  transition: all 0.3s ease;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  ${InfoCard}:hover & {
    background: #0f172a;
    color: white;
    border-color: #0f172a;
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #94a3b8;
    flex-shrink: 0;
  }
`;

const ContactButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  margin-top: 1rem;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    background: #1e293b;
    box-shadow: 0 6px 20px rgba(15, 23, 42, 0.2);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
`;

const MapSection = styled(motion.div)`
  position: relative;
`;

const MapContainer = styled.div`
  background: #fafafa;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  height: 500px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const MapButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    background: #1e293b;
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.2);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.05);
  }
`;

const ExtraInfo = styled(motion.div)`
  margin-top: 4rem;
  text-align: center;
`;

const ExtraInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ExtraInfoCard = styled(motion.div)`
  background: #fafafa;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    border-color: #e2e8f0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  }
`;

const ExtraInfoIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 auto 1rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  transition: all 0.3s ease;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  ${ExtraInfoCard}:hover & {
    background: #0f172a;
    color: white;
    border-color: #0f172a;
    transform: scale(1.05);
  }
`;

const ExtraInfoTitle = styled.h4`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;

const ExtraInfoText = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
`;

// =============================================================================
// LOCATION SECTION COMPONENT
// =============================================================================

const LocationSection = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const openGoogleMaps = () => {
    const address = "KAIF Jungle Club & Spa, Phuket, Thailand";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  const makePhoneCall = () => {
    window.open('tel:+66761234567');
  };

  return (
    <LocationContainer>
      <ContentWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader>
            <SectionBadge variants={itemVariants}>
              <MapPinIcon />
              Найдите нас
            </SectionBadge>
            
            <SectionTitle variants={itemVariants}>
              Как добраться
            </SectionTitle>
            
            <SectionSubtitle variants={itemVariants}>
              Мы находимся в самом сердце Пхукета, в окружении тропических джунглей
            </SectionSubtitle>
          </SectionHeader>

          <LocationGrid>
            {/* Информационные карточки */}
            <InfoSection>
              <motion.div variants={cardVariants}>
                <InfoCard
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <CardIcon>
                    <MapPinIcon />
                  </CardIcon>
                  <CardTitle>Наш адрес</CardTitle>
                  <CardContent>
                    <InfoItem>
                      <MapPinIcon />
                      123 Jungle Road, Patong, Phuket 83150
                    </InfoItem>
                    <InfoItem>
                      <BuildingOfficeIcon />
                      Район Патонг, в 10 минутах от пляжа
                    </InfoItem>
                    <InfoItem>
                      <TruckIcon />
                      Бесплатная парковка для гостей
                    </InfoItem>
                  </CardContent>
                </InfoCard>
              </motion.div>

              <motion.div variants={cardVariants}>
                <InfoCard
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <CardIcon>
                    <ClockIcon />
                  </CardIcon>
                  <CardTitle>Часы работы</CardTitle>
                  <CardContent>
                    <InfoItem>
                      <ClockIcon />
                      Ежедневно: 6:00 - 23:00
                    </InfoItem>
                    <InfoItem>
                      <CalendarDaysIcon />
                      СПА: 9:00 - 22:00
                    </InfoItem>
                    <InfoItem>
                      <InformationCircleIcon />
                      Ресторан: 11:00 - 23:30
                    </InfoItem>
                  </CardContent>
                </InfoCard>
              </motion.div>

              <motion.div variants={cardVariants}>
                <InfoCard
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <CardIcon>
                    <PhoneIcon />
                  </CardIcon>
                  <CardTitle>Контакты</CardTitle>
                  <CardContent>
                    <InfoItem>
                      <PhoneIcon />
                      +66 76 123 4567
                    </InfoItem>
                    <InfoItem>
                      <GlobeAltIcon />
                      WhatsApp: +66 98 765 4321
                    </InfoItem>
                    <InfoItem>
                      <GlobeAltIcon />
                      info@kaif-phuket.com
                    </InfoItem>
                    <ContactButton
                      onClick={makePhoneCall}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <PhoneIcon />
                      Позвонить сейчас
                    </ContactButton>
                  </CardContent>
                </InfoCard>
              </motion.div>
            </InfoSection>

            {/* Карта */}
            <MapSection variants={itemVariants}>
              <MapContainer>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.8203398120136!2d98.3536249!3d7.913827999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031603c054903%3A0x818d8108ef4f8a55!2sKAIF%20%E2%80%93%20Jungle%20club%20%26%20SPA!5e0!3m2!1sru!2sth!4v1748031844024!5m2!1sru!2sth" 
                  width="100%" 
                  height="100%" 
                  style={{ border:0 }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Расположение KAIF - Jungle Club & Spa"
                ></iframe>
              </MapContainer>
            </MapSection>
          </LocationGrid>

          {/* Дополнительная информация */}
          <ExtraInfo variants={itemVariants}>
            <motion.h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#0f172a',
                marginBottom: '1rem'
              }}
            >
              Как добраться
            </motion.h3>
            
            <ExtraInfoGrid>
              <motion.div variants={cardVariants}>
                <ExtraInfoCard
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <ExtraInfoIcon>
                    <GlobeAltIcon />
                  </ExtraInfoIcon>
                  <ExtraInfoTitle>Из аэропорта</ExtraInfoTitle>
                  <ExtraInfoText>
                    45 минут на такси или трансфере. Мы организуем встречу в аэропорту.
                  </ExtraInfoText>
                </ExtraInfoCard>
              </motion.div>

              <motion.div variants={cardVariants}>
                <ExtraInfoCard
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <ExtraInfoIcon>
                    <MapPinIcon />
                  </ExtraInfoIcon>
                  <ExtraInfoTitle>От пляжа Патонг</ExtraInfoTitle>
                  <ExtraInfoText>
                    10 минут пешком или 3 минуты на тук-туке через джунгли.
                  </ExtraInfoText>
                </ExtraInfoCard>
              </motion.div>

              <motion.div variants={cardVariants}>
                <ExtraInfoCard
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <ExtraInfoIcon>
                    <TruckIcon />
                  </ExtraInfoIcon>
                  <ExtraInfoTitle>На арендованном авто</ExtraInfoTitle>
                  <ExtraInfoText>
                    Бесплатная охраняемая парковка на 50 мест прямо у входа.
                  </ExtraInfoText>
                </ExtraInfoCard>
              </motion.div>
            </ExtraInfoGrid>
          </ExtraInfo>
        </motion.div>
      </ContentWrapper>
    </LocationContainer>
  );
};

export default LocationSection; 