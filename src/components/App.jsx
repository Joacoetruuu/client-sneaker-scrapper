import { useEffect, useState } from "react"
import { CarouselStores } from "./CarouselStores/CarouselStores"
import { Nav } from "./nav/Nav"
import {Box} from '@chakra-ui/react'
import Jordan from "./Recomendados/Jordan"
import { Banners } from "./Banners/Banners"
import Nmd from "./Recomendados/Nmd"
import { Footer } from "./Footer/Footer"

function App() {


  const [inputUser, setInputUser] = useState("");

  return (
    <>
      <CarouselStores/>
      <Box w='100%' h='20px' bgGradient='linear(to-l, #3182ce, #0064fa)' />
      <Jordan/>
      <Banners/>
      <Nmd/>
      <Footer/>
    </>
  )
}

export default App
