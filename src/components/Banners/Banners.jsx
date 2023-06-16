
import "./banner.css"


export function Banners() {

  const currentUrl = window.location.href;

  return (
    <section className="bannerGrid" title="DESCUENTOS ZAPATILLAS">
        <a href={currentUrl+"search/dunk"}>
          <img loading="lazy" alt={"DUNK SB ARGENTINA"} title={"dunk sb"} src={"https://i.ibb.co/nQ465Gk/Dunk.webp"}  />
        </a>
        <a href={currentUrl+"search/550"}>
          <img src="https://i.ibb.co/Gsj6FfT/550.webp" alt="NEW BALANCE 550 ARGENTINA" title="new balance 550" />
        </a>
        <a href={currentUrl+"search/forum"}>
          <img src="https://i.ibb.co/YcmMzgg/adidas.webp" alt="ZAPATILLA ADIDAS ARGENTINA" title="adidas" />
        </a>
    </section>
  )
}
