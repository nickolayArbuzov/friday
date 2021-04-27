import {authAPI} from "../DAL/axios";
import {Dispatch} from "redux";

export type InitialStateType={

}
const initialState={

}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionTypeRegistration): InitialStateType => {
    switch (action) {
        case '':
            return {...state,}
        default:
            return state
    }
}

type ActionTypeRegistration = 