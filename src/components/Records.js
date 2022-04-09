import React from 'react';
import '../css/Records.css';
import { useTranslation } from 'react-i18next';
import "use-slider/lib/slider.min.css";


const Records = () => {
  const { t } = useTranslation();

  
  


  return (
    <div id="Records">
      <div className="recorditem">
        <div className="recordtittle">
          <h2>{t('records')}</h2>
        </div>
        <div className="recordinfo">
           <div className='recordItems'>{t('R1')}</div>
           <div className='recordItems'>{t('R6')}</div>
           <div className='recordItems'>{t('R2')}</div>
           <div className='recordItems'>{t('R3')}</div>
           <div className='recordItems'>{t('R4')}</div>
        </div>
        <div className='recordinfoApp'>
          <ul>
            <li>{t('R1')}</li>
            <li>{t('R6')}</li>
            <li>{t('R2')}</li>
            <li>{t('R3')}</li>
            <li>{t('R4')}</li>
          </ul>
          <h4>{t('R5')}</h4>
        </div>
      </div>
    </div>
  );
};

export default Records;
