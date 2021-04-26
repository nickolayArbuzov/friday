import React from "react";
import "./style.css"
type PropsType = {
    text:string
}


export const InputText = (props:PropsType) => {
    return (
        <div>

                <div className="form-row">
                 <input type="text" id="name" required/>
                </div>

        </div>
    )
}