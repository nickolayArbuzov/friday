import {userAPI} from "../DAL/axios";
import {Dispatch} from "redux";

const initialState = {
}

export const userReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "USER/GETUSERS":
            return {...state,}
        default:
            return state;
    }
}

export const userTC = () => (dispatch: Dispatch) => {
    return userAPI.getUsers()
        .then((res) => {
            if (res) {
                dispatch(userAC());
            }
        })
        .catch((error) => {

        })
}

export const userAC = () =>
    ({type: "USER/GETUSERS"} as const);

type InitialStateType = typeof initialState;
export type UserType = ReturnType<typeof userAC>;

type ActionsType = UserType;