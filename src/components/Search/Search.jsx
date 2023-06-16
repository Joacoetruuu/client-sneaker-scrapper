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

  console.log(document.getElementsByClassName("spinner").length )

  return (
    <>  

        <Helmet>

          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="google-site-verification" content="j-SP6ZmFGOpT5af9IyzQyCasGRlTgrDU8d_HWvCqGKk" />
          <meta name="description" content={`${nameProduct} - Encontra las mejores zapatillas en Argentina con Todocalzado. Nuestro sitio realiza búsquedas en múltiples tiendas en línea para brindarte una amplia selección de zapatillas de las marcas más populares. Descubri los últimos modelos, compara precios y encontra las zapatillas ideales para vos.`}/>
          <meta name="robots" content="index, follow"/>
          <meta name="keywords" content="Zapatillas en Argentina, Buscador de zapatillas, Comparador de precios de zapatillas, Últimos modelos de zapatillas, Tiendas de zapatillas en línea, Marcas populares de zapatillas, Zapatillas de moda en Argentina, Comprar zapatillas en línea, Ofertas de zapatillas en Argentina, Catálogo de zapatillas en Argentina, Grid, Moov, Dexter, Drops, New Balance, Digital Sport, Todo Calzado, todocalzado"/>

        </Helmet>

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
