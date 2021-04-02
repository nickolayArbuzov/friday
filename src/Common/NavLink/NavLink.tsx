import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"
type PropsType = {
    url:string
    title:string
}


export const CommonNavLink = (props:PropsType) => {
    return (
        <div>
            <NavLink className={"link"} to={props.url}>{props.title}</NavLink>
        </div>
    )
}