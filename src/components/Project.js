import React, { useState } from 'react';
import '../css/Project.css';
import project from '../img/6.jpg';
import daily from '../img/dailyscr.jpg';
import darman from '../img/2.jpg';
import { useTranslation } from 'react-i18next';
import CustomPopup from './main/CustomPopup';



const Project = () => {
  const { t } = useTranslation();

  const [Darman, setDarman] = useState(false);
  const [Darmani, setDarmani] = useState(false);
  

  const popupCloseHandler = (e) => {
    setDarman(e);
    setDarmani(e);
    
  };
  return (
    <div id="project">
      <div className="proStyle">
        <div className="proTittle">
          <h2>{t('PROJEC')}</h2>
        </div>
        <div className="proinfo">
          <div className="perspective">
            <div className="pro">
              <div className="prophoto" >
                <img src={project} alt="pro" onClick={(e) => setDarman(!Darman)} />
                  
              </div>
              <div className="aboutpro">
                <h4>{t('moshanir')}</h4>
              </div>
            </div>
          </div>
          <CustomPopup
                   onClose={popupCloseHandler}
                   show={Darman}
           >
                          <img src={project} alt='darman'/>
                    </CustomPopup>
          <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <a href="http://dailyscribe.ir/">
                  <img src={daily} alt="pro" />
                </a>
              </div>
              <div className="aboutpro">
                <a href="http://dailyscribe.ir/">
                  {' '}
                  <h4>{t('dailyscribe')}</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <img src={darman} alt="pro" onClick={(e) => setDarmani(!Darmani)} />
              </div>
              <div className="aboutpro">
                <h4>{t('darman')}</h4>
              </div>
            </div>
          </div>
          <CustomPopup
                   onClose={popupCloseHandler}
                   show={Darmani}
           >
                          <img src={darman} alt='darman'/>
                    </CustomPopup>
        </div>
      </div>
    </div>
  );
};

export default Project;
