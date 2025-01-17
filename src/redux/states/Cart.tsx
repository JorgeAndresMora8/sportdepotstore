import { createSlice } from '@reduxjs/toolkit'
import LocalStorageTypes from '../../helpers/LocalStorage/LocalStorageTypes'
import { setAndPersistInLocalStorage } from '../../utilities/LocalStorageActions';

export const CartSlice = createSlice({
    name: LocalStorageTypes.CART, 
    initialState: localStorage.getItem(LocalStorageTypes.CART) ? JSON.parse(localStorage.getItem(LocalStorageTypes.CART) as string) : [], 
    reducers: { 
        updateCart: (_state, action) => { 
            setAndPersistInLocalStorage(LocalStorageTypes.CART, action.payload); 
            return action.payload
        },
        addProduct: (state, action) => { 
            setAndPersistInLocalStorage(LocalStorageTypes.CART, [...state, action.payload]); 
            return [...state, action.payload]
        }, 

        removeProduct: (_state, _action) => { 
            console.log('removing product')
        },

        clearCart: () => { 
            setAndPersistInLocalStorage(LocalStorageTypes.CART, [])
            return []
        }
    }
})

export const { addProduct, removeProduct, clearCart, updateCart } = CartSlice.actions