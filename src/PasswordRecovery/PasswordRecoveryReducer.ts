
type InitialStateType={

}
const initialState={}



export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action) {
        case '':
            return {...state,}
        default:
            return state
    }
}

type ActionsType = {

}