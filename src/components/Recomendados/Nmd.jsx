import { useEffect, useState } from "react"
import { getDigital, getGrid } from "../../scripts/getSearch"
import { Text, Center, Box, Stack, SkeletonText } from '@chakra-ui/react'
import "./recomendados.css"
import { SkeletonRecomendados } from "./SkeletonRecomendados"


function Nmd() {

    const [nmd, setNmd] = useState([])

    useEffect(() => {

        async function get(){
            setNmd(await getDigital("nmd")); 

        }
        get()
    }, [])

    

    return (
    <>

    <div className="divJordan">
    <Center>
    <Box className="nameSection" bgGradient="linear(to-l, #3182ce, #0064fa)"> 

<Text
                            bg="white"
                            bgClip="text"
                            fontSize="2xl"
                            fontWeight="extrabold"
                            margin={"auto"}
                            >Nmd
                            </Text> 

</Box>
    </Center>

       
        {

            document.querySelector("div.cardLanding") === null ? 

            SkeletonRecomendados()

            :

            nmd.map((e, index) => {

                const {title, price, href, img, storeLogo} = e
                
                const parseNumber = parseFloat(price.replace("$", ""));
                
                if(index < 5){
                    return(
                                <Center key={index}>
                                <div className="cardLanding">
                                    <a href={`../product/digitalsport/${href[1]}/${href[2]}/${href[3]}`} target="_blank"> 
                                    <img src={img} alt=""/>
                                    <img className="storeLogo" src={storeLogo} alt="" />
                                    <p className="title">{title}</p>
                                    <p className="price">{parseNumber.toLocaleString("es-AR", { style: "currency", currency: "ARS" }).replace(",", ".")}</p>
                                    </a>
                                </div>
                                </Center>
                            


                    )
                }

            })
        }
    </div>
    </>
  )
}

export default Nmd