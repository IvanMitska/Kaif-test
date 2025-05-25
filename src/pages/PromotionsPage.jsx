import { useTranslation } from 'react-i18next';
import PagePlaceholder from '../components/common/PagePlaceholder';

const PromotionsPage = () => {
  const { t } = useTranslation();
  
  return (
    <PagePlaceholder 
      title={t('promotions.title')}
      description={t('promotions.description')}
      icon="🎁"
    />
  );
};

export default PromotionsPage;
