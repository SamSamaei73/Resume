import React from 'react';
import '../css/Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="footer">
      <h3>{t('footer')}</h3>
    </div>
  );
};

export default Footer;
