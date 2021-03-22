import React, {useState} from 'react'
import {Container, Row, Column, H1, H3, P} from './MainStyled'
import {Link } from 'react-router-dom'
import {ThumbsUp} from 'react-feather'
import './index.css'



const Register = () => {

  const [onboardingState, setOnboardingState] = useState(3)


  const onBoard = ()=> { 
      if(onboardingState ===1){
          return <form>
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
         {/* <div className="form-group">
         <label>Country</label>     
           <select className="formControl">
               <option>Select country</option>
               <option>Nigeria</option>
               <option>Uk</option>
               <option>USA</option>
           </select>
         </div> */}
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
      }else if(onboardingState ===2){
          return <form>
                      <div className="verify-code">
                        <div className="verify-code-content-wrapper">
                          <div className="form-group">   
                            <input type="number" className="formControlOTP" />
                            <input type="number" className="formControlOTP" />
                            <input type="number" className="formControlOTP" />
                            <input type="number" className="formControlOTP" />
                            <input type="number" className="formControlOTP" />
                            <input type="number" className="formControlOTP" />
                          </div>
                          <h3>Enter verification code </h3>
                          <div className="verify-code-content">
                              <p>We sent a verification code to <strong>name@email.com</strong>, check it to have your account verified</p>
                               <small>Didn’t receive the code? <Link to="/"><strong>Send again</strong></Link></small>
                               
                          </div>
                          </div>
                      </div>
                </form>
      }
      else if(onboardingState === 3){
        return <form>
                    <div className="verify-code">
                      <div className="verify-code-content-wrapper">
                        <div className="verify-icon-wrapper">   
                           <div className="verify-icon">
                           <ThumbsUp color="#0059FF" size={50} fill="#0059FF" />
                           </div>
                        </div>
                        <h3 className="verify-icon-header">Verification successful</h3>
                        <div className="verify-code-content">
                              
                               <p>You have successfully verified your account. <Link to="/"><strong>Log in </strong></Link>to your account to get started.</p>
                        </div>
                        </div>
                    </div>
              </form>
    }

  }

  



    return (
        <Container>
            <Row>
                <Column>
                   {onboardingState === 1? <H3 marginTop="17vh">Waavewallet</H3>:
                     <H3 marginTop="1vh">Waavewallet</H3>
                   }
                    <H1>Create your account </H1>
                    <P>To Buy and Sell crypto currency securely with <br />  wide ranges of features</P>
                </Column>
                <Column>
                   <div className="form-container">
                     <div className="form-wrapper">
                         {onBoard()}
                     </div>
                  
                   </div>
                    
                </Column>
            </Row>
        </Container>
             
       
    )
}

export default Register


