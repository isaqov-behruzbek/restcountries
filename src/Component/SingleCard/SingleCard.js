import "./singlecard.css"
export const SingleCard = ({ item }) => {
    return (
        <>
            <div className="container mt-5 d-flex align-items-center justify-content-around">
                <img className="Card_img" src={item.flags.svg} alt="" />
                <div className="Card_info">
                    <h1 className="card_heading">{item.name.common}</h1>
                    <div className="CardAll_info d-flex justify-content-between align-items-center">
                        <div className="CardLeft">
                            <div className="region_info m-0 d-flex align-items-center text-align-start">
                                <h3 className="state_region">Native Name:</h3>
                                <p className="region_number">{item.name.common}</p>
                            </div>
                            <div className="region_info m-0 d-flex align-items-center">
                                <h3 className="state_region">Population:</h3>
                                <p className="region_number">{item.population}</p>
                            </div>
                            <div className="region_info m-0 d-flex align-items-center">
                                <h3 className="state_region">Region:</h3>
                                <p className="region_number">{item.region}</p>
                            </div>
                            <div className="region_info m-0 d-flex align-items-center">
                                <h3 className="state_region">Sub Region:</h3>
                                <p className="region_number">{item.region}</p>
                            </div>
                            <div className="region_info m-0 d-flex align-items-center">
                                <h3 className="state_region">Capital:</h3>
                                <p className="region_number">{item.capital}</p>
                            </div>
                        </div>
                        <div className="CardRight diflex">
                            <div className="region_info m-0 d-flex">
                                <h3 className="state_region">Top Level Domain:</h3>
                                <p className="region_number">{item.cca2}</p>
                            </div>
                            <div className="region_info m-0 d-flex ">
                                <h3 className="state_region">Currencies:</h3>
                                <p className="region_number">{item.currencies.name}</p>
                            </div>
                            <div className="region_info m-0 d-flex align-items-center ">
                                <h3 className="state_region">Languages:</h3>
                                <p className="region_number">{item.name.common}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}