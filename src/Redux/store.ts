import {combineReducers, createStore} from "redux";
import {loginReducer} from "../Login/LoginReducer";
import {newPasswordReducer} from "../NewPassword/NewPasswordReducer";
import {passwordRecoveryReducer} from "../PasswordRecovery/PasswordRecoveryReducer";
import {profileReducer} from "../Profile/ProfileReducer";
import {registrationReducer} from "../Registration/RegistrationReducer";


export type StoreType = typeof store;
export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch
let reducers =combineReducers({
    loginReducer,
    newPasswordReducer,
    passwordRecoveryReducer,
    profileReducer,
    registrationReducer
})


export let store = createStore(reducers);
// @ts-ignore
window.store=store;