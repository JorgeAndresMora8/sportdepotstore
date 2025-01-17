import { useEffect, useState } from "react"

interface Shoe { 
    id: string;
    name: string;
    price: number,
    image: string[];
    category: string,
    description: string;
    stock: number;
    size: Number[];
    features: string[]
  }

type FetchData<T> = { 
    data: T | undefined; 
    loading: boolean; 
    error: string | null;
}



function useFetch<T>(url: string, method?:() => void): FetchData<T>  { 
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<T>()
    const [error, setError] = useState<string | null>(null)

    function fetchData(){ 
        try{
        setLoading(true)
        fetch(url,
            {credentials: 'include',  // Include cookies in the request
            headers: {
              'Content-Type': 'application/json',
            }})
        .then((resp) => resp.json())
        .then((resp) => {
            setData(resp)
            setLoading(false)
        })
        
        }catch(error){ 
            const typedError = error as Error
            setError(typedError.message)
            setLoading(false)
        }finally{ 
            method?.()  // Execute callback function if provided
        }
    
    
    }


        

    useEffect(() => { 
        fetchData()
        // window.scrollTo(0, 0);
    }, [url])


    return {loading, data, error} 
}

export default useFetch