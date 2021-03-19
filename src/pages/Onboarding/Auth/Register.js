import React from 'react'
import {Container, Row, Column, H1, H3, P} from './MainStyled'
import {Link } from 'react-router-dom'
import './index.css'

import {EyeOff} from 'react-feather'

const Register = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <H3 marginTop="17vh">Waavewallet</H3>
                    <H1>Create your account </H1>
                    <P>To Buy and Sell crypto currency securely with <br />  wide ranges of features</P>
                </Column>
                <Column>
                   <div className="form-container">
                    <form>
                         <div className="form-group-input">
                            <div className="form-group mr">
                                <label>First name</label>   
                                <input type="text" placeholder="First name" className="formControl"/>
                            </div>
                            <div className="form-group ml">
                                <label>Last name</label>   
                                <input type="text" placeholder="Last name" className="formControl"/>
                            </div>
                         </div>
                        <div className="form-group">
                         <label>Email</label>   
                        <input type="text" placeholder="mail@example.com" className="formControl"/>
                        </div>
                        <div className="form-group">
                        <label>Country</label>     
                          <select className="formControl">
                              <option>Select country</option>
                              <option>Nigeria</option>
                              <option>Uk</option>
                              <option>USA</option>
                          </select>
                        </div>
                        <div className="form-group">
                        <label>Phone</label>     
                        <input type="text" className="formControl" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                        <label>Password</label>     
                        <input type="password" className="formControl" />
                        </div>
                        <div className="form-footer">
                           <div className="form-footer-text"> 
                              <input type="checkbox" id="" name="" value="" />
                              <label>I agree to the<Link to='/'><strong> Terms & Conditions </strong></Link> and <Link to='/'><strong>Privacy Policy</strong></Link></label>
                           
                           </div>
                            
                        </div><br /> <br />
                        <div className="form-footer">
                           <div className="form-footer-text"> 
                              <p> Already have an account? <Link to='/'> Log in</Link></p>
                           </div>
                            <div className="btn">
                            <button>Create Account</button>
                            </div>
                        </div>
                        <div className="icon">
                            
                       
                        </div>
                    </form>
                  
                   </div>
                    
                </Column>
            </Row>
        </Container>
             
       
    )
}

export default Register


