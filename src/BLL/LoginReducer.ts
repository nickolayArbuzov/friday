import {authAPI} from "../DAL/axios";
import {Dispatch} from "redux";

const initialState = {
    email: "",
    password: "",
    rememberMe: false,
    isAuth: false,
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "LOGIN/LOGIN":
            return {...state};
        case "LOGIN/CHECK-AUTH":
            return {...state, isAuth: action.isAuth};
        default:
            return state;
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    return authAPI.login(email, password, rememberMe)
        .then((res) => {
            if (res) {
                dispatch(loginAC(email, password, rememberMe));
                dispatch(isAuthAC(true));
            }
        })
        .catch((error) => {
            
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    return authAPI.logout()
        .then(() => dispatch(isAuthAC(false)))
        .catch((error) => {

        })
}

export const loginAC = (email: string, password: string, rememberMe: boolean) =>
    ({type: "LOGIN/LOGIN", email, password, rememberMe} as const);
export const isAuthAC = (isAuth: boolean) => ({type: "LOGIN/CHECK-AUTH", isAuth} as const);

type InitialStateType = typeof initialState;
export type LoginType = ReturnType<typeof loginAC>;
export type IsAuthType = ReturnType<typeof isAuthAC>;

type ActionsType = LoginType | IsAuthType;