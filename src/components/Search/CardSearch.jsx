import { useEffect, useState } from "react"
import { moov, getGrid, getDigital, newBalance, dexter,funcarral,drops } from "../../scripts/getSearch"
import { Text, Center, Box} from '@chakra-ui/react'


export function CardSearch() {
  
    

    const [moovResults, setMoov] = useState([]); 
    const [gridResults, setGrid] = useState([]); 
    const [digitalsportResults, setDigitalSport] = useState([]); 
    const [newBalanceResults, setNewBalance] = useState([]); 
    const [dexterResults, setDexter] = useState([]); 
    const [funcarralResults, setFuncarral] = useState([]); 
    const [dropsResults, setDrops] = useState([]); 

    const url = window.location.href
    const inputUrl = url.split("/")

    useEffect(() => {

        async function results(){
            setMoov(await moov(inputUrl[inputUrl.length - 1]))
            setGrid(await getGrid(inputUrl[inputUrl.length - 1]))
            setDigitalSport(await getDigital(inputUrl[inputUrl.length - 1]))
            setNewBalance(await newBalance(inputUrl[inputUrl.length - 1]))
            setDexter(await dexter(inputUrl[inputUrl.length - 1]))
            setFuncarral(await funcarral(inputUrl[inputUrl.length - 1]))
            setDrops(await drops(inputUrl[inputUrl.length - 1]))
        }
        results()

    }, [])

    useEffect(() => {

      async function results(){
          setMoov(await moov(inputUrl[inputUrl.length - 1]))
          setGrid(await getGrid(inputUrl[inputUrl.length - 1]))
          setDigitalSport(await getDigital(inputUrl[inputUrl.length - 1]))
          setNewBalance(await newBalance(inputUrl[inputUrl.length - 1]))
          setDexter(await dexter(inputUrl[inputUrl.length - 1]))
          setFuncarral(await funcarral(inputUrl[inputUrl.length - 1]))
          setDrops(await drops(inputUrl[inputUrl.length - 1]))
      }
      results()

  }, [inputUrl[inputUrl.length-1]])


    return (
        <>
        
        {
            dropsResults.status === 404 ? "" :

            dropsResults.map((e, index) => {
                const { title, price, href, img, storeLogo } = e;

                return(
                    <Center key={index}>
                    <div className="card">
                      <a href={href} target="_blank">
                        <img src={img} alt="" />
                        <img className="storeLogo" src={storeLogo} alt="" />
                        <p className="title">{title}</p>
                        <p className="price">{price.replace(",", ".")}</p>
                      </a>
                    </div>
                  </Center>
                )
            })
        }
        {
                        gridResults.status === 404 ? "" :

                        gridResults.map((e, index) => {
                            const { title, price, href, img, storeLogo } = e;
            
                            return(
                                <Center key={index}>
                                <div className="card">
                                  <a href={"https://www.grid.com.ar"+href} target="_blank">
                                    <img src={img} alt="" />
                                    <img className="storeLogo" src={storeLogo} alt="" />
                                    <p className="title">{title}</p>
                                    <p className="price">{price.replace(",", ".")}</p>
                                  </a>
                                </div>
                              </Center>
                            )
                        })
        }
        {
                        moovResults.status === 404 ? "" :

                        moovResults.map((e, index) => {
                            const { title, price, href, img, storeLogo } = e;
            
                            return(
                                <Center key={index}>
                                <div className="card">
                                  <a href={"https://www.moov.com.ar"+href} target="_blank">
                                    <img src={img} alt="" />
                                    <img style={{backgroundColor: "black"}} className="storeLogo" src={storeLogo} alt="" />
                                    <p className="title">{title}</p>
                                    <p className="price">{price.replace(",", ".")}</p>
                                  </a>
                                </div>
                              </Center>
                            )
                        })
        }
        {               
                        digitalsportResults.status === 404 ? "" :

                        digitalsportResults.map((e, index) => {
                            const { title, price, href, img, storeLogo } = e;
            
                            return(
                                <Center key={index}>
                                <div className="card">
                                  <a href={"https://digitalsport.com.ar"+href} target="_blank">
                                    <img src={img} alt="" />
                                    <img className="storeLogo" src={storeLogo} alt="" />
                                    <p className="title">{title}</p>
                                    <p className="price">{price.replace(",", ".")}</p>
                                  </a>
                                </div>
                              </Center>
                            )
                        })
        }
        {              
                        newBalanceResults.status === 404 ? "" :

                       newBalanceResults.map((e, index) => {
                        const { title, price, href, img, storeLogo } = e;
        
                        return(
                            <Center key={index}>
                            <div className="card">
                              <a href={href} target="_blank">
                                <img src={img} alt="" />
                                <img className="storeLogo" src={storeLogo} alt="" />
                                <p className="title">{title}</p>
                                <p className="price">{price.replace(",", ".")}</p>
                              </a>
                            </div>
                          </Center>
                        )
                    })
        }
        {              
                        dexterResults.status === 404 ? "" :

                        dexterResults.map((e, index) => {
                        const { title, price, href, img, storeLogo } = e;
        
                        return(
                            <Center key={index}>
                            <div className="card">
                              <a href={"https://www.dexter.com.ar"+href} target="_blank">
                                <img src={img} alt="" />
                                <img className="storeLogo" style={{backgroundColor: "black"}} src={storeLogo} alt="" />
                                <p className="title">{title}</p>
                                <p className="price">{price.replace(",", ".")}</p>
                              </a>
                            </div>
                          </Center>
                        )
                    })
        }

        </>
    )
}
