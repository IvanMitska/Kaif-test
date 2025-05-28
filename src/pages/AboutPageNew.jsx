import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Основные стили страницы
const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme?.colors?.background || '#F5F3F0'};
  overflow-x: hidden;
`;

// Hero секция
const HeroSection = styled.section`
  position: relative;
  min-height: 70vh;
  background: linear-gradient(135deg, 
    rgba(44, 62, 45, 0.9) 0%,
    rgba(90, 107, 93, 0.8) 50%,
    rgba(44, 62, 45, 0.9) 100%
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, 
    white 0%, 
    #90B3A7 50%,
    #D4A574 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSubtitle = styled.h2`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 400;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
`;

const HeroDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 0.8);
`;

// Секция статистики
const StatsSection = styled.section`
  padding: 2rem;
  display: flex;
  justify-content: center;
  margin-top: -5rem;
  position: relative;
  z-index: 3;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
`;

const StatLabel = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  font-weight: 500;
`;

// Секция о миссии
const Section = styled.section`
  padding: 8rem 2rem;
  display: flex;
  justify-content: center;
  background: ${props => props.dark ? 
    'linear-gradient(135deg, rgba(44, 62, 45, 0.9) 0%, rgba(90, 107, 93, 0.8) 100%)' : 
    props.alt ? 'rgba(255, 255, 255, 0.5)' : 'transparent'
  };
  color: ${props => props.dark ? 'white' : 'inherit'};
  position: relative;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${props => props.dark ? 'white' : ({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
`;

const SectionDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.25rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  color: ${props => props.dark ? 'rgba(255, 255, 255, 0.8)' : ({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
`;

// Секция с услугами
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background-color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
  background-position: center;
  background-size: cover;
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
`;

const ServiceDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
`;

const FeaturesList = styled.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
  list-style-type: none;
`;

const FeatureItem = styled.li`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    left: -1.5rem;
    top: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    border-radius: 50%;
  }
`;

// CTA секция
const CTASection = styled(Section)`
  padding: 6rem 2rem;
  text-align: center;
`;

const CTAButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${props => props.primary ? 
    ({ theme }) => theme?.colors?.primary || '#90B3A7' : 
    'transparent'
  };
  color: ${props => props.primary ? 
    'white' : 
    ({ theme }) => theme?.colors?.primary || '#90B3A7'
  };
  border: 2px solid ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
  border-radius: 50px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background: ${props => props.primary ? 
      ({ theme }) => theme?.colors?.primary || '#90B3A7' : 
      'rgba(144, 179, 167, 0.1)'
    };
  }
`;

const AboutPageNew = () => {
  return (
    <PageContainer>
      {/* Hero секция */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Добро пожаловать в KAIF!</HeroTitle>
          <HeroSubtitle>Jungle Club & Spa на Пхукете</HeroSubtitle>
          <HeroDescription>
            Мы создали уникальное пространство на Пхукете, где премиальный сервис 
            встречается с тайским гостеприимством. KAIF — это не просто спа-комплекс, 
            это философия здорового образа жизни и гармонии.
          </HeroDescription>
        </HeroContent>
      </HeroSection>
      
      {/* Статистика */}
      <StatsSection>
        <StatsGrid>
          <StatCard>
            <StatNumber>50м²</StatNumber>
            <StatLabel>Самая большая сауна</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>5</StatNumber>
            <StatLabel>Кухонь мира</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>70+</StatNumber>
            <StatLabel>Тренажеров</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>25м</StatNumber>
            <StatLabel>Олимпийский бассейн</StatLabel>
          </StatCard>
        </StatsGrid>
      </StatsSection>
      
      {/* О нас */}
      <Section>
        <SectionContent>
          <SectionHeader>
            <SectionTitle>Наша миссия</SectionTitle>
            <SectionDescription>
              KAIF PHUKET – это место, где вы восстанавливаете силы, заряжаетесь энергией и 
              наслаждаетесь каждым моментом. Всё здесь создано так, чтобы вам хотелось 
              вернуться: тренировки, которые вдохновляют, отдых, который наполняет, и 
              атмосфера, которая дарит настоящий кайф. Мы верим, что гармония – не роскошь, 
              а необходимость, и делаем её доступной для вас.
            </SectionDescription>
          </SectionHeader>
        </SectionContent>
      </Section>
      
      {/* Услуги */}
      <Section alt>
        <SectionContent>
          <SectionHeader>
            <SectionTitle>Наши услуги</SectionTitle>
            <SectionDescription>
              KAIF объединяет премиальные услуги в одном месте для вашего комфорта и удовольствия
            </SectionDescription>
          </SectionHeader>
          
          <ServicesGrid>
            <ServiceCard>
              <ServiceImage style={{ backgroundColor: '#90B3A7' }} />
              <ServiceContent>
                <ServiceTitle>СПА комплекс</ServiceTitle>
                <ServiceDescription>
                  Самая большая сауна в Таиланде, хаммам, массажные кабинеты и процедурные комнаты.
                </ServiceDescription>
                <FeaturesList>
                  <FeatureItem>50м² сауна</FeatureItem>
                  <FeatureItem>Тайский хаммам</FeatureItem>
                  <FeatureItem>Широкий выбор массажей</FeatureItem>
                </FeaturesList>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceImage style={{ backgroundColor: '#A0B396' }} />
              <ServiceContent>
                <ServiceTitle>Тренажерный зал</ServiceTitle>
                <ServiceDescription>
                  Современный фитнес-центр с более чем 70 тренажерами и оборудованием для любого типа тренировок.
                </ServiceDescription>
                <FeaturesList>
                  <FeatureItem>70+ тренажеров</FeatureItem>
                  <FeatureItem>Персональные тренеры</FeatureItem>
                  <FeatureItem>Кардио-зона</FeatureItem>
                </FeaturesList>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceImage style={{ backgroundColor: '#D4A574' }} />
              <ServiceContent>
                <ServiceTitle>Ресторан</ServiceTitle>
                <ServiceDescription>
                  Изысканная кухня, объединяющая 5 кулинарных традиций мира, с акцентом на здоровое и вкусное питание.
                </ServiceDescription>
                <FeaturesList>
                  <FeatureItem>5 кухонь мира</FeatureItem>
                  <FeatureItem>Здоровое меню</FeatureItem>
                  <FeatureItem>Авторские коктейли</FeatureItem>
                </FeaturesList>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceImage style={{ backgroundColor: '#83A4B4' }} />
              <ServiceContent>
                <ServiceTitle>Салон красоты</ServiceTitle>
                <ServiceDescription>
                  Салон красоты полного цикла с услугами для мужчин и женщин, современное оборудование и профессиональные мастера.
                </ServiceDescription>
                <FeaturesList>
                  <FeatureItem>Косметология</FeatureItem>
                  <FeatureItem>Парикмахерская</FeatureItem>
                  <FeatureItem>Маникюр/Педикюр</FeatureItem>
                </FeaturesList>
              </ServiceContent>
            </ServiceCard>
          </ServicesGrid>
        </SectionContent>
      </Section>
      
      {/* Почему мы */}
      <Section dark>
        <SectionContent>
          <SectionHeader>
            <SectionTitle dark>Почему выбирают KAIF</SectionTitle>
            <SectionDescription dark>
              Мы выделяемся среди других заведений Пхукета благодаря нашему подходу к качеству, 
              сервису и атмосфере. Вот что делает нас особенными:
            </SectionDescription>
          </SectionHeader>
          
          <ServicesGrid>
            <ServiceCard>
              <ServiceContent>
                <ServiceTitle>Все услуги в одном месте</ServiceTitle>
                <ServiceDescription>
                  KAIF объединяет спа, фитнес, ресторан и салон красоты, позволяя вам получить все необходимые услуги в одном комплексе.
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceContent>
                <ServiceTitle>Премиальное качество</ServiceTitle>
                <ServiceDescription>
                  Мы используем только лучшее оборудование и материалы, предоставляя услуги мирового уровня.
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceContent>
                <ServiceTitle>Профессиональная команда</ServiceTitle>
                <ServiceDescription>
                  Наши специалисты — это сертифицированные профессионалы с многолетним опытом работы.
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceContent>
                <ServiceTitle>Уникальная атмосфера</ServiceTitle>
                <ServiceDescription>
                  KAIF — это место, где вы действительно можете расслабиться и восстановить силы в атмосфере тропического рая.
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>
          </ServicesGrid>
        </SectionContent>
      </Section>
      
      {/* CTA */}
      <CTASection>
        <SectionContent>
          <SectionHeader>
            <SectionTitle>Готовы ощутить настоящий KAIF?</SectionTitle>
            <SectionDescription>
              Посетите наш комплекс и откройте для себя мир премиального отдыха и заботы о себе на Пхукете.
            </SectionDescription>
          </SectionHeader>
          
          <CTAButtons>
            <CTAButton to="/contacts" primary>Связаться с нами</CTAButton>
            <CTAButton to="/spa">Узнать больше о спа</CTAButton>
          </CTAButtons>
        </SectionContent>
      </CTASection>
    </PageContainer>
  );
};

export default AboutPageNew;
