import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaPlus, FaMinus } from 'react-icons/fa';

// =============================================================================
// СЕКЦИЯ FAQ SPA
// =============================================================================

const FaqSectionContainer = styled.section`
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
  filter: blur(50px);
  opacity: 0.3;
`;

const SectionContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const FaqTitle = styled(motion.h2)`
  font-family: ${props => props.theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  background: linear-gradient(135deg, #5A6B5D 0%, #7A8A7D 50%, #90B3A7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FaqItemWrapper = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.08);
  overflow: hidden;
  border: 1px solid rgba(144, 179, 167, 0.1);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(144, 179, 167, 0.12);
    background: rgba(255, 255, 255, 0.9);
  }
`;

const FaqQuestion = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.$isOpen ? 'white' : '#5A6B5D'};
  background: ${props => props.$isOpen 
    ? 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)' 
    : 'transparent'
  };
  transition: all 0.3s ease;
  font-family: ${props => props.theme?.fonts?.heading || '"Poppins", sans-serif'};

  &:hover {
    background: ${props => props.$isOpen 
      ? 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)' 
      : 'rgba(144, 179, 167, 0.1)'
    };
    color: ${props => props.$isOpen ? 'white' : '#90B3A7'};
  }
`;

const FaqAnswer = styled(motion.div)`
  padding: 0 2rem 1.5rem 2rem;
  font-size: 1rem;
  color: #6B7B6E;
  line-height: 1.7;
  overflow: hidden;
  font-weight: 400;
  font-family: ${props => props.theme?.fonts?.primary || 'Inter, sans-serif'};
`;

const IconWrapper = styled.span`
  font-size: 1rem;
  color: ${props => props.$isOpen ? 'white' : '#90B3A7'};
  transition: all 0.3s ease;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const SpaFAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      y: 0, 
      transition: { 
        duration: 0.4, 
        ease: "easeInOut" 
      } 
    },
    exit: { 
      opacity: 0, 
      height: 0, 
      y: -10, 
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      } 
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const faqData = [
    {
      key: 'faq1',
      question: 'Какие услуги предлагает SPA-центр?',
      answer: 'Мы предлагаем широкий спектр услуг: тайский массаж, ароматерапия, сауну, хаммам, косметологические процедуры и услуги салона красоты.'
    },
    {
      key: 'faq2',
      question: 'Как записаться на процедуру?',
      answer: 'Вы можете записаться по телефону +66 62 480 5877, через WhatsApp или лично посетив наш центр. Онлайн-бронирование скоро будет доступно.'
    },
    {
      key: 'faq3',
      question: 'Каковы правила отмены записи?',
      answer: 'Мы просим уведомлять об отмене не менее чем за 24 часа. При отмене менее чем за 24 часа может взиматься плата за отмену.'
    },
    {
      key: 'faq4',
      question: 'Есть ли подарочные сертификаты?',
      answer: 'Да, мы предлагаем подарочные сертификаты различного номинала. Их можно приобрести у нас в центре или забронировать по телефону.'
    },
    {
      key: 'faq5',
      question: 'Нужно ли что-то приносить с собой?',
      answer: 'Мы предоставляем все необходимое: полотенца, халаты, тапочки. Вам нужно только прийти и расслабиться.'
    }
  ];

  return (
    <FaqSectionContainer>
      <FloatingElements>
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(144, 179, 167, 0.04) 0%, rgba(184, 196, 168, 0.04) 100%)"
          style={{ width: '200px', height: '200px', top: '20%', left: '20%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
        />
        <FloatingCircle
          $color="linear-gradient(135deg, rgba(184, 196, 168, 0.03) 0%, rgba(144, 179, 167, 0.03) 100%)"
          style={{ width: '150px', height: '150px', bottom: '30%', right: '25%' }}
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 4 }}
        />
      </FloatingElements>

      <SectionContainer>
        <FaqTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Часто задаваемые вопросы
        </FaqTitle>
        
        <FaqList>
          {faqData.map((item, index) => (
            <FaqItemWrapper
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <FaqQuestion 
                onClick={() => toggleItem(index)} 
                $isOpen={openIndex === index}
              >
                {item.question}
                <IconWrapper $isOpen={openIndex === index}>
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </IconWrapper>
              </FaqQuestion>
              
              <AnimatePresence>
                {openIndex === index && (
                  <FaqAnswer
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {item.answer}
                  </FaqAnswer>
                )}
              </AnimatePresence>
            </FaqItemWrapper>
          ))}
        </FaqList>
      </SectionContainer>
    </FaqSectionContainer>
  );
};

export default SpaFAQSection;

// Example i18n keys to add to your translation files (e.g., en.json):
// "spaFaq": {
//   "title": "Frequently Asked Questions",
//   "question1": "What services are offered at the SPA?",
//   "answer1": "We offer a wide range of services including massages, facials, body treatments, and nail care. Please visit our services page for a full list.",
//   "question2": "How do I book an appointment?",
//   "answer2": "You can book an appointment online through our website, by calling us directly, or by visiting our reception desk.",
//   "question3": "What is your cancellation policy?",
//   "answer3": "We require at least 24 hours notice for cancellations or rescheduling. Cancellations made with less than 24 hours notice may incur a fee.",
//   "question4": "Are gift cards available?",
//   "answer4": "Yes, we offer gift cards of various denominations. They can be purchased online or at our SPA."
// }
