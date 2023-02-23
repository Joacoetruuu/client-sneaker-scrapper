import { useEffect, useState } from "react";
import { productDexter } from "../../../scripts/getProduct";
import { SkeletonDescription, SkeletonTitle, SkeletonPrice, SkeletonSizes, SkeletonImage } from "../grid/ProductSkeletonGrid";

export function ProductDexter() {
    const url = window.location.href; 
    const urlSplit = url.split("/")
  
    const [productData, setProductData] = useState([])
    const [mainPhoto, setMainPhoto] = useState("")

    
  
    function handleThumbnailClick(url) {
      setMainPhoto(url);
    }
  
    useEffect(() => {
  
      async function get(){
        setProductData(await productDexter(urlSplit[5], urlSplit[6] ))
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
                  <img src={productData[0].images} alt="" />
                  : 
                  SkeletonImage()
                } 
                  
              </div>
  
                    <div className="thumbnails">
                          {
                          productData[0] != undefined ?
                               <img src={productData[0].images} alt="" />
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
                        <img  style={{
                          position: "relative",
                          top: "1px",
                          
                        }} src="https://www.dexter.com.ar/on/demandware.static/Sites-Dexter-Site/-/default/dwd1e87af2/images/logo.svg" alt="" />
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
