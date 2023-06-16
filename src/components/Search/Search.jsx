import { useEffect, useState } from "react"
import { Nav } from "../nav/Nav"
import { CardSearch } from "./CardSearch"
import "./search.css"
import { Text, Center, Box} from '@chakra-ui/react'
import ButtonTop from "../ButtonTop/ButtonTop"
import { Filters } from "../Filters/Filters"
import { Footer } from "../Footer/Footer"
import { Helmet } from "react-helmet";


export function Search() {

  const [nameProduct, setNameProduct] = useState("");

  useState(() => {
    const path = decodeURIComponent(window.location.pathname);
    const arrayPath = path.split("/")
    const titleWindow = arrayPath[arrayPath.length-1]
    
    let titleMayus = titleWindow[0].toUpperCase() + titleWindow.slice(1);
    setNameProduct(titleMayus)
    document.title = `${titleMayus} - Todo Calzado`
  }, [])

  return (
    <>  
          <Box
            width={"100%"}
            height="5px"            
            bgGradient="linear(to-l, #3182ce, #0064fa)"
            marginTop={"10px"}
          />
      
          <div className="gridCardSearch" >
              <CardSearch/>
              
          </div>
          
          <ButtonTop></ButtonTop>
        
        
    </>
  )
  
}
