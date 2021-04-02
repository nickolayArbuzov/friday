import React from "react";
import "./style.css"
type PropsType={
    title:string
}
export const Button = (props:PropsType)=>{
    return(

            <div className="form-row">
                <input type="submit" value={props.title}/>
            </div>

    )
}