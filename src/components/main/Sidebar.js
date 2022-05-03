import React from 'react';
import '../../css/Sidebar.css';
import instagram from '../../img/icons8-instagram-25.png';
import telegram from '../../img/icons8-telegram-app-25.png';
import whatsapp from '../../img/icons8-whatsapp-25.png';
import email from '../../img/icons8-gmail-25.png';
import github from '../../img/icons8-github-25.png';
import youtube from '../../img/icons8-youtube-25.png';
import ReactTooltip from 'react-tooltip';
import Linkedin from '../../img/icons8-linkedin-a-business-and-employment-oriented-service-mobile-app-25.png';
import { useTranslation } from 'react-i18next';
import { Fade } from "react-awesome-reveal";
import Muresume from '../../img/alireza.pdf';
import Logo from '../../img/myLogo.png';

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div id="Sidebar">
      <Fade>
        <div className='myLogo'>
           <img src={Logo} alt='mylogo'/>
        </div>
      <div className="Myphoto">
        <div className="blob"></div>
      </div>
      <div className="myname">
        <h3>{t('name')}</h3>
        <h4>{t('job')}</h4>
        <h4>{t('job2')}</h4>
        <h4>{t('job3')}</h4>
        <a href="mailto:alireza.samaei73@gmail.com" className="hoverstyle">
          {' '}
          <h4>alireza.samaei73@gmail</h4>
        </a>
        <a href="tel:09120185873" className="hoverstyle">
          {' '}
          <h4>{t('phoneNumber')}</h4>
        </a>
      </div>
      <div className="myApp">
        <div className="circle-wrapper">
          <div className="warning circle"></div>
          <div className="icon">
            <a href="https://telegram.me/samaei94" data-tip={t('telegram')}>
              <img src={telegram} alt="telegram"></img>
            </a>{' '}
          </div>
        </div>

        <div className="circle-wrapper">
          <div className="success circle"></div>
          <div className="icon">
            <a
              href="https://www.instagram.com/alirezasy94/"
              data-tip={t('instagram')}
            >
              <img src={instagram} alt="instagram"></img>
            </a>{' '}
          </div>
        </div>

        <div className="circle-wrapper">
          <div className="Link circle"></div>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/alireza-samaei"
              data-tip={t('Linedin')}
            >
              <img src={Linkedin} alt="instagram"></img>
            </a>{' '}
          </div>
        </div>

        <div className="circle-wrapper">
          <div className="git circle"></div>
          <div className="icon">
            <a href="https://github.com/SamSamaei73" data-tip={t('Github')}>
              <img src={github} alt="instagram"></img>
            </a>{' '}
          </div>
        </div>

        <div className="circle-wrapper">
          <div className="whats circle"></div>
          <div className="icon">
            <a
              href="whatsapp://send?text=Hello World!&phone=+989120185873"
              data-tip={t('whatsapp')}
            >
              <img src={whatsapp} alt="whatsapp"></img>
            </a>{' '}
          </div>
        </div>
        <div className="circle-wrapper">
          <div className="youtube circle"></div>
          <div className="icon">
            <a href="https://www.youtube.com/channel/UCzatONZFJlDVRBOM9gB134Q" data-tip={t('youtube')}>
              <img src={youtube} alt="youtube"></img>
            </a>{' '}
          </div>
        </div>

        <div className="circle-wrapper">
          <div className="gmail circle"></div>
          <div className="icon">
            <a href="mailto:alireza.samaei73@gmail.com" data-tip={t('Email')}>
              <img src={email} alt="email"></img>
            </a>{' '}
          </div>
        </div>
      </div>
      <div className="connectMe">
        <div className="btn">
     
          <a
            data-tip={t('resumeDown')}
            href={Muresume}
            data-effect="solid"
            download
          >
            {t('Download')}
          </a>
        </div>
        <div className="btn">
          <a data-tip={t('callme')} href="tel:09120185873" data-effect="solid">
            {t('Call')}
          </a>
        </div>
        <ReactTooltip />
      </div>
      </Fade>
    </div>
  );
};

export default Sidebar;
