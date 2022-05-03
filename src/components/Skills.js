import React from 'react';
import '../css/Skills.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import html from '../img/icons8-html-5-48.png';
import css from '../img/icons8-css3-48.png';
import js from '../img/icons8-javascript-48.png';
import reactl from '../img/icons8-react-native-48.png';
import bootstrap from '../img/icons8-bootstrap-48.png';
import angular from '../img/icons8-angular-a-typescript-based-open-source-web-application-framework-48.png';
import Csharp from '../img/icons8-c-sharp-logo-96.png';
import sql from '../img/icons8-sql-48.png';
import sharepoint from '../img/icons8-microsoft-sharepoint-48.png';
import webd from '../img/icons8-web-design-48.png';
import sassp from '../img/icons8-sass-48.png';
import figmas from '../img/icons8-figma-48.png';
import ux from '../img/icons8-browser-48.png';
import responsive from '../img/icons8-responsive-48.png';
import seo from '../img/icons8-seo-48.png';
import { useTranslation } from 'react-i18next';
import { Fade } from "react-awesome-reveal";



const Skills = () => {
  const { t } = useTranslation();

  return (
    <div id="Skillstyle">
      <Fade>
      <div className="skills">
        <div className="skillsTittle">
          <h2>{t('skills')}</h2>
        </div>
        <div className="items">
          <div className="item">
            <div className="progressTittle">
              <h4>90%</h4>
              <label>HTML5</label>
            </div>
            <div className="progress">
              <div
                className="progressBar html"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>90%</h4>
              <label>CSS3</label>
            </div>
            <div className="progress">
              <div
                className="progressBar css"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>60%</h4>
              <label>Java Script</label>
            </div>
            <div className="progress">
              <div
                className="progressBar js"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>90%</h4>
              <label>Web Design</label>
            </div>
            <div className="progress">
              <div
                className="progressBar Design"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>70%</h4>
              <label>UI/UX</label>
            </div>
            <div className="progress">
              <div
                className="progressBar UI"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>60%</h4>
              <label>React</label>
            </div>
            <div className="progress">
              <div
                className="progressBar react"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>60%</h4>
              <label>Sass</label>
            </div>
            <div className="progress">
              <div
                className="progressBar sass"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>70%</h4>
              <label>Figma</label>
            </div>
            <div className="progress">
              <div
                className="progressBar figma"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>40%</h4>
              <label>C#</label>
            </div>
            <div className="progress">
              <div
                className="progressBar cc"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>40%</h4>
              <label>SQL</label>
            </div>
            <div className="progress">
              <div
                className="progressBar sql"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>95%</h4>
              <label>Responsive</label>
            </div>
            <div className="progress">
              <div
                className="progressBar Responsive"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>50%</h4>
              <label>Share Point</label>
            </div>
            <div className="progress">
              <div
                className="progressBar share"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>85%</h4>
              <label>Bootstrap</label>
            </div>
            <div className="progress">
              <div
                className="progressBar Bootstrap"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>30%</h4>
              <label>Angular</label>
            </div>
            <div className="progress">
              <div
                className="progressBar Angular"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="item">
            <div className="progressTittle">
              <h4>50%</h4>
              <label>SEO</label>
            </div>
            <div className="progress">
              <div
                className="progressBar SEO"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="skillApp">
          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={90}>
              <img style={{ width: 40, marginTop: -5 }} src={html} alt="doge" />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>90%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={90}>
              <img style={{ width: 40, marginTop: -5 }} src={css} alt="doge" />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>90%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={60}>
              <img style={{ width: 40, marginTop: -5 }} src={js} alt="doge" />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>60%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={60}>
              <img
                style={{ width: 40, marginTop: -5 }}
                src={reactl}
                alt="doge"
              />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>60%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>


          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={85}>
              <img
                style={{ width: 40, marginTop: -5 }}
                src={bootstrap}
                alt="doge"
              />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>85%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>


          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={60}>
              <img
                style={{ width: 40, marginTop: -5 }}
                src={sassp}
                alt="doge"
              />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>60%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>


          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={70}>
              <img
                style={{ width: 40, marginTop: -5 }}
                src={figmas}
                alt="doge"
              />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>70%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>



          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={30}>
              <img
                style={{ width: 40, marginTop: -5 }}
                src={angular}
                alt="doge"
              />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>30%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={40}>
              <img
                style={{ width: 40, marginTop: -5 }}
                src={Csharp}
                alt="doge"
              />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>40%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={40}>
              <img style={{ width: 40, marginTop: -5 }} src={sql} alt="doge" />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>40%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={50}>
              <img
                style={{ width: 40, marginTop: -5 }}
                src={sharepoint}
                alt="doge"
              />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>50%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={90}>
              <img style={{ width: 40, marginTop: -5 }} src={webd} alt="doge" />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>90%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={70}>
              <img style={{ width: 40, marginTop: -5 }} src={ux} alt="doge" />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>70%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={95}>
              <img
                style={{ width: 40, marginTop: -5 }}
                src={responsive}
                alt="doge"
              />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>95%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 100, height: 100, margin: '0.5rem' }}>
            <CircularProgressbarWithChildren value={50}>
              <img style={{ width: 40, marginTop: -5 }} src={seo} alt="doge" />
              <div style={{ fontSize: 12, marginTop: 0 }}>
                <strong>50%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default Skills;
