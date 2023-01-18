import { createContext, useEffect, useState } from "react";



export const NewsContext = createContext({
NewsMap : []
})

export const NewsProvider = ({children}) => {
    const [NewsMap , setNewsMap] = useState([])
    useEffect(() => {
        fetch("https://api.reverhotel.uz/news")
        .then(res => res.json())
        .then(respons => setNewsMap(respons))
    } , [NewsMap])
    const value = {NewsMap}

    return(
        <NewsContext.Provider value={value}>{children}</NewsContext.Provider>
        )
}