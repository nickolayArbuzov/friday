import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TestPage} from "./TestPage/TestPage";
import {Redirect, Route, Switch } from 'react-router-dom';
import { LoginPage } from './Login/LoginPage';
import {NewPasswordPage} from "./NewPassword/NewPasswordPage";
import {PasswordRecoveryPage} from "./PasswordRecovery/PasswordRecoveryPage";
import {ProfilePage} from "./Profile/ProfilePage";
import {RegistrationPage} from "./Registration/RegistrationPage";

function App() {
  return (
    <div className={"App"}>
      <Switch>
        <Route exact path={"/"} render={() => <TestPage/>}/>
        <Route path={"/login"} render={() => <LoginPage/>}/>
        <Route path={"/newPassword"} render={() => <NewPasswordPage/>}/>
        <Route path={"/passwordRecovery"} render={() => <PasswordRecoveryPage/>}/>
        <Route path={"/profile"} render={() => <ProfilePage/>}/>
        <Route path={"/registration"} render={() => <RegistrationPage/>}/>
        <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
        <Redirect path={'*'} to={"404"}/>
      </Switch>
    </div>
  );
}

export default App;
