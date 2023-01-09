import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialState = {
  logged: false,

}

export const AuthProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(authReducer, initialState)

    const onLogin = ( user = '') => {
      const action = {
        type: types.login,
        payload: user
      }
      authDispatch(action)
    }

    const onLogout = () => {
      const action = {
        type: types.logout,
        payload: user
      }
      authDispatch(action)
    }

  return (
    <AuthContext.Provider value={{...authState, onLogin}}>
        { children }
    </AuthContext.Provider>
  )
}
