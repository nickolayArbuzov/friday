import React from "react";
import {NavLink} from "react-router-dom";

export const routePaths = {
    HOME_PAGE: '/',
    LOGIN: "/login",
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/recovery',
    REDIRECT: '*',
}

export const NavBar = ()=>{
    return(
        <div>
            <div>
                <NavLink to={routePaths.LOGIN}>Login</NavLink>
            </div>
            <div>
                <NavLink to={routePaths.REGISTRATION}>Registration</NavLink>
            </div>
            <div>
                <NavLink to={routePaths.PROFILE}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={routePaths.PASSWORD_RECOVERY}>Recovery pass</NavLink>
            </div>
        </div>
    )
}