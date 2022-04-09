import { useState,useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Skills from './components/Skills';
import { GlobalStyles } from './components/Nightday/Global';
import { lightTheme, darkTheme } from './components/Nightday/Theme';
import { ThemeProvider } from 'styled-components';
import Toggle from './components/Nightday/Toggle';
import { useDarkMode } from './components/Nightday/useDarkMode';
import Certificate from './components/Certificate';
import Records from './components/Records';
import Footer from './components/Footer';
import Project from './components/Project';
import { useTranslation } from 'react-i18next';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import { Fade } from "react-awesome-reveal";


function App() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[]);

  const { t, i18n } = useTranslation();
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }
  const override = css`
  display: flex;
  margin: 15rem auto;
`;
  return (
    <div id="App">
{
  loading ?
  <HashLoader
  color={'#5979D1'} loading={loading} css={override} size={150} />

  :
  <div>
      <div className="daynight">
        <div className="flexside">
      <select
        className="custom-select"
        onChange={changeLanguageHandler}
      >
        <option value="fa">فارسی 🇮🇷 </option>
        <option value="en"> 🇬🇧 English </option>
      </select>

        </div>
        <div className="btnNight">
          <ThemeProvider theme={themeMode}>
            <>
              <GlobalStyles />
              <Toggle theme={theme} toggleTheme={toggleTheme} />
              {/* <h1 style={{ fontSize: '15px' }}>
                {t('theme')} {theme === 'light' ? t('day') : t('night')}
              </h1> */}
            </>
          </ThemeProvider>
        </div>
      </div>
      <div className="container">
        <Navbar />
        <Main />
        <Skills />
        <Certificate />
        <Fade>
        <Records />
        </Fade>
        <Fade>
        <Project />
        </Fade>
        <Footer />
      </div>
      </div>
}
    </div>
  );
}

export default App;
