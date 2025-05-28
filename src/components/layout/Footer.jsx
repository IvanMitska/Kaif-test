import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// WELLNESS SANCTUARY FOOTER COMPONENTS
// =============================================================================

const FooterContainer = styled.footer`
  position: relative;
  background: linear-gradient(135deg, 
    rgba(44, 62, 45, 0.95) 0%,
    rgba(90, 107, 93, 0.9) 50%,
    rgba(44, 62, 45, 0.95) 100%
  );
  color: white;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(144, 179, 167, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(212, 165, 116, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(200, 168, 233, 0.08) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 1.5rem 2rem;
  
  @media (min-width: 1024px) {
    padding: 5rem 2rem 2rem;
  }
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 3rem;
  }
`;

// Brand Section
const BrandSection = styled(motion.div)`
  @media (max-width: 1023px) {
    text-align: center;
    grid-column: 1 / -1;
  }
`;

const Logo = styled(motion.div)`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 1) 0%, 
    rgba(144, 179, 167, 0.9) 50%,
    rgba(212, 165, 116, 0.8) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const BrandSubtitle = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
`;

const BrandDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 350px;
  
  @media (max-width: 1023px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: linear-gradient(135deg, 
      rgba(144, 179, 167, 0.8) 0%, 
      rgba(212, 165, 116, 0.6) 100%
    );
    border-color: rgba(255, 255, 255, 0.4);
    color: white;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(144, 179, 167, 0.3);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

// Footer Section
const FooterSection = styled(motion.div)`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2rem;
    height: 2px;
    background: linear-gradient(90deg, 
      rgba(144, 179, 167, 0.8) 0%, 
      rgba(212, 165, 116, 0.6) 100%
    );
    border-radius: 1px;
    
    @media (min-width: 1024px) {
      left: 0;
      transform: none;
    }
  }
`;

const FooterLink = styled(Link)`
  display: block;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateX(4px);
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
    text-align: left;
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: rgba(144, 179, 167, 0.8);
    margin-top: 0.125rem;
    flex-shrink: 0;
  }
`;

const ContactText = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

const ContactLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

// Footer Bottom
const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Copyright = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  
  .highlight {
    color: rgba(144, 179, 167, 0.8);
    font-weight: 500;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

// Floating decorative elements
const FloatingDecoration = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${({ $variant }) => {
    switch($variant) {
      case 'secondary':
        return 'linear-gradient(135deg, rgba(212, 165, 116, 0.08) 0%, rgba(184, 196, 168, 0.06) 100%)';
      case 'tertiary':
        return 'linear-gradient(135deg, rgba(184, 196, 168, 0.08) 0%, rgba(144, 179, 167, 0.06) 100%)';
      default:
        return 'linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(212, 165, 116, 0.06) 100%)';
    }
  }};
  filter: blur(60px);
  z-index: 2;
  pointer-events: none;
  
  &.deco-1 {
    top: -50px;
    left: 10%;
  }
  
  &.deco-2 {
    top: 30%;
    right: 5%;
  }
  
  &.deco-3 {
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

// =============================================================================
// FOOTER COMPONENT
// =============================================================================

const Footer = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { path: '/', label: t('navigation.home'), id: 'home' },
    { path: '/restaurant', label: t('navigation.restaurant'), id: 'restaurant' },
    { path: '/spa', label: t('navigation.spa_and_beauty'), id: 'spa' },
    { path: '/sports', label: t('navigation.sports'), id: 'sports-main' },
    { path: '/about', label: t('navigation.about'), id: 'about' },
    { path: '/contacts', label: t('navigation.contacts'), id: 'contacts' },
    { path: '/promotions', label: t('navigation.promotions'), id: 'promotions' },
  ];

  const serviceLinks = [
    { path: '/spa', label: 'Сауна и хаммам', id: 'spa-sauna' },
    { path: '/restaurant', label: 'Ресторан', id: 'restaurant' },
    { path: '/sports', label: 'Фитнес-центр', id: 'sports-fitness' },
    { path: '/beauty', label: 'Салон красоты', id: 'beauty' },
    { path: '/sports', label: 'Бойцовский клуб', id: 'sports-club' },
    { path: '/promotions', label: 'Акции', id: 'promotions' },
  ];

  return (
    <FooterContainer>
      {/* Floating Decorations */}
      <FloatingDecoration 
        className="deco-1"
        $variant="primary"
        variants={floatVariants}
        animate="animate"
      />
      <FloatingDecoration 
        className="deco-2"
        $variant="secondary"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: '-4s' }}
      />
      <FloatingDecoration 
        className="deco-3"
        $variant="tertiary"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: '-8s' }}
      />

      <FooterContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <FooterMain>
            {/* Brand Section */}
            <BrandSection variants={itemVariants}>
              <Logo
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                KAIF
              </Logo>
              <BrandDescription>
                Премиальный оздоровительный комплекс на Пхукете. 
                Мы создаем уникальный опыт wellness для восстановления 
                гармонии тела и души.
              </BrandDescription>
              <SocialLinks>
                <SocialLink
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </SocialLink>
                <SocialLink
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.717 0-4.915-2.198-4.915-4.915S5.732 7.158 8.449 7.158s4.915 2.198 4.915 4.915-2.198 4.915-4.915 4.915zm7.44-9.622a1.158 1.158 0 11-2.316 0 1.158 1.158 0 012.316 0z"/>
                  </svg>
                </SocialLink>
                <SocialLink
                  href={`tel:${t('common.phone_number')}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PhoneIcon />
                </SocialLink>
              </SocialLinks>
            </BrandSection>

            {/* Navigation */}
            <FooterSection variants={itemVariants}>
              <SectionTitle>Навигация</SectionTitle>
              {navigationLinks.map((link) => (
                <FooterLink key={link.id} to={link.path}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterSection>

            {/* Services */}
            <FooterSection variants={itemVariants}>
              <SectionTitle>Услуги</SectionTitle>
              {serviceLinks.map((link) => (
                <FooterLink key={link.id} to={link.path}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterSection>

            {/* Contact Info */}
            <FooterSection variants={itemVariants}>
              <SectionTitle>Контакты</SectionTitle>
              
              <ContactItem>
                <MapPinIcon />
                <ContactText>
                  {t('common.address')}
                </ContactText>
              </ContactItem>

              <ContactItem>
                <PhoneIcon />
                <ContactText>
                  <ContactLink href={`tel:${t('common.phone_number')}`}>
                    {t('common.phone_number')}
                  </ContactLink>
                </ContactText>
              </ContactItem>

              <ContactItem>
                <ClockIcon />
                <ContactText>
                  Ежедневно<br />
                  8:00 - 22:00
                </ContactText>
              </ContactItem>

              <ContactItem>
                <HeartIcon />
                <ContactText>
                  <span style={{ color: 'rgba(184, 196, 168, 0.8)' }}>
                    Child Watch Phuket<br />
                    Foundation
                  </span>
                </ContactText>
              </ContactItem>
            </FooterSection>
          </FooterMain>

          {/* Footer Bottom */}
          <FooterBottom>
            <Copyright>
              © {currentYear} <span className="highlight">KAIF</span>. 
              Все права защищены.
            </Copyright>
            <LegalLinks>
              <a href="/privacy">Политика конфиденциальности</a>
              <a href="/terms">Условия использования</a>
            </LegalLinks>
          </FooterBottom>
        </motion.div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
