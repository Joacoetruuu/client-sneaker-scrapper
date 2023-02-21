import { useRef, useEffect } from 'react';
import ReactSwipe from 'react-swipe';
import "./CarouselStores.css"

export const CarouselStores = () => {
  const reactSwipeEl = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      reactSwipeEl.current.next();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{height: '200px', overflow: 'hidden', boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;"}}>
      <ReactSwipe
        swipeOptions={{ continuous: true }}
        ref={reactSwipeEl}
      >
        <div className='divCover' style={{backgroundColor:'black'}}><img src="https://grid0.vtexassets.com/assets/vtex/assets-builder/grid0.theme/1.0.53/Img/Header/grid___01f64cf54521e7824901c6428fa1d31a.svg" className="carousel-image"  alt="" style={{  }} /></div>
        <div className='divCover' style={{backgroundColor:'black'}}><img src="https://www.moov.com.ar/on/demandware.static/Sites-Moov-Site/-/default/dwc26d2bf3/images/logo.svg" className="carousel-image" alt="" style={{backgroundColor:"black"}} /></div>
        <div className='divCover' style={{backgroundColor:'black'}}><img src="https://www.digitalsport.com.ar/files/stores/logo_digitalsport.png" alt="" style={{backgroundColor:"black"}}className="carousel-image" /></div>
        <div className='divCover' style={{backgroundColor:'black'}}><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F02%2FNew_Balance_red_logo.png&f=1&nofb=1&ipt=c8a08560ef77aef16e47c5856f7a0e49d232ba30134cde42a01cdb481cb4608d&ipo=images" className="carousel-image" alt="" style={{ }} /></div>
        <div  className='divCover'style={{backgroundColor:'black'}}><img src="https://www.dexter.com.ar/on/demandware.static/Sites-Dexter-Site/-/default/dwc26d2bf3/images/logo.svg" alt="" style={{ }} className="carousel-image"/></div>
        {/* <div className='divCover'style={{backgroundColor:'black'}}><img src="https://www.tiendafuencarral.com.ar/arquivos/fuencarral-logo-color.svg?v=637338649228130000" alt="" style={{ }} className="carousel-image"/></div> */}
        <div className='divCover' style={{backgroundColor:'white'}}><img src="https://drops-ba.com/wp-content/uploads/2021/07/LogoDrops.png" alt="" style={{ }} className="carousel-image"/></div>
      </ReactSwipe>
    </div>
  );
};  