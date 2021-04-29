import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userTC} from "../../BLL/UserReducer";
import {logoutTC} from "../../BLL/LoginReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../BLL/store";

export const ProfilePage = () => {
    const dispatch = useDispatch();
    let isAuth = useSelector<AppStateType>(state => state.login.isAuth);
    let avatar = useSelector<AppStateType, string>(state => state.login.avatar)
    let userName = useSelector<AppStateType, string>(state => state.login.userName)
    let cardCount = useSelector<AppStateType, number>(state => state.login.cardCount)

    const onClickStatsHandler = useCallback(() => {
        dispatch(userTC())
    },[dispatch]);

    const onClickLogoutHandler = useCallback(() => {
        dispatch(logoutTC())
    },[dispatch]);

    if(!isAuth) return <Redirect to={"/login"}/>;

    return (
        <div>
            <h2>Profile</h2>
            <button onClick={onClickStatsHandler}>Show users</button>
            <button onClick={onClickLogoutHandler}>Logout</button>
            <img src={avatar} alt="avatar"/>
            <h3>Hello {userName}</h3>
            <h4>You have {cardCount} packs</h4>
        </div>
    )
}