import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { StarIcon } from '@heroicons/react/24/solid';

// =============================================================================
// СЕКЦИЯ ОТЗЫВОВ SPA
// =============================================================================

// Секция отзывов клиентов
const TestimonialsSection = styled.section`
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
  filter: blur(45px);
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

const TestimonialsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 4rem auto 0;
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 25px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.08);
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(144, 179, 167, 0.15);
    background: rgba(255, 255, 255, 0.95);
  }
  
  &::before {
    content: '\\201C';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 4rem;
    font-family: Georgia, serif;
    line-height: 1;
    color: rgba(144, 179, 167, 0.15);
    z-index: 0;
  }
`;

const TestimonialContent = styled.div`
  position: relative;
  z-index: 1;
`;

const TestimonialText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #6B7B6E;
  margin-bottom: 2rem;
  font-style: italic;
  font-weight: 400;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TestimonialAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid rgba(144, 179, 167, 0.2);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TestimonialName = styled.span`
  font-weight: 600;
  color: #5A6B5D;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
`;

const TestimonialRole = styled.span`
  font-size: 0.9rem;
  color: #7A8A7D;
  font-weight: 400;
`;

const TestimonialRating = styled.div`
  display: flex;
  margin-top: 0.5rem;
  color: #90B3A7;
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }
`;

const SpaTestimonialsSection = () => {
  const { t } = useTranslation();
  
  // Примеры отзывов
  const testimonials = [
    {
      id: 1,
      text: 'Я была в восторге от процедур в KAIF SPA. Массаж был потрясающим, а персонал очень внимательным. Обязательно вернусь снова!',
      name: 'Анна Смирнова',
      role: 'Постоянный клиент',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 5
    },
    {
      id: 2,
      text: 'Отличный сервис и приятная атмосфера. Мастера действительно знают свое дело. Рекомендую всем, кто хочет полноценно отдохнуть.',
      name: 'Михаил Петров',
      role: 'Турист из Москвы',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 5
    },
    {
      id: 3,
      text: 'Процедуры в салоне красоты просто волшебные! Мои волосы и кожа выглядят потрясающе. Спасибо команде KAIF за профессионализм.',
      name: 'Елена Козлова',
      role: 'Резидент Пхукета',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 5
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
      y: [-10, 10, -10],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <TestimonialsSection>
      <FloatingElements>
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(144, 179, 167, 0.06) 0%, rgba(184, 196, 168, 0.06) 100%)"
          style={{ width: '220px', height: '220px', top: '10%', right: '15%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
        />
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(184, 196, 168, 0.05) 0%, rgba(144, 179, 167, 0.05) 100%)"
          style={{ width: '160px', height: '160px', bottom: '15%', left: '10%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 4 }}
        />
      </FloatingElements>
      
      <SectionContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Отзывы наших клиентов
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Узнайте, что говорят о нас клиенты, которые уже испытали наши SPA и beauty-услуги
        </SectionSubtitle>
        
        <TestimonialsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <TestimonialContent>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  <TestimonialAvatar>
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </TestimonialAvatar>
                  <TestimonialInfo>
                    <TestimonialName>{testimonial.name}</TestimonialName>
                    <TestimonialRole>{testimonial.role}</TestimonialRole>
                    <TestimonialRating>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </TestimonialRating>
                  </TestimonialInfo>
                </TestimonialAuthor>
              </TestimonialContent>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </SectionContainer>
    </TestimonialsSection>
  );
};

export default SpaTestimonialsSection;
