export const theme = {
  colors: {
    // KAIF Color Palette - УНИВЕРСАЛЬНАЯ СХЕМА ДЛЯ МНОГОФУНКЦИОНАЛЬНОГО КОМПЛЕКСА
    primary: '#90B3A7',      // Мягкий зеленый чай (спа, релакс)
    secondary: '#D4A574',    // Теплый терракот (элегантность, ресторан)
    tertiary: '#B8C4A8',     // Оливковый (природный баланс)
    
    // ЭНЕРГИЧНЫЕ АКЦЕНТЫ ДЛЯ АКТИВНЫХ ЗОН
    energy: '#E8734A',       // Динамичный оранжевый (спорт, энергия)
    power: '#2D5B69',        // Глубокий сине-зеленый (сила, боевые искусства)
    fresh: '#4A90B8',        // Свежий голубой (бассейн, активность)
    
    background: '#F5F3F0',   // Молочный (основной фон)
    surface: '#FFFFFF',      // Чистый белый (карточки)
    surfaceSecondary: '#FDFCFA', // Очень светлый кремовый
    
    // Text colors
    text: {
      primary: '#2C3E2D',    // Темно-зеленый для основного текста
      secondary: '#5A6B5D',  // Средний зеленый для вторичного текста
      light: '#8B9A8E',      // Светлый зеленый для подписей
      white: '#FFFFFF',      // Белый для темных фонов
      dark: '#1A2B1D',       // Очень темный для заголовков
    },

    // ЗОНАЛЬНЫЕ ЦВЕТА ДЛЯ РАЗНЫХ УСЛУГ
    zones: {
      spa: '#90B3A7',        // Спа и релакс
      restaurant: '#D4A574', // Ресторан
      fitness: '#E8734A',    // Спортзал
      combat: '#2D5B69',     // Боевые искусства
      pool: '#4A90B8',       // Бассейн
      beauty: '#C8A8E9',     // Салон красоты
      sauna: '#8B7355',      // Баня и хаммам
    },

    // Status colors - обновленная палитра
    success: '#7FB069',      // Природный зеленый
    warning: '#E9B44C',      // Золотистый
    error: '#E07A5F',        // Мягкий коралл
    info: '#4A90B8',         // Свежий голубой

    // Градиенты - разнообразные для разных зон
    gradients: {
      primary: 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)',
      secondary: 'linear-gradient(135deg, #D4A574 0%, #E1B885 100%)',
      energy: 'linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)',
      power: 'linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)',
      fresh: 'linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)',
      
      // Зональные градиенты
      spa: 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 50%, #A8C5B8 100%)',
      fitness: 'linear-gradient(135deg, #E8734A 0%, #D4A574 50%, #F28A5F 100%)',
      combat: 'linear-gradient(135deg, #2D5B69 0%, #1A2B1D 50%, #3D7084 100%)',
      pool: 'linear-gradient(135deg, #4A90B8 0%, #90B3A7 50%, #5FA3CC 100%)',
      
      // Универсальные
      nature: 'linear-gradient(135deg, #B8C4A8 0%, #A8C5B8 50%, #90B3A7 100%)',
      wellness: 'linear-gradient(45deg, #F5F3F0 0%, #E8E5E0 100%)',
      hero: 'linear-gradient(135deg, rgba(144, 179, 167, 0.9) 0%, rgba(232, 115, 74, 0.2) 50%, rgba(212, 165, 116, 0.8) 100%)',
      
      // Динамичные градиенты для активных зон
      dynamic: 'linear-gradient(45deg, #E8734A 0%, #2D5B69 50%, #4A90B8 100%)',
      strength: 'linear-gradient(135deg, #2D5B69 0%, #E8734A 100%)',
    },

    // Overlay colors - обновленные
    overlay: {
      light: 'rgba(245, 243, 240, 0.9)',
      medium: 'rgba(144, 179, 167, 0.8)',
      dark: 'rgba(44, 62, 45, 0.7)',
      energy: 'rgba(232, 115, 74, 0.8)',
      power: 'rgba(45, 91, 105, 0.8)',
    }
  },

  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    heading: '"Poppins", -apple-system, BlinkMacSystemFont, sans-serif', // Меняем на более сильный шрифт
    elegant: '"Playfair Display", Georgia, serif', // Элегантный для спа
    strong: '"Oswald", Impact, sans-serif', // Сильный для спорта (добавим в HTML)
    mono: '"JetBrains Mono", Consolas, monospace',
  },

  // Responsive breakpoints
  breakpoints: {
    xs: '480px',
    sm: '640px', 
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Enhanced shadows for modern complex
  shadows: {
    xs: '0 1px 2px 0 rgba(144, 179, 167, 0.05)',
    sm: '0 1px 3px 0 rgba(144, 179, 167, 0.08), 0 1px 2px 0 rgba(144, 179, 167, 0.06)',
    md: '0 4px 6px -1px rgba(144, 179, 167, 0.08), 0 2px 4px -1px rgba(144, 179, 167, 0.06)',
    lg: '0 10px 15px -3px rgba(144, 179, 167, 0.08), 0 4px 6px -2px rgba(144, 179, 167, 0.05)',
    xl: '0 20px 25px -5px rgba(144, 179, 167, 0.08), 0 10px 10px -5px rgba(144, 179, 167, 0.04)',
    '2xl': '0 25px 50px -12px rgba(144, 179, 167, 0.25)',
    
    // Энергичные тени
    glow: '0 0 20px rgba(144, 179, 167, 0.15)',
    glowSecondary: '0 0 20px rgba(212, 165, 116, 0.15)',
    glowEnergy: '0 0 25px rgba(232, 115, 74, 0.2)',
    glowPower: '0 0 25px rgba(45, 91, 105, 0.2)',
    glowFresh: '0 0 25px rgba(74, 144, 184, 0.2)',
    
    // Динамичные тени
    dynamic: '0 8px 32px rgba(232, 115, 74, 0.15), 0 4px 16px rgba(45, 91, 105, 0.1)',
    strong: '0 12px 40px rgba(45, 91, 105, 0.2), 0 6px 20px rgba(232, 115, 74, 0.1)',
  },

  // Border radius values
  borderRadius: {
    none: '0',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '32px',
    full: '50%',
    organic: '40% 60% 70% 30% / 40% 50% 60% 50%',
    dynamic: '20px 40px 20px 40px', // Динамичная форма
  },

  // Animation timing - обновленные для разных зон
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms',
      dynamic: '200ms', // Быстрые анимации для активных зон
    },
    easing: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      natural: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      // Новые для энергичных анимаций
      power: 'cubic-bezier(0.19, 1, 0.22, 1)', // Мощные движения
      dynamic: 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Динамичные переходы
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)', // Резкие движения для спорта
    }
  },

  // Spacing scale
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },

  // Z-index scale
  zIndex: {
    hide: -1,
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  }
};
