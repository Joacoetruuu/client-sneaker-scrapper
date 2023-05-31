import { useEffect, useState } from "react";
import { productNewBalance } from "../../../scripts/getProduct";
import { SkeletonDescription, SkeletonTitle, SkeletonPrice, SkeletonSizes, SkeletonImage } from "../grid/ProductSkeletonGrid";

export function ProductNewBalance() {

    const url = window.location.href; 
    const urlSplit = url.split("/")
  
    const [productData, setProductData] = useState([])
    const [mainPhoto, setMainPhoto] = useState("")
  
  
    function handleThumbnailClick(url) {
      setMainPhoto(url);
    }
  
    useEffect(() => {
  
      async function get(){
        setProductData(await productNewBalance(urlSplit[5]))
        
    }
      get();

    }, [])
  

    
  useEffect(() => {
    productData[0] != undefined ? 
    document.title = productData[0].title :
    "Todo Calzado"
  }, [productData])

    return (
      <div className="divProduct">
  
          <div className="galery">
  
              <div className="main-image" >
                {
  
                  productData[0] != undefined ? 
                  <img src={productData[0].image} alt="" />
                  : 
                  SkeletonImage()
                } 
                  
              </div>
  
                    <div className="thumbnails">
                          {
                          productData[0] != undefined ?
                               <img src={productData[0].image} alt="" />
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
                          top: "5px",
                          
                        }} src="https://www.newbalance.com.ar/skin/frontend/sns_sport/newbalance/images/newbalance.svg" alt="" />
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
