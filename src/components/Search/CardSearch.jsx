import { useEffect, useState } from "react"
import { moov, getGrid, getDigital, newBalance, dexter,drops } from "../../scripts/getSearch"
import { Text, Center, Box, Spinner} from '@chakra-ui/react'



export function CardSearch() {
  
    

    const [moovResults, setMoov] = useState([]); 
    const [gridResults, setGrid] = useState([]); 
    const [digitalsportResults, setDigitalSport] = useState([]); 
    const [newBalanceResults, setNewBalance] = useState([]); 
    const [dexterResults, setDexter] = useState([]); 
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
            setDrops(await drops(inputUrl[inputUrl.length - 1]))  
            setAdidasResults(await getAdidas(inputUrl[inputUrl.length - 1]).replace("?", ""))
            
            
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
          setDrops(await drops(inputUrl[inputUrl.length - 1]))
      }
      results()

  }, [inputUrl[inputUrl.length-1]])

    if(moovResults.length ==0 || gridResults.length ==0 || digitalsportResults.length == 0 || newBalanceResults.length == 0 || dexterResults== 0 || dropsResults ==0 ){
      return (
<div className="container">
    <div style={{display:"block"}}>
      <div className="spinner"></div> <br />
      <p>Espere por favor</p>
    </div>  


</div>

    )
    }
  
    document.getElementsByClassName("gridCardSearch")[0].style.gridGap = "70px"
    return (
        <>  
        
        {
                        gridResults.title === 404 ? ""  :

                        gridResults.map((e, index) => {
                            const { title, price, href, img, storeLogo } = e;

                            if(title === 404){
                              return
                            }else{

                              return(
                                <Center key={index}>
                                <div className="card">
                                  <a href={"../product/grid/"+href} target="_blank">
                                    <img src={img} alt="" />
                                    <img className="storeLogo" src={storeLogo} alt="" />
                                    <p className="title">{title}</p>
                                    <p className="price">{price.replace(",", ".") || price }</p>
                                  </a>
                                </div>
                              </Center>
                            )

                            }


                        })
        }
        {
                        moovResults.title === 404 ? "" :

                        moovResults.map((e, index) => {
                            const { title, price, href, img, storeLogo } = e;

                            if(title === 404){
                              return
                            }else{

                              return(
                                <Center key={index}>
                                <div className="card">
                                  <a href={`../product/moov/${href[1]}/${href[2]}`} target="_blank">
                                    <img src={img} alt="" />
                                    <img style={{backgroundColor: "black"}} className="storeLogo" src={storeLogo} alt="" />
                                    <p className="title">{title}</p>
                                    <p className="price">{price.replace(",", ".") || price }</p>
                                  </a>
                                </div>
                              </Center>
                            )

                            }


                        })
        }

{               
                        digitalsportResults.status === 404 ? "" :

                        digitalsportResults.map((e, index) => {
                            const { title, price, href, img, storeLogo } = e;

                            if(title === 404){
                              return
                            }else{
                              return(
                                <Center key={index}>
                                <div className="card">
                                  <a href={`../product/digitalsport/${href[1]}/${href[2]}/${href[3]}`} target="_blank">
                                    <img src={img} alt="" />
                                    <img className="storeLogo" src={storeLogo} alt="" />
                                    <p className="title">{title}</p>
                                    <p className="price">{price.replace(",", ".") || price }</p>
                                  </a>
                                </div>
                              </Center>
                            )
                            }
                        })
        }

        {



        }

        
        {              
                        dexterResults.title === 404 ? ""  :

                        dexterResults.map((e, index) => {
                        const { title, price, href, img, storeLogo } = e;
                        
                        if(title === 404){
                          return
                        }else{

                          return(
                            <Center key={index}>
                            <div className="card">
                              <a href={`../product/dexter/${href[1]}/${href[2]}`} target="_blank">
                                <img src={img} alt="" />
                                <img className="storeLogo" style={{backgroundColor: "black"}} src={storeLogo} alt="" />
                                <p className="title">{title}</p>
                                <p className="price">{price.replace(",", ".") || price}</p>
                              </a>
                            </div>
                          </Center>
                          )

                        }


                    })
        }


        {

          dropsResults.title === 404 ? ""  :

          dropsResults.map((e, index) => {
          const { title, price, href, img, storeLogo } = e;

          if(title === 404){
            return 
          }else{

              return(
                <Center key={index}>
                <div className="card">
                  <a href={`../product/drops/${href}`} target="_blank">
                    <img src={img} alt="" />
                    <img className="storeLogo"  src={storeLogo} alt="" />
                    <p className="title">{title}</p>
                    <p className="price">{price.replace(",", ".") || price}</p>
                  </a>
                </div>
              </Center>
            )

          }


          })



        }
        
        {              
                        newBalanceResults.title === 404 ? ""  :

                       newBalanceResults.map((e, index) => {
                        const { title, price, href, img, storeLogo } = e;
        
                        if(title === 404){
                          return
                        }else{
                          return(
                            <Center key={index}>
                            <div className="card">
                              <a href={`../product/newbalance/${href}`} target="_blank">
                                <img src={img} alt="" />
                                <img className="storeLogo" src={storeLogo} alt="" />
                                <p className="title">{title}</p>
                                <p className="price">{price.replace(",", ".") || price }</p>
                              </a>
                            </div>
                          </Center>
                        )
                        }


                    })
        }



        </>
    )



}
