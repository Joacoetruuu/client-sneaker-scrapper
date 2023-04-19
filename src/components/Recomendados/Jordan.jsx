import { useEffect, useState } from "react"
import { getGrid } from "../../scripts/getSearch"
import { Text, Center, Box, Stack, SkeletonText } from '@chakra-ui/react'
import "./recomendados.css"
import { SkeletonRecomendados } from "./SkeletonRecomendados";



function Jordan() {
  const [jordan, setJordan] = useState([]);

  useEffect(() => {
    async function get() {
      setJordan(await getGrid("jordan 1"));
    }
    get();
  }, []);

  return (

    jordan != [] ? 

    <>
      <div className="divJordan">
        <Center>
          <Box
            className="nameSection"
            bgGradient="linear(to-l, #3182ce, #0064fa)"
          >
            <Text
              bg="white"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              margin={"auto"}
            >
              Jordan
            </Text>
          </Box>
        </Center>
        {
        document.querySelector("div.cardLanding") === null ? 
        
        SkeletonRecomendados()

        : 
                  
        jordan?.map((e, index) => {

          

          const { title, price, href, img, storeLogo } = e;

          if (index < 5) {
            return (
              <Center key={index}>
                <div className="cardLanding">
                  <a href={"/product/grid/"+href } target="_blank">
                    <img src={img} alt="" />
                    <img className="storeLogo" src={storeLogo} alt="" />
                    <p className="title">{title}</p>
                    <p className="price">{price.replace(",", ".") || price}</p>
                  </a>
                </div>
              </Center>
            );
          }
        })}

      </div>
    </>

    :
    ""
  );
}

export default Jordan