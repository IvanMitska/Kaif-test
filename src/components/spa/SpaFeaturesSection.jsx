import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SparklesIcon, HeartIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';

// =============================================================================
// СЕКЦИЯ ПРЕИМУЩЕСТВ SPA
// =============================================================================

// Секция преимуществ
const FeaturesSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, 
    #f5f3f0 0%,
    #ede9e4 50%,
    #e6e2dc 100%
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
  filter: blur(50px);
  opacity: 0.4;
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 4rem auto 0;
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  padding: 2.5rem 2rem;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(144, 179, 167, 0.15);
    background: rgba(255, 255, 255, 0.9);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -80px;
    left: -80px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(144, 179, 167, 0.1) 0%, rgba(144, 179, 167, 0) 70%);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.15) 0%, rgba(184, 196, 168, 0.15) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #90B3A7;
  font-size: 2rem;
  transition: all 0.3s ease;
  border: 2px solid rgba(144, 179, 167, 0.1);
  
  ${FeatureCard}:hover & {
    background: linear-gradient(135deg, rgba(144, 179, 167, 0.25) 0%, rgba(184, 196, 168, 0.25) 100%);
    transform: scale(1.05) rotate(-3deg);
    border-color: rgba(144, 179, 167, 0.2);
  }
  
  svg {
    width: 36px;
    height: 36px;
  }
`;

const FeatureTitle = styled.h3`
  font-family: ${props => props.theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #5A6B5D;
  transition: color 0.3s ease;
  
  ${FeatureCard}:hover & {
    color: #90B3A7;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #7A8A7D;
  margin-bottom: 0;
  font-weight: 400;
`;

const SpaFeaturesSection = () => {
  const { t } = useTranslation();
  
  // Данные для преимуществ
  const features = [
    {
      id: 1,
      icon: <SparklesIcon />,
      title: 'Премиум качество',
      description: 'Используем только лучшие продукты и оборудование для всех процедур'
    },
    {
      id: 2,
      icon: <HeartIcon />,
      title: 'Полное расслабление',
      description: 'Создаем атмосферу комфорта для вашего расслабления и отдыха'
    },
    {
      id: 3,
      icon: <UserGroupIcon />,
      title: 'Опытные мастера',
      description: 'Специалисты с многолетним опытом и постоянным развитием навыков'
    },
    {
      id: 4,
      icon: <StarIcon />,
      title: 'Индивидуальный подход',
      description: 'Учитываем ваши пожелания и особенности для максимального результата'
    }
  ];
  
  // Варианты анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-12, 12, -12],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <FeaturesSection>
      <FloatingElements>
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(184, 196, 168, 0.05) 100%)"
          style={{ width: '250px', height: '250px', top: '15%', right: '10%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
        />
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(184, 196, 168, 0.04) 0%, rgba(144, 179, 167, 0.04) 100%)"
          style={{ width: '180px', height: '180px', bottom: '20%', left: '15%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 5 }}
        />
      </FloatingElements>
      
      <SectionContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Почему выбирают нас
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Узнайте, что делает наш SPA & Wellness центр особенным и почему клиенты возвращаются к нам снова
        </SectionSubtitle>
        
        <FeaturesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </SectionContainer>
    </FeaturesSection>
  );
};

export default SpaFeaturesSection;
