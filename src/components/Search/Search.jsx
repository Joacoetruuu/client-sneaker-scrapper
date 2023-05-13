import { useEffect, useState } from "react"
import { Nav } from "../nav/Nav"
import { CardSearch } from "./CardSearch"
import "./search.css"
import { Text, Center, Box} from '@chakra-ui/react'
import ButtonTop from "../ButtonTop/ButtonTop"
import { Filters } from "../Filters/Filters"



export function Search() {

  useState(() => {
    const path = decodeURIComponent(window.location.pathname);
    const arrayPath = path.split("/")
    const titleWindow = arrayPath[arrayPath.length-1]
    
    let titleMayus = titleWindow[0].toUpperCase() + titleWindow.slice(1);
    document.title = `${titleMayus} - Sneaker Scrapper`
  }, [])

  console.log(document.getElementsByClassName("spinner").length )

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
