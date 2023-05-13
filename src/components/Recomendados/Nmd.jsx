import { useEffect, useState } from "react";
import { getDigitalLanding } from "../../scripts/getSearch";
import { Text, Center, Box, Stack, SkeletonText } from "@chakra-ui/react";
import "./recomendados.css";
import { SkeletonRecomendados } from "./SkeletonRecomendados";

function Nmd() {
  const [nmd, setNmd] = useState([]);

  useEffect(() => {
    async function get() {
      setNmd(await getDigitalLanding("nmd"));
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
              as={"h2"}
              bg="white"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              margin={"auto"}
            >
              Nmd
            </Text>
          </Box>
        </Center>

        {document.querySelector("div.cardLanding") === null
          ? SkeletonRecomendados()
          : nmd.map((e, index) => {
              const { title, price, href, img, storeLogo } = e;

              const parseNumber = parseFloat(price.replace("$", ""));

              if (index < 5) {
                return (
                  <Center key={index}>
                    <div className="cardLanding">
                      <a
                        href={`../product/digitalsport/${href[1]}/${href[2]}/${href[3]}`}
                        target="_blank"
                      >
                        <img loading="lazy" alt={title} title={title} src={img} />
                        <img loading="lazy" className="storeLogo" src={storeLogo} alt="" />
                        <h2 className="title">{title}</h2>
                        <h3 className="price">
                          {parseNumber
                            .toLocaleString("es-AR", {
                              style: "currency",
                              currency: "ARS",
                            })
                            .replace(",", ".")}
                        </h3>
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

export default Nmd;
