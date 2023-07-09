import React, { useState, useEffect } from 'react';

import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);

    if (isDarkMode) {
      document.body.classList.add('darkmode');
      
    } else {
      document.body.classList.remove('darkmode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? <BsFillSunFill/> : <BsFillMoonFill/>}
    </button>
  );
};

export default DarkModeToggle;