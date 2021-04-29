import React from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import {LoginPage} from './UI/Login/LoginPage'
import {PasswordRecoveryPage} from "./UI/PasswordRecovery/PasswordRecoveryPage"
import {ProfilePage} from "./UI/Profile/ProfilePage"
import {RegistrationPage} from "./UI/Registration/RegistrationPage"
import {NavBar} from './UI/NavBar/NavBar'
import {routePaths} from './UI/NavBar/NavBar'

function App() {
  return (
    <div className={"App"}>
      <div>
        <NavBar/>
      </div>
      <Switch>
        <Route exact path={routePaths.HOME_PAGE} render={() => <LoginPage/>}/>
        <Route path={routePaths.LOGIN} render={() => <LoginPage/>}/>
        <Route path={routePaths.PASSWORD_RECOVERY} render={() => <PasswordRecoveryPage/>}/>
        <Route path={routePaths.PROFILE} render={() => <ProfilePage/>}/>
        <Route path={routePaths.REGISTRATION} render={() => <RegistrationPage/>}/>
        <Route path={routePaths.REDIRECT} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
