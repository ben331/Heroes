import { types } from "../types/types";

export const authReducer = (state, action) => {
    switch( action.type ){
        case types.login:
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }
        case  types.logout:
            return {
                ...state,
                isLogged: false,
                user: null
            }
        default:
            return state
    }
}