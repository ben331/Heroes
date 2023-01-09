import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

export const PrivateRoute = ({children}) => {

    const {isLogged} = useContext( AuthContext )

  return (isLogged)
    ? children
    : <Navigate to="/login" />
}
