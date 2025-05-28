import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// =============================================================================
// WELLNESS SANCTUARY HEADER COMPONENTS
// =============================================================================

const StyledHeader = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme?.zIndex?.sticky || 1100};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  ${({ $scrolled, theme }) => $scrolled ? `
    background: rgba(253, 252, 250, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(144, 179, 167, 0.1);
    box-shadow: 0 4px 6px -1px rgba(144, 179, 167, 0.08), 0 2px 4px -1px rgba(144, 179, 167, 0.06);
  ` : `
    background: rgba(245, 243, 240, 0.8);
    backdrop-filter: blur(10px);
  `}
`;

const HeaderContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  
  @media (min-width: 1024px) {
    height: 5.5rem;
  }
`;

// Logo Component
const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  letter-spacing: -0.02em;
  
  background: linear-gradient(135deg, 
    ${({ theme }) => theme?.colors?.primary || '#90B3A7'} 0%, 
    ${({ theme }) => theme?.colors?.secondary || '#D4A574'} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const LogoSubtext = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.75rem;
  color: ${({ theme }) => theme?.colors?.text?.light || '#8B9A8E'};
  margin-left: 0.5rem;
  margin-top: 0.25rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Desktop Navigation
const DesktopNav = styled.nav`
  display: none;
  
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  position: relative;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: 0.5rem 0;
  letter-spacing: 0.01em;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme?.colors?.primary || '#90B3A7'}, 
      ${({ theme }) => theme?.colors?.secondary || '#D4A574'}
    );
    transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 1px;
  }
  
  &:hover {
    color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    transform: translateY(-1px);
  }
  
  &:hover::after,
  &.active::after {
    width: 100%;
  }
  
  &.active {
    color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    font-weight: 600;
  }
`;

// Language Switcher
const LanguageContainer = styled.div`
  position: relative;
  z-index: 100;
`;

const LanguageButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(144, 179, 167, 0.1);
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 12px;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    background: rgba(144, 179, 167, 0.15);
    border-color: rgba(144, 179, 167, 0.3);
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(144, 179, 167, 0.1);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &.open svg {
    transform: rotate(180deg);
  }
`;

const DropdownContainer = styled(motion.div)`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 150px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 16px;
  padding: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(144, 179, 167, 0.1), 0 4px 6px -2px rgba(144, 179, 167, 0.05);
  overflow: hidden;
`;

const LanguageOption = styled(motion.button)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: ${({ $active }) => $active ? 'rgba(144, 179, 167, 0.1)' : 'transparent'};
  color: ${({ $active, theme }) => $active ? (theme?.colors?.primary || '#90B3A7') : (theme?.colors?.text?.primary || '#2C3E2D')};
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    background: rgba(144, 179, 167, 0.1);
    color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
  }
`;

// Mobile Navigation
const MobileNavButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  background: rgba(144, 179, 167, 0.1);
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 8px;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  @media (min-width: 1024px) {
    display: none;
  }
  
  &:hover {
    background: rgba(144, 179, 167, 0.15);
    transform: translateY(-1px);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }
`;

const MobileNavOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(44, 62, 45, 0.5);
  backdrop-filter: blur(4px);
  z-index: 90;
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileNavContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 20rem;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(144, 179, 167, 0.1);
  z-index: 95;
  overflow-y: auto;
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileNavContent = styled.div`
  padding: 2rem 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(144, 179, 167, 0.1);
`;

const CloseButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  background: rgba(144, 179, 167, 0.1);
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 8px;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(144, 179, 167, 0.2);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
`;

const MobileNavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover,
  &.active {
    background: rgba(144, 179, 167, 0.1);
    color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    transform: translateX(0.25rem);
  }
  
  &.active {
    font-weight: 600;
  }
`;

const MobileLanguageSection = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(144, 179, 167, 0.1);
`;

const MobileLanguageTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.text?.light || '#8B9A8E'};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
`;

const MobileLanguageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const MobileLanguageButton = styled(motion.button)`
  padding: 0.75rem;
  background: ${({ $active }) => $active ? 'rgba(144, 179, 167, 0.15)' : 'rgba(144, 179, 167, 0.05)'};
  border: 1px solid ${({ $active }) => $active ? 'rgba(144, 179, 167, 0.3)' : 'rgba(144, 179, 167, 0.1)'};
  border-radius: 8px;
  color: ${({ $active, theme }) => $active ? (theme?.colors?.primary || '#90B3A7') : (theme?.colors?.text?.primary || '#2C3E2D')};
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(144, 179, 167, 0.15);
    border-color: rgba(144, 179, 167, 0.3);
  }
`;

// =============================================================================
// HEADER COMPONENT
// =============================================================================

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef(null);

  // Check if route is active
  const isActive = (path) => location.pathname === path;

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangDropdownOpen(false);
  };

  // Get language display
  const getLanguageDisplay = () => {
    switch(i18n.language) {
      case 'en': return 'EN';
      case 'ru': return 'RU';
      case 'th': return 'TH';
      default: return 'EN';
    }
  };

  // Navigation links
  const navigationLinks = [
    { path: '/', label: t('navigation.home') },
    { path: '/restaurant', label: t('navigation.restaurant') },
    { path: '/spa', label: t('navigation.spa_and_beauty') },
    { path: '/sports', label: t('navigation.sports') },
    { path: '/contacts', label: t('navigation.contacts') },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const mobileNavVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { 
        type: 'spring',
        damping: 25,
        stiffness: 200
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  };

  return (
    <>
      <StyledHeader
        $scrolled={isScrolled}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <HeaderContainer>
          <HeaderContent>
            {/* Logo */}
            <Link to="/">
              <LogoContainer
                variants={logoVariants}
                whileHover="hover"
              >
                <Logo>KAIF</Logo>
              </LogoContainer>
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav>
              <NavList>
                {navigationLinks.map((link) => (
                  <NavItem key={link.path}>
                    <NavLink 
                      to={link.path} 
                      className={isActive(link.path) ? 'active' : ''}
                    >
                      {link.label}
                    </NavLink>
                  </NavItem>
                ))}
              </NavList>
            </DesktopNav>

            {/* Language Switcher & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <LanguageContainer ref={langDropdownRef}>
                <LanguageButton
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className={isLangDropdownOpen ? 'open' : ''}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {getLanguageDisplay()}
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </LanguageButton>

                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <DropdownContainer
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <LanguageOption 
                        $active={i18n.language === 'en'} 
                        onClick={() => changeLanguage('en')}
                        whileHover={{ x: 2 }}
                      >
                        English
                      </LanguageOption>
                      <LanguageOption 
                        $active={i18n.language === 'ru'} 
                        onClick={() => changeLanguage('ru')}
                        whileHover={{ x: 2 }}
                      >
                        Русский
                      </LanguageOption>
                      <LanguageOption 
                        $active={i18n.language === 'th'} 
                        onClick={() => changeLanguage('th')}
                        whileHover={{ x: 2 }}
                      >
                        ไทย
                      </LanguageOption>
                    </DropdownContainer>
                  )}
                </AnimatePresence>
              </LanguageContainer>

              {/* Mobile Menu Button */}
              <MobileNavButton
                onClick={() => setIsMobileMenuOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </MobileNavButton>
            </div>
          </HeaderContent>
        </HeaderContainer>
      </StyledHeader>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <MobileNavOverlay
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavContainer
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <MobileNavContent>
                <MobileNavHeader>
                  <LogoContainer>
                    <Logo style={{ fontSize: '1.5rem' }}>KAIF</Logo>
                  </LogoContainer>
                  <CloseButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </CloseButton>
                </MobileNavHeader>

                <MobileNavList>
                  {navigationLinks.map((link, index) => (
                    <MobileNavItem key={link.path}>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: index * 0.1 }
                        }}
                      >
                        <MobileNavLink
                          to={link.path}
                          className={isActive(link.path) ? 'active' : ''}
                        >
                          {link.label}
                        </MobileNavLink>
                      </motion.div>
                    </MobileNavItem>
                  ))}
                </MobileNavList>

                <MobileLanguageSection>
                  <MobileLanguageTitle>
                    {t('common.select_language')}
                  </MobileLanguageTitle>
                  <MobileLanguageGrid>
                    <MobileLanguageButton
                      $active={i18n.language === 'en'}
                      onClick={() => {
                        changeLanguage('en');
                        setIsMobileMenuOpen(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      EN
                    </MobileLanguageButton>
                    <MobileLanguageButton
                      $active={i18n.language === 'ru'}
                      onClick={() => {
                        changeLanguage('ru');
                        setIsMobileMenuOpen(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      RU
                    </MobileLanguageButton>
                    <MobileLanguageButton
                      $active={i18n.language === 'th'}
                      onClick={() => {
                        changeLanguage('th');
                        setIsMobileMenuOpen(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      TH
                    </MobileLanguageButton>
                  </MobileLanguageGrid>
                </MobileLanguageSection>
              </MobileNavContent>
            </MobileNavContainer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
