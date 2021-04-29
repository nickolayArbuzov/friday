import {authAPI} from "../DAL/axios";
import {Dispatch} from "redux";

const initialState = {
    email: "",
    password: "",
    rememberMe: false,
    isAuth: false,
    avatar: "",
    userName: "",
    cardCount: 0,
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "LOGIN/LOGIN":
            return {...state};
        case "LOGIN/CHECK-AUTH":
            return {...state, isAuth: action.isAuth};
        case 'LOGIN/GET-PROFILE':
            return {...state, avatar: action.avatar, userName: action.userName, cardCount: action.cardCount};
        default:
            return state;
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    return authAPI.login(email, password, rememberMe)
        .then((res) => {
            debugger
            if (res) {
                dispatch(isAuthAC(true));
                dispatch(getProfileAC(res.data.avatar, res.data.name, res.data.publicCardPacksCount));
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

export const loginAC = (email: string, password: string, rememberMe: boolean) => (
    {type: "LOGIN/LOGIN", email, password, rememberMe} as const);
export const isAuthAC = (isAuth: boolean) => ({type: "LOGIN/CHECK-AUTH", isAuth} as const);
export const getProfileAC = (avatar: string, userName: string, cardCount: number) => (
    {type: 'LOGIN/GET-PROFILE', avatar, userName, cardCount} as const);

type InitialStateType = typeof initialState;
export type LoginType = ReturnType<typeof loginAC>;
export type IsAuthType = ReturnType<typeof isAuthAC>;
export type GetProfileType = ReturnType<typeof getProfileAC>;

type ActionsType = LoginType | IsAuthType | GetProfileType;