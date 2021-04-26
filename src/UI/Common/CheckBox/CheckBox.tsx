import React from "react";
import "./style.css"
type PropsType = {
text:string
}


export const CheckBox = (props:PropsType) => {
    return (
        <div >
            <input type="checkbox" className="checkbox" id="checkbox"/>
            <label htmlFor="checkbox">{props.text}</label>
        </div>
    )
}