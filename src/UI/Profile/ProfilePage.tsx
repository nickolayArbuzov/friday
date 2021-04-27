import React, {useState, useCallback} from "react"
import {useDispatch, useSelector} from "react-redux"
import {userTC} from "../../BLL/UserReducer"
import {Redirect} from 'react-router-dom'
import {AppStateType} from "../../BLL/store"

export const ProfilePage = () => {
    const dispatch = useDispatch()

    const onClickHandler = useCallback(() => {
        dispatch(userTC())
    },[])

    return (
        <div>
            <h2>Profile</h2>
            <button onClick={onClickHandler}>show users</button>
        </div>
    )
}