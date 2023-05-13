
import "./banner.css"

export function Banners() {

  const currentUrl = window.location.href;

  return (
    <div className="bannerGrid">
        <a href={currentUrl+"search/dunk"}>
          <img loading="lazy" alt={"dunk sb"} title={"dunk sb"} src="https://i.ibb.co/Bgw4Swq/image.png"  />
        </a>
        <a href={currentUrl+"search/550"}>
          <img src="https://i.ibb.co/jL0n8sp/image.png" alt="new balance 550" title="new balance 550" />
        </a>
        <a href={currentUrl+"search/adidas"}>
          <img src="https://i.ibb.co/r3CpcXF/image.png" alt="adidas" title="adidas" />
        </a>
    </div>
  )
}
