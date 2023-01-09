import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

export const PublicRoute = ({children}) => {

    const {isLogged} = useContext( AuthContext )

  return (!isLogged)
        ? children
        : <Navigate to="/marvel" />
}
