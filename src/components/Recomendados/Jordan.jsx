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
              as={"h2"}
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
                    <img loading="lazy" src={img} alt={title} title={title} />
                    <img loading="lazy" className="storeLogo" src={storeLogo} alt={href} />
                    <h2 className="title">{title}</h2>
                    <h3 className="price">{price.replace(",", ".") || price}</h3>
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