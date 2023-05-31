import { useEffect, useState } from "react";
import { productDrops } from "../../../scripts/getProduct";
import { SkeletonDescription, SkeletonImage, SkeletonPrice, SkeletonTitle, SkeletonSizes } from "../grid/ProductSkeletonGrid";

export function DropsProduct() {
    const url = window.location.href; 
    const urlSplit = url.split("/")
  
    const [productData, setProductData] = useState([])
    const [mainPhoto, setMainPhoto] = useState("")
  
  
    function handleThumbnailClick(url) {
      setMainPhoto(url);
    }
  
    useEffect(() => {
  
      async function get(){
        setProductData(await productDrops(urlSplit[5], urlSplit[6] ))
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
              <p className="price" style={{width:"270px"}}>
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
                          <li>{productData[0].size}</li>
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
                          top: "8px",
                          padding:"0px",
                          margin:"auto",
                          width:"35px",
                          height:"30px"
                          
                        }} src="https://i.ibb.co/4mMMw90/image-removebg-preview.png" alt="" />
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
