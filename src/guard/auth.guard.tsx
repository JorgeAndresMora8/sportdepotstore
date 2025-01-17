import { useSelector } from "react-redux"
import { AppStore } from "../redux/store"
import { Navigate, Outlet } from "react-router-dom"

export const AuthGuard = () => { 
    const userState = useSelector((state: AppStore) => state.user)
    console.log(userState)
    return userState.name ? <Outlet /> : <Navigate replace to={'/login'}/>
}

export default AuthGuard 