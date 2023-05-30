import { Link } from "react-router-dom"
import "./state.css"
export const State = ({item}) => {
    return(

        <>
            <div className="state_card align-items-center">
                <Link to={`name/${item.name.common}`} className="state_list text-decoration-none">
                    <img className="state_img" src={item.flags.svg} alt="" />
                    <div className="state_info">
                        <h1 className="state_heading">{item.name.common}</h1>
                        <div className="region_info d-flex align-items-center justify-content-start">
                            <h3 className="state_region">Population:</h3>
                            <p className="region_number">{item.population}</p>
                        </div>
                        <div className="population_info d-flex align-items-center justify-content-start">
                            <h3 className="state_population">Region:</h3>
                            <p className="population_number">{item.region}</p>
                        </div>
                        <div className="capital_info d-flex align-items-center justify-content-start">
                            <h3 className="state_capital">capital:</h3>
                            <p className="capital_number">{item.capital}</p>
                        </div>

                    </div>
                </Link>
            </div>
        </>
    )
}