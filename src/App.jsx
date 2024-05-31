import React, { useState } from 'react';
import CustomNavbar from './components/CustomNavbar';
import { ReactComponent as NavDark } from './images/navbar-dark.svg';
import { ReactComponent as NavLight } from './images/navbar-light.svg';
import MainPage from './components/MainPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleGetStarted = () => {
    setActiveTab('signup');
  };

  return (
    <div className={`app-wrapper ${darkMode ? 'dark' : 'light'}`}>
      <CustomNavbar
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
        handleTabChange={handleTabChange}
        activeTab={activeTab}
      />
      {darkMode ? <NavDark className="theme-style" /> : <NavLight className="theme-style" />}
      <div className="main-container">
        {activeTab === 'home' && <MainPage darkMode={darkMode} onGetStarted={handleGetStarted} />}
        {activeTab === 'about' && <AboutUs darkMode={darkMode} />}
        {activeTab === 'contact' && <ContactUs darkMode={darkMode} />}
        {activeTab === 'signup' && <SignUp darkMode={darkMode} />}
      </div>
    </div>
  );
}

export default App;
