import { useEffect, useState } from "react"
import { getGrid } from "../../scripts/getSearch"
import { Text, Center, Box} from '@chakra-ui/react'
import "./recomendados.css"

function Jordan() {
  const [jordan, setJordan] = useState([]);

  useEffect(() => {
    async function get() {
      setJordan(await getGrid("jordan"));
    }
    get();
  }, []);

  return (
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

        {jordan.map((e, index) => {
          const { title, price, href, img, storeLogo } = e;

          if (index < 5) {
            return (
              <Center key={index}>
                <div className="cardLanding">
                  <a href={"https://www.grid.com.ar" + href} target="_blank">
                    <img src={img} alt="" />
                    <img className="storeLogo" src={storeLogo} alt="" />
                    <p className="title">{title}</p>
                    <p className="price">{price.replace(",", ".")}</p>
                  </a>
                </div>
              </Center>
            );
          }
        })}
      </div>
    </>
  );
}

export default Jordan