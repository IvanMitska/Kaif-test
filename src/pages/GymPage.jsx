import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Стилизованные компоненты
const PageContainer = styled.div`
  background-color: #F9F9F9;
  color: #333333;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
`;

const HeroSection = styled.section`
  height: 50vh;
  min-height: 400px;
  background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 3rem;
`;

const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  a {
    color: white;
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1;
    }
  }
  
  span {
    margin: 0 0.5rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #FFFFFF;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #FFFFFF;
`;

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: ${props => props.bgColor || '#fff'};
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: #333333;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  align-items: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const GalleryImage = styled.div`
  height: 250px;
  background-color: #f0f0f0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
`;

const DescriptionText = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #555;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const PricingCard = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PricingTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  color: #333333;
`;

const PriceAmount = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #D29B84;
  margin-bottom: 1rem;
  
  span {
    font-size: 1rem;
    color: #888;
    font-weight: normal;
  }
`;

const PriceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex-grow: 1;
  
  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #f0f0f0;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const BookButton = styled(motion.button)`
  background-color: #D29B84;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #B08D57;
  }
  
  &:focus {
    outline: none;
  }
`;

const GymPage = () => {
  const { t } = useTranslation();
  
  // Анимационные варианты
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <PageContainer>
      {/* Hero секция */}
      <HeroSection>
        <HeroContent>
          <BreadcrumbNav>
            <Link to="/">Главная</Link>
            <span>/</span>
            <Link to="/sports">Спорт</Link>
            <span>/</span>
            <span>Тренажерный зал</span>
          </BreadcrumbNav>
          
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Тренажерный зал
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Современный тренажерный зал с панорамными окнами и профессиональным оборудованием для эффективных тренировок
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      {/* Секция описания */}
      <Section>
        <ContentContainer>
          <TwoColumnLayout>
            <div>
              <SectionTitle
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                О нашем тренажерном зале
              </SectionTitle>
              
              <DescriptionText>
                <p>
                  Тренажерный зал KAIF оснащен современным оборудованием и разделен на несколько функциональных зон:
                </p>
                
                <ul>
                  <li><strong>Зона силовых тренировок</strong> с комплектом свободных весов, гантелей от 1 до 50 кг и профессиональными силовыми тренажерами</li>
                  <li><strong>Кардио-зона</strong> с беговыми дорожками, эллиптическими тренажерами, велотренажерами и степперами</li>
                  <li><strong>Зона кроссфита</strong> с функциональным оборудованием для высокоинтенсивных тренировок</li>
                  <li><strong>Зона растяжки</strong> с ковриками и вспомогательным оборудованием</li>
                </ul>
                
                <p>
                  Все зоны оборудованы кондиционерами и станциями для дезинфекции. Панорамные стеклянные стены с потрясающими видами на горы и закат идеально дополняют атмосферу тренировок.
                </p>
                
                <p>
                  В нашем тренажерном зале работают профессиональные тренеры, которые помогут составить индивидуальную программу тренировок и следить за правильной техникой выполнения упражнений.
                </p>
              </DescriptionText>
            </div>
            
            <GalleryGrid>
              <GalleryImage src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
              <GalleryImage src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
              <GalleryImage src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
              <GalleryImage src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
            </GalleryGrid>
          </TwoColumnLayout>
        </ContentContainer>
      </Section>
      
      {/* Секция цен */}
      <Section bgColor="#F9F9F9">
        <ContentContainer>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Абонементы и цены
          </SectionTitle>
          
          <TwoColumnLayout>
            <PricingCard
              as={motion.div}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <PricingTitle>Разовое посещение</PricingTitle>
              <PriceAmount>500 ฿</PriceAmount>
              <PriceFeatures>
                <li>Доступ ко всем зонам тренажерного зала</li>
                <li>Использование раздевалок и душевых</li>
                <li>Полотенце</li>
                <li>Бутылка воды</li>
              </PriceFeatures>
              <BookButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CalendarIcon className="w-5 h-5" />
                Забронировать
              </BookButton>
            </PricingCard>
            
            <PricingCard
              as={motion.div}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <PricingTitle>Месячный абонемент</PricingTitle>
              <PriceAmount>7,000 ฿ <span>/ месяц</span></PriceAmount>
              <PriceFeatures>
                <li>Неограниченное количество посещений</li>
                <li>Доступ ко всем зонам тренажерного зала</li>
                <li>Бесплатная консультация с тренером</li>
                <li>Использование раздевалок и душевых</li>
                <li>Полотенце и бутылка воды при каждом посещении</li>
                <li>Скидка 10% на персональные тренировки</li>
              </PriceFeatures>
              <BookButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CalendarIcon className="w-5 h-5" />
                Приобрести
              </BookButton>
            </PricingCard>
          </TwoColumnLayout>
          
          <div style={{ marginTop: '2rem' }}>
            <TwoColumnLayout>
              <PricingCard
                as={motion.div}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <PricingTitle>Персональная тренировка</PricingTitle>
                <PriceAmount>1,200 ฿ <span>/ 1 час</span></PriceAmount>
                <PriceFeatures>
                  <li>Индивидуальная программа тренировок</li>
                  <li>Персональное внимание тренера</li>
                  <li>Контроль техники выполнения упражнений</li>
                  <li>Рекомендации по питанию</li>
                  <li>Полотенце и бутылка воды</li>
                </PriceFeatures>
                <BookButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CalendarIcon className="w-5 h-5" />
                  Забронировать
                </BookButton>
              </PricingCard>
              
              <PricingCard
                as={motion.div}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <PricingTitle>Годовой абонемент</PricingTitle>
                <PriceAmount>60,000 ฿ <span>/ год</span></PriceAmount>
                <PriceFeatures>
                  <li>Все преимущества месячного абонемента</li>
                  <li>Экономия 30% по сравнению с ежемесячной оплатой</li>
                  <li>5 бесплатных персональных тренировок</li>
                  <li>Скидка 15% на все дополнительные услуги</li>
                  <li>Скидка 10% в ресторане KAIF</li>
                  <li>Приоритетная запись на групповые занятия</li>
                </PriceFeatures>
                <BookButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CalendarIcon className="w-5 h-5" />
                  Приобрести
                </BookButton>
              </PricingCard>
            </TwoColumnLayout>
          </div>
        </ContentContainer>
      </Section>
      
      {/* Секция расписания */}
      <Section>
        <ContentContainer>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Расписание работы
          </SectionTitle>
          
          <DescriptionText>
            <p>
              <strong>Понедельник - Пятница:</strong> 7:00 - 22:00<br />
              <strong>Суббота - Воскресенье:</strong> 8:00 - 21:00
            </p>
            
            <p>
              Для получения дополнительной информации или бронирования персональной тренировки, пожалуйста, свяжитесь с нами по телефону или через форму на сайте.
            </p>
          </DescriptionText>
          
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/sports">
              <BookButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRightIcon className="w-5 h-5 transform rotate-180" />
                Назад к спортивным объектам
              </BookButton>
            </Link>
          </div>
        </ContentContainer>
      </Section>
    </PageContainer>
  );
};

export default GymPage;
