import { createSlice } from '@reduxjs/toolkit'
import User from '../../models/user.model'
import { clearLocalStorage, setAndPersistLocalStorage } from '../../helpers/LocalStorage/localStorageAction'
import LocalStorageTypes from '../../helpers/LocalStorage/LocalStorageTypes'

export const EmptyUserState: User = { 
    name: '',
    id: '0',
    username: "", 
    first_name: "", 
    lastname: "", 
    last_logged_in: "", 
    password: "" 

}

export const userSlice = createSlice({
    name: LocalStorageTypes.USER, 
    initialState: localStorage.getItem(LocalStorageTypes.USER) ? JSON.parse(localStorage.getItem(LocalStorageTypes.USER) as string) : EmptyUserState, 
    reducers: { 
        createUser: (_state, action) => { 
            setAndPersistLocalStorage<User>( LocalStorageTypes.USER ,action.payload)
            return action.payload
        }, 
        modifyUser: (state, action) => { 
            const result = { ...state, ...action.payload }
            setAndPersistLocalStorage<User>(LocalStorageTypes.USER, result)
            return result
        },
        resetUser: () => { 
            clearLocalStorage('user')
            return EmptyUserState
        }
    }
})

export const { createUser, modifyUser, resetUser } = userSlice.actions