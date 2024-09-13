export interface Product { 
    id:string;
    type:string;
    model: string; 
    brand: string; 
    price: number; 
    stock: number; 
    description:string; 
    is_active: boolean; 
    image: string; 
    category: string
}

export interface User { 
    username: string; 
    first_name: string; 
    password: string; 
    last_name: string;
    last_logged_in: string;
}