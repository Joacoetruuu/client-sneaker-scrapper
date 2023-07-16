
import { useEffect, useState } from "react"
import "./Alert.css"
function AlertError() {

  const [alertText, setAlertText] = useState(""); 

  useEffect(() => {

    

  }, [])

  return (
    <div dangerouslySetInnerHTML={{ __html: alertText }}/>
  )
}

export default AlertError