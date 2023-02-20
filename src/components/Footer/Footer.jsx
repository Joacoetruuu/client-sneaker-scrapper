
import "./footer.css"

export function Footer() {
  return (
    <footer >

        
        <div style={{display: "block"}}>


            <div className="footer" style={{backgroundColor: "white"}}>

                <div>
                    <p style={{paddingBottom: "10px", color:"#0064fa"}}>Acerca de</p>
                    <ul>
                        <li>Información</li>
                        <li>Preguntas frecuentes</li>
                        <li>Contacto</li>
                    </ul>
                </div>

                <div>
                    <p style={{paddingBottom: "10px", color:"#0064fa"}}>Términos y condiciones</p>
                </div>
                
                <div>
                    <p style={{paddingBottom: "10px", color:"#0064fa"}}>Política de privacidad</p>
                </div>

                    

            </div>

            <div style={{display: "flex", backgroundColor: "white"}} className="copy" >
                <p style={{margin: "auto", backgroundColor: "white"}}>Copyright © 2023 - Sneaker Scrapper - Todos los derechos reservados</p>
            </div>
        </div>


            
            
        
    </footer>
  )
}
