import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Login from './pages/Onboarding/Auth/Login'
import Register from './pages/Onboarding/Auth/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Wallet from './pages/Wallets/Wallet'
import Transaction from './pages/Transaction'
import Investment from './pages/Investment'

const Routes = () => {
    return (
       <>
        <BrowserRouter>
         <Switch>
           <Route path="/" exact  component={Login} />
           <Route path="/register" exact  component={Register} />
           <Route path="/dashboard" exact  component={Dashboard} />
           <Route path="/wallet" exact  component={Wallet} />
           <Route path="/transaction" exact  component={Transaction} />
           <Route path="/investment" exact  component={Investment} />
           </Switch>      
        </BrowserRouter>
       </>
    )
}


export default Routes
