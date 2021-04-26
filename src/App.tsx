import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import {LoginPage} from './UI/Login/LoginPage';
import {NewPasswordPage} from "./UI/NewPassword/NewPasswordPage";
import {PasswordRecoveryPage} from "./UI/PasswordRecovery/PasswordRecoveryPage";
import {ProfilePage} from "./UI/Profile/ProfilePage";
import {RegistrationPage} from "./UI/Registration/RegistrationPage";

function App() {
  return (
    <div className={"App"}>
      <Switch>
        <Route exact path={"/"} render={() => null}/>
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
