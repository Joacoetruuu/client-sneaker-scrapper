import { useEffect, useState } from "react";
import { productDigitalSport } from "../../../scripts/getProduct";
import "./productDigitalSport.css"
import { SkeletonDescription, SkeletonImage, SkeletonPrice, SkeletonTitle, SkeletonSizes } from "../grid/ProductSkeletonGrid";

export function ProductDigitalSport() {
    
    
    const url = window.location.href; 
    const urlSplit = url.split("/")
    
    const [productData, setProductData] = useState([])
    const [mainPhoto, setMainPhoto] = useState("")
  
  
    function handleThumbnailClick(url) {
      setMainPhoto(url);
    }
  
    useEffect(() => {
  
      async function get(){
        console.log(urlSplit)
        setProductData(await productDigitalSport(urlSplit[5], urlSplit[6], urlSplit[7]))
        
      }
      get();
    }, [])

      
    useEffect(() => {
      productData[0] != undefined ? 
      document.title = productData[0].title :
      "Sneaker Scrapper"
    }, [productData])
  
    return (
      <div className="divProduct">
  
          <div className="galery">
  
            
  
              <div className="main-image" >
                {
  
                  productData[0] != undefined ? 
                  <img src={mainPhoto} alt="" />
                  : 
                  SkeletonImage()
                }
                  
              </div>
  
                    <div className="thumbnails">
                          {
                          productData[0] != undefined ?
                          productData[0].images.map(image => (
                            
                            mainPhoto === "" ? setMainPhoto(`https://digitalsport.com.ar${productData[0].images[0]}`): 
                            <img src={`https://digitalsport.com.ar${image}`}  onClick={() => handleThumbnailClick(`https://digitalsport.com.ar${image}`)} />
                          ))
                          :
                            ""
                          }
                  </div>
  
          </div>
          
          <div className="infoProduct">
              <h1>
                {
                  productData[0] != undefined ? 
                  productData[0].title : 
                  SkeletonTitle()
                }
              </h1>
              <p className="price">
                {
                  productData[0] != undefined ? 
                  productData[0].price.replace(",", ".") : 
                  SkeletonPrice()
                }
              </p>
  
                <div>
                  {
  
                    productData[0] != undefined ? 
                    <>
                      <p className="talle">Talles</p>
                      <ul>
                        {
                          productData[0] != undefined ? 
                          productData[0].sizes.map((e) => {
                            return <li>{e}</li>
                          })
                          :
                          ""
                        }
                      </ul>                  
                    </>
  
  
                    :
                      SkeletonSizes()
                  }
  
                </div>
                
                {
  
                  productData[0] != undefined ?  
  
                  <button className="comprar" onClick={() =>{
                    productData[0] != undefined ? 
                      window.location.href = productData[0].url
                    : ""
                  }}>
                      Comprar {
                        <img style={{height:"20px", width:"20px", margin:"auto",                         position: "relative",
                        top: "5px",}} src="https://external-content.duckduckgo.com/ip3/www.digitalsport.com.ar.ico" alt="" />
                      }
                  </button>
                  :
                  SkeletonSizes()
                }
  
  
                  
                    
          </div>
          
          <div className="description">
                {
  
                  productData[0] != undefined ? 
  
                  <>
                  
                  <h4>
                    Descripción
                  </h4>
                    <p>
                      {
                        productData[0] != undefined ? 
                        productData[0].description
                        : 
                        SkeletonDescription()
                      }
                    </p>
  
                  
                  </>
                  :
                  SkeletonDescription()
                }
  
          </div>
  
      </div>
    )
}
