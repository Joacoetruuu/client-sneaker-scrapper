
import "./banner.css"

export function Banners() {

  const currentUrl = window.location.href;

  return (
    <div className="bannerGrid">
        <a href={currentUrl+"search/dunk"}>
          <img src="https://i.ibb.co/Bgw4Swq/image.png" alt="" />
        </a>
        <a href={currentUrl+"search/550"}>
          <img src="https://i.ibb.co/jL0n8sp/image.png" alt="" />
        </a>
        <a href={currentUrl+"search/adidas"}>
          <img src="https://i.ibb.co/r3CpcXF/image.png" alt="" />
        </a>
    </div>
  )
}
