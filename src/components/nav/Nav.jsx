import "./nav.css"
import {Center} from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai";
import Title from "../Title";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Box} from '@chakra-ui/react'


const isDarkMode = localStorage.getItem("darkMode")

export function Nav() {

  const [inputUser, setInputUser] = useState("second")

  const navigate = useNavigate();



  async function handleSubmit(event) {
        
        navigate('/search/'+inputUser);
  }

  return (
    <header className="header">
      <a href="/" style={{cursor:"pointer"}}>
        <Title/>
      </a>
      <nav>
        <form action="" onSubmit={e => handleSubmit(e)}>
          
          <input aria-label="Ingresa el modelo de la zapatilla" type="text" autoFocus onChange={e => {
            setInputUser(e.target.value)
            localStorage.setItem("search", e.target.value)
          
          }}/>
          <button aria-label="Enviar formulario" title="Haz clic para enviar el formulario" ><AiOutlineSearch></AiOutlineSearch> <p style={{display:"none"}}>Buscar</p></button>
        </form>



      </nav>
          
    </header>
  )
}
