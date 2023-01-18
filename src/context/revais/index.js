import { useState , useEffect } from "react";
import { createContext } from "react";

export const ReviewsContext = createContext({
    ReviewsMap:[],
})

export const ReviewsProvider = ({children})=>{
    const [ReviewsMap , setReviewsMap] = useState([])
    useEffect(() => {
        fetch("https://api.reverhotel.uz/reviews")
        .then(res => res.json())
        .then(result => setReviewsMap(result))
    }, [ReviewsMap])
    const value = {ReviewsMap};
    return(
        <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
    )
}