
export const loadAbort = () => { 
    const controller = new AbortController(); 
    return controller
}

export function getShoes(){ 
    return fetch('https://sportdepotbackend.onrender.com/shoes')
}