import { useEffect, useState } from "react"
import "./filter.css"
import storeList from "../../scripts/utils/storeList"

export function Filters() {

    const [filters, setFilters] = useState({})

    return (
    <div className="divFilters">
        <span>
            <p>Tiendas</p>
        </span>
        <ul>
            {
                storeList().map((e) => {
                    return <li> <label htmlFor={e}> {e} </label> <input type="checkbox" name={e} id={e} /> </li>
                })
            }
        </ul>

    </div>
  )
}
