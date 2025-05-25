import { useTranslation } from 'react-i18next';
import PagePlaceholder from '../components/common/PagePlaceholder';

const ContactsPage = () => {
  const { t } = useTranslation();
  
  return (
    <PagePlaceholder 
      title={t('contacts.title')}
      description={t('contacts.form.title')}
      icon="📞"
    />
  );
};

export default ContactsPage;
