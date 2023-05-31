import { useEffect, useState } from "react";
import { productGrid } from "../../../scripts/getProduct"
import "./productGrid.css"
import { SkeletonDescription, SkeletonTitle, SkeletonPrice, SkeletonSizes, SkeletonImage } from "./ProductSkeletonGrid";

export function Product() {
  const url = window.location.href; 
  const urlSplit = url.split("/")

  const [productData, setProductData] = useState([])
  const [mainPhoto, setMainPhoto] = useState("")


  function handleThumbnailClick(url) {
    setMainPhoto(url);
  }

  useEffect(() => {

    async function get(){
      setProductData(await productGrid(urlSplit[5]))
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

          

            <div className="main-image">
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
                          
                          mainPhoto === "" ? setMainPhoto(productData[0].images[0]): 
                          <img src={image } className="thumbailPhoto" onClick={() => handleThumbnailClick(image)} />
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
                      <img style={{

                        maxHeight: "40px",
                        maxWidth: "40px",
                        display: "inline",
                        marginLeft: "10px",
                        
                      }} src="https://grid0.vtexassets.com/assets/vtex/assets-builder/grid0.theme/1.0.53/Img/Header/grid___01f64cf54521e7824901c6428fa1d31a.svg" alt="" />
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