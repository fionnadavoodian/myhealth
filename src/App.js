import './App.css';
import React, { useState } from 'react';
import CustomNavbar from './components/CustomNavbar';
import { ReactComponent as ImageDark } from './images/navbar-dark.svg';
import { ReactComponent as ImageLight } from './images/navbar-light.svg';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <CustomNavbar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      {darkMode ? <ImageDark className='theme-style dark' /> : <ImageLight className='theme-style light' />}


    </div>
  );
}

export default App;
