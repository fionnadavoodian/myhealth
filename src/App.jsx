import './App.css';
import React, { useState } from 'react';
import CustomNavbar from './components/CustomNavbar';
import { ReactComponent as NavDark } from './images/navbar-dark.svg';
import { ReactComponent as NavLight } from './images/navbar-light.svg';
import MainPage from './components/MainPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className={`app-wrapper ${darkMode ? 'dark' : 'light'}`}>
        <CustomNavbar darkMode={darkMode} handleThemeChange={handleThemeChange} handleTabChange={handleTabChange} activeTab={activeTab} />
        {darkMode ? <NavDark className='theme-style' /> : <NavLight className='theme-style' />}
        {activeTab === 'home' ? <MainPage darkMode={darkMode} /> : activeTab === 'about' ? <AboutUs darkMode={darkMode} /> : <ContactUs darkMode={darkMode} />}
      </div>




      {/* <MainPage darkMode={darkMode} /> */}
    </>
  );
}

export default App;
