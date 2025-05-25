import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';

// Import i18n configuration
import './i18n';

// Import styles
import './index.css';

import { theme } from './theme';
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import SpaPage from './pages/SpaPage';
import SportsPage from './pages/SportsPage';
import BeautyPage from './pages/BeautyPage';
import AboutPage from './pages/AboutPage';
import PromotionsPage from './pages/PromotionsPage';
import ContactsPage from './pages/ContactsPage';

function App() {
  const { i18n } = useTranslation();

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/restaurant" element={<RestaurantPage />} />
              <Route path="/spa" element={<SpaPage />} />
              <Route path="/sports" element={<SportsPage />} />
              <Route path="/beauty" element={<BeautyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/promotions" element={<PromotionsPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
