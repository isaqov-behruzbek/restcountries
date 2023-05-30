import "./header.css"
import Moon from "../../assest/img/moon.svg"
import { Link } from "react-router-dom"
export const Header = () => {
    return(
        <>
            <div className="header">
                <div className="container">
                    <nav>
                        <ul className="List d-flex justify-content-between align-items-center">
                            <li className="item">
                                <h3>Where in the world?</h3>
                            </li>
                            <li className="item">
                                <button className="DarkMode_btn"><img src={Moon} alt="" /><p>Dark Mode</p></button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}