import React from 'react'
import {Container, Row, Column, H1, H3, P} from './MainStyled'
import {Link } from 'react-router-dom'
import './index.css'

import {EyeOff} from 'react-feather'

const Login = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <H3>Waavewallet</H3>
                    <H1>Log in to your account </H1>
                    <P>To Buy and Sell crypto currency securely with <br />  wide ranges of features</P>
                </Column>
                <Column>
                   <div className="form-container">
                    <form>
                        <div className="form-group">
                         <label>Email</label>   
                        <input type="text" placeholder="mail@example.com" className="formControl"/>
                        </div>
                        <div className="form-group">
                        <label>Password</label>     
                        <input type="password" className="formControl" />
                        </div>
                        <div className="form-footer">
                           <div className="form-footer-text"> 
                              <input type="checkbox" id="" name="" value="" />
                              <label> Keep me signed in</label>
                           
                           </div>
                            <div className="form-footer-text">
                                <p><Link to='/'> Forgot Password? </Link></p>
                            </div>
                        </div><br /> <br />
                        <div className="form-footer">
                           <div className="form-footer-text"> 
                              <p> New user? <Link to='/register'>Create Account</Link></p>
                           </div>
                            <div className="btn">
                            <button>Login</button>
                            </div>
                        </div>
                        <div className="icon">
                            
                        <EyeOff color="#87859F" size={20} />
                        </div>
                    </form>
                  
                   </div>
                    
                </Column>
            </Row>
        </Container>
             
       
    )
}

export default Login

