import {useEffect ,useState} from "react"

function usecurrencyinfo(curr)
{
    const [data ,setData] = useState({})
    useEffect(()=>{

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curr}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[curr]))
        console.log(data);
    }, [curr])

    console.log("|12312|-> datavalue", data)
    return data
}


export default usecurrencyinfo