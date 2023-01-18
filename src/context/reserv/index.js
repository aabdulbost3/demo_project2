import { useState , useEffect } from "react";
import { createContext } from "react";

export const ReservContext = createContext({
    ReservMap:[],
})

export const ReservProvider = ({children})=>{
    const [ReservMap , setReservMap] = useState([])
    useEffect(() => {
        fetch("https://api.reverhotel.uz/contacts")
        .then(res => res.json())
        .then(result => setReservMap(result))
    }, [ReservMap])
    const value = {ReservMap};
    return(
        <ReservContext.Provider value={value}>{children}</ReservContext.Provider>
    )
}