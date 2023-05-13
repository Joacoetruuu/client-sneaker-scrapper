import React, { useState } from 'react'
import "./buttonTop.css"
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function ButtonTop() {
  
    

    const [isVisible, setIsVisible] = useState(false);

  // Función que hace scroll al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Función que controla la visibilidad del botón
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Añade un evento de escucha para controlar la visibilidad del botón
  window.addEventListener('scroll', toggleVisibility);

  return (
    <button
      aria-label="Ir hasta arriba de la página" title="Ir hasta arriba de la página"
      variant="primary"
      className={`scroll-to-top-btn ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
      <BsFillArrowUpCircleFill style={{"backgroundColor": "#0064fa", "padding":"5px","height":"40px", "width": "40px", "borderRadius": "20px", "color": "white"}}/>
    </button>
  );
  
}

export default ButtonTop