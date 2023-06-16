
import { useEffect, useState } from "react"
import "./Alert.css"
function AlertError() {

  const [alertText, setAlertText] = useState(""); 

  useEffect(() => {

    async function getTextAlert(){
      const res = await fetch("https://alertas-todo-calzado-production.up.railway.app/api/alert")
      const data = await res.text()
    
      setAlertText(data)
    }; 
    getTextAlert()

  }, [])

  return (
    <div dangerouslySetInnerHTML={{ __html: alertText }}/>
  )
}

export default AlertError