import { useState , useEffect } from "react";
import { createContext } from "react";

export const AddadminContext = createContext({
    adminMap:[],
})

export const AddadminProvider = ({children})=>{
    const [adminMap , setAdminMap] = useState([])
    useEffect(() => {
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:vR9Klpfo/user")
        .then(res => res.json())
        .then(result => setAdminMap(result))
    }, [])
    const value = {adminMap};
    return(
        <AddadminContext.Provider value={value}>{children}</AddadminContext.Provider>
    )
}