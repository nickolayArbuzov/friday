import {authAPI} from "../DAL/axios"
import {Dispatch} from "redux"

const initialState = {
    email: '',
    password: '',
    rememberMe: false
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'LOGIN/LOGIN':
            return {...state,}
        default:
            return state
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    return authAPI.login(email, password, rememberMe)
        .then((res) => {
            debugger
            if (res) {
                dispatch(loginAC(email, password, rememberMe))
            }
        })
        .catch((error) => {

        })
}

export const loginAC = (email: string, password: string, rememberMe: boolean) =>
    ({type: "LOGIN/LOGIN", email, password, rememberMe} as const)

type InitialStateType = typeof initialState
export type LoginType = ReturnType<typeof loginAC>

type ActionsType = LoginType