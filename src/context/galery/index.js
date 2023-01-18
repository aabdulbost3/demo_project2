import { useState , useEffect } from "react";
import { createContext } from "react";

export const GaleryContext = createContext({
    GaleryMap:[],
})

export const GaleryProvider = ({children})=>{
    const [GaleryMap , setGaleryMap] = useState([])
    useEffect(() => {
        fetch("https://api.reverhotel.uz/galery")
        .then(res => res.json())
        .then(result => setGaleryMap(result))
    }, [GaleryMap])
    const value = {GaleryMap};
    return(
        <GaleryContext.Provider value={value}>{children}</GaleryContext.Provider>
    )
}