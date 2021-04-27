import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from 'redux-thunk'
import { loginReducer } from "./LoginReducer"
import { newPasswordReducer } from "./NewPasswordReducer"
import { passwordRecoveryReducer } from "./PasswordRecoveryReducer"
import { profileReducer } from "./ProfileReducer"
import { registrationReducer } from "./RegistrationReducer"

let rootReducer = combineReducers({
    login: loginReducer,
    newPassword: newPasswordReducer,
    passwordRecovery: passwordRecoveryReducer,
    profile: profileReducer,
    registration: registrationReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// export let store = createStore(rootReducer,applyMiddleware(thunk))

export type AppStoreType = typeof store
export type AppDispatch = typeof store.dispatch
export type AppStateType = ReturnType<typeof rootReducer>