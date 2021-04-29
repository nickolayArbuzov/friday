import React from "react"
import {NavLink} from "react-router-dom"
import {AppStateType} from "../../BLL/store"
import {useSelector} from "react-redux"

export const routePaths = {
    HOME_PAGE: '/',
    LOGIN: "/login",
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/recovery',
    REDIRECT: '*',
}

export const NavBar = ()=>{
    let isAuth = useSelector<AppStateType>(state => state.login.isAuth)
    return(
        <div>
            <div>
                {isAuth 
                ? <NavLink to={routePaths.PROFILE}>Profile</NavLink> 
                : <NavLink to={routePaths.LOGIN}>Login</NavLink>}
            </div>
            <div>
                <NavLink to={routePaths.REGISTRATION}>Registration</NavLink>
            </div>
            <div>
                <NavLink to={routePaths.PASSWORD_RECOVERY}>Recovery pass</NavLink>
            </div>
        </div>
    )
}