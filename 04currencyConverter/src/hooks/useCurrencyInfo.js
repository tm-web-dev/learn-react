import { useEffect, useState } from "react";

/*
Function to get data using fetch from currency api and passed currency variable as dependency.
*/
function useCurrencyInfo (currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        
    }, [currency])

    return data
}

export default useCurrencyInfo