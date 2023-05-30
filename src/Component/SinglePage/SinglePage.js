import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SingleCard } from "../SingleCard/SingleCard"

export const SinglePage = () => {
    const {name} = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}/`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return(
        <>
            <div>
                <div className="container">
                    {data.length && data.map((e) => (
                        <SingleCard item={e}/>
                    ))}
                </div>
            </div>
        </>
    )

}