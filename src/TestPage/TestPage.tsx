import React from "react";
import "./style.css"
import {CommonNavLink} from "../Common/NavLink/NavLink";
import {InputText} from "../Common/InputText/InputeText";
import {Button} from "../Common/Button/Button";
import {CheckBox} from "../Common/CheckBox/CheckBox";


export const TestPage = () => {

    return (
        <div className={"testPage"}>
            <h1>Тестовая страница</h1>
            <div className={"item"}>
                <InputText text={"some text"}/>
            </div>
            <div className={"item"}>
                <CheckBox text={'try to change'}/>
            </div>
            <div className={"item"}>
                <Button title={'simple Button'}/>
            </div>
            <div className={"item"}>

                <CommonNavLink title={"check how its work"} url={"/"}/>
            </div>


        </div>
    )
}