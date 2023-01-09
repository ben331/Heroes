import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

export const PrivateRoute = ({children}) => {

    const {isLogged} = useContext( AuthContext )
    const {pathname, search} = useLocation()

    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)

  return (isLogged)
    ? children
    : <Navigate to="/login" />
}
