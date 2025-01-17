import User from "../models/user.model";
import { CartSlice } from "./states/Cart";
import { userSlice } from "./states/User";
import { configureStore } from "@reduxjs/toolkit";

interface Shoe { 
    id: string;
    name: string;
    price: number,
    image: string[];
    category: string,
    description: string;
    stock: number;
    sizeSelected: string;
    features: string[]; 
    items: number
  }

export interface AppStore { 
    user: User, 
    cart: Array<Shoe>
}

export default configureStore<AppStore>({ 
    reducer: { 
        user: userSlice.reducer, 
        cart: CartSlice.reducer
    }
})