//LOCAL STORAGE ACTIONS FOR GET AND SET DATA IN THE BROWSER.

function getFromLocalStorage(key:string){ 
    return JSON.parse(localStorage.getItem(key) as string)
}

function setAndPersistInLocalStorage(key:string, value:any){ 
    localStorage.setItem(key, JSON.stringify(value))
}   


export { 
    getFromLocalStorage, 
    setAndPersistInLocalStorage
}