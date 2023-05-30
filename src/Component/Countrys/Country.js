import { useEffect, useState } from "react"
import "./country.css"
import { State } from "../State/State"
export const Countrs = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <>
            <div className="container mt-5 country_list text-align-center">
                {data.length && data.map((e) => (
                    <State item={e} />
                ))}
            </div>
        </>
    )
}