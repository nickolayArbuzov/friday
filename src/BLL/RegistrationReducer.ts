export type InitialStateType = {

}
const initialState = {

}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionTypeRegistration): InitialStateType => {
    switch (action) {
        case "REGISTRATION/REGISTRATION":
            return {...state,}
        default:
            return state
    }
}

type ActionTypeRegistration = {}