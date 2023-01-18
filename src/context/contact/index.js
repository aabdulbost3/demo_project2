import { ErrorSharp } from "@mui/icons-material";
import { createContext, useEffect, useState } from "react";




export const ContactContext = createContext({
    contactMap: []
})

export const ContactProvider = ({ children }) => {
    const [contactMap, setContactMap] = useState([])

    useEffect(() => {
        fetch("https://api.reverhotel.uz/form")
            .then(res => res.json())
            .then(respo => setContactMap(respo))
    }, [contactMap])

    const value = { contactMap }

    return (
        <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
    )
}