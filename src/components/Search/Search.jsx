import { useEffect, useState } from "react"
import { Nav } from "../nav/Nav"
import { CardSearch } from "./CardSearch"
import "./search.css"
import { Text, Center, Box} from '@chakra-ui/react'
import ButtonTop from "../ButtonTop/ButtonTop"
export function Search() {

  return (
    <>  
          <Box
            width={"100%"}
            height="5px"            
            bgGradient="linear(to-l, #3182ce, #0064fa)"
          />
        
        
        <div className="gridCardSearch">
            <CardSearch/>
        </div>
        <ButtonTop></ButtonTop>
    </>
  )
}
