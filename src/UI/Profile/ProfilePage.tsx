import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userTC} from "../../BLL/UserReducer";
import {logoutTC} from "../../BLL/AuthReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../BLL/store";

export const ProfilePage = () => {
    const dispatch = useDispatch();
    let isAuth = useSelector<AppStateType>(state => state.auth._id);
    let avatar = useSelector<AppStateType, string>(state => state.auth.avatar)
    let userName = useSelector<AppStateType, string>(state => state.auth.userName)
    let cardCount = useSelector<AppStateType, number>(state => state.auth.cardCount)

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