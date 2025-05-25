import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PlaceholderContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const PagePlaceholder = ({ title, description, icon = '🏗️' }) => {
  const { t } = useTranslation();
  
  return (
    <PlaceholderContainer>
      <div className="text-5xl mb-6">{icon}</div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 max-w-2xl mb-8">{description}</p>
      <Link to="/" className="btn-primary">
        {t('navigation.home')}
      </Link>
    </PlaceholderContainer>
  );
};

export default PagePlaceholder;
