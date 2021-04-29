import React, {useState, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userTC} from "../../BLL/UserReducer";
import {logoutTC} from "../../BLL/LoginReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../BLL/store";

export const ProfilePage = () => {
    const dispatch = useDispatch();
    let isAuth = useSelector<AppStateType>(state => state.login.isAuth);

    const onClickStatsHandler = useCallback(() => {
        dispatch(userTC())
    },[]);

    const onClickLogoutHandler = useCallback(() => {
        dispatch(logoutTC())
    },[dispatch]);

    if(!isAuth) return <Redirect to={"/login"}/>;

    return (
        <div>
            <h2>Profile</h2>
            <button onClick={onClickStatsHandler}>Show users</button>
            <button onClick={onClickLogoutHandler}>Logout</button>
        </div>
    )
}