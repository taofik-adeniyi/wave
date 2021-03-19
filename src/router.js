import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Login from './pages/Onboarding/Auth/Login'
import Register from './pages/Onboarding/Auth/Register'

const Routes = () => {
    return (
       <>
        <BrowserRouter>
         <Switch>
           <Route path="/" exact  component={Login} />
           <Route path="/register" exact  component={Register} />
           </Switch>      
        </BrowserRouter>
       </>
    )
}


export default Routes
