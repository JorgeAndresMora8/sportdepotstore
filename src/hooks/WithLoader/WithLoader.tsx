{ /* 
    Este patron previene el famoso chequeo de loading en componentes que necesitan data de servicios externos
    para ello se crea este component    
*/ }

import React from 'react';
import react, { useEffect, useState } from 'react'

export interface WithLoaderProps { 
    Component: React.FC;
    url: string; 

}

export const WithLoader =({Component, url}: WithLoaderProps) => { 
    return (_props: react.ReactNode) => { 
        
        // se setea la logica de almacenamiento, fetching y validacion

        // se almacena los datos buscados
        const [data, setData] = useState(null)

        // fetching
        const getData = async () => { 
            const resp = await fetch(url)
            const data = await resp.json();
            setData(data)
        }

        useEffect(() => { 
            getData()
        }, [])

        if(!data){ 
            return <div>Loading...</div>
        }

        return <Component />

    }
}