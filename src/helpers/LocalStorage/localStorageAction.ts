export const setAndPersistLocalStorage = <T>(key: string, data:T) => { 
    localStorage.setItem(key, JSON.stringify({ ...data }))
}

export const clearLocalStorage = (key: string) => { 
    localStorage.removeItem(key)
}