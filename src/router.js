import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Login from './pages/Onboarding/Auth/Login'
import Register from './pages/Onboarding/Auth/Register'
import Dashboard from './pages/Dashboard/Dashboard'


const Routes = () => {
    return (
       <>
        <BrowserRouter>
         <Switch>
           <Route path="/" exact  component={Login} />
           <Route path="/register" exact  component={Register} />
           <Route path="/dashboard" exact  component={Dashboard} />
           </Switch>      
        </BrowserRouter>
       </>
    )
}


export default Routes
