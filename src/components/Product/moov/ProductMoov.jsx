import { useEffect, useState } from "react";
import { productMoov } from "../../../scripts/getProduct"
import "./productMoov.css"
import { SkeletonDescription, SkeletonTitle, SkeletonPrice, SkeletonSizes, SkeletonImage } from "../grid/ProductSkeletonGrid";



export function ProductMoov() {
  const url = window.location.href; 
  const urlSplit = url.split("/")

  const [productData, setProductData] = useState([])
  const [mainPhoto, setMainPhoto] = useState("")


  function handleThumbnailClick(url) {
    setMainPhoto(url);
  }

  useEffect(() => {

    async function get(){
      setProductData(await productMoov(urlSplit[5], urlSplit[6] ))
    }
    get();
  }, [])

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
                        top: "8px",
                        
                      }} src="https://www.moov.com.ar/on/demandware.static/Sites-Moov-Site/-/default/dwc26d2bf3/images/logo.svg" alt="" />
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
