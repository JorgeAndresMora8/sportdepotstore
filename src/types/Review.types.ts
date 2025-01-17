import { User } from "./user.types";

export interface Review { 
    id: string; 
    productId:string; 
    user: User 
    text:string; 
    rating: number;
    date:string; 
    title: string
}
