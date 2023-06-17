import "./footer.css";

export function Footer() {
  
    const listaBusquedas = ["Nike", "Adidas", "Jordan", "Puma", "Dunk", "Forum"]

    return (
    <>
      <footer>


        <div className="acerca-de">
            <h4>Acerca de</h4>
            <p>Información</p>
            <p>Preguntas frecuentes</p>
        </div>

        
        <div className="secciones-footer">
            <h4>Secciones</h4>

            <div className="lista-secciones">
            {
                listaBusquedas.map((e)  => {
                    return <a href={`/search/${e}`} target="_blank"> <p>{e}</p> </a>
                })
            }
            </div>

        </div>

        <div className="contacto">
          <h4>Contacto</h4>
          <a href="mailto:contacto@todocalzado.com.ar">contacto@todocalzado.com.ar</a>
        </div>


      </footer>

    </>
  );
}
