import './App.css';
import React, { useState } from 'react';
import CustomNavbar from './components/CustomNavbar';
import { ReactComponent as NavDark } from './images/navbar-dark.svg';
import { ReactComponent as NavLight } from './images/navbar-light.svg';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <CustomNavbar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      {darkMode ? <NavDark className='theme-style dark' /> : <NavLight className='theme-style light' />}


    </div>
  );
}

export default App;
