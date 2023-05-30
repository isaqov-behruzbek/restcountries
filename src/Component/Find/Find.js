import "./find.css"
import Search from "../../assest/img/search.svg"
import { State } from "../State/State"
import { Countrs } from "../Countrys/Country"
export const Find = () => {
    return(
        <>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <input className="inputFind" type="text" placeholder="Search for a country…" />
                    <p className="none_element">\</p>
                    <select className="select" name="" id="">
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                    </select>
                </div>
            </div>
        </>
    )
}