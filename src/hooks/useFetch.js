import { useState, useEffect, useCallback } from "react"

export const useFetch = (url) => {

    const[data, setData] = useState(null)
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    const fetchData = useCallback(async ()=>
        {
            setLoading(true);
            try{
                const resp = await fetch(url)
                if(!resp.ok) throw Error ("Error al cargar los datos");
                const data = await resp.json()
                setData(data);
            }catch(error){
                setError(error.message)
                setData([])
            }finally{
                setLoading(false)
            }
        },[]);

    useEffect(()=>{
        console.log("useEffect");
        fetchData();
    },[]);

    return {data,loading,error};
}