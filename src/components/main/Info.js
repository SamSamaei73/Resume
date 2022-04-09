import React from 'react';
import '../../css/Info.css';
import { useTranslation } from 'react-i18next';
import { Fade } from "react-awesome-reveal";


const Info = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div id="Info">
      <Fade>
      <div className="Webinfo">
        <h3 className="forweb">{t('about')}</h3>
        <p>{t('p1')}</p>
        <p>{t('p2')}</p>
        <p>{t('p4')}</p>
        <p>{t('p3')}</p>
        <p>{t('p5')}</p>
        <p>{t('p6')}</p>
      </div>
      <div id="appinfo">
        <details>
          <summary className="forapp">{t('about')}</summary>
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <p>{t('p3')}</p>
          <p>{t('p5')}</p>
          <p>{t('p6')}</p>
        </details>
      </div>
      </Fade>
    </div>
  );
};

export default Info;
