import React, {useState, useEffect} from 'react'
// import {FaBars} from 'react-icons/fa'
import * as Icon from 'react-feather'

import {Nav, NavbarContainer, NavLogo,NavbarWrapper, MobileIcon, NavMenu, NavItems,NavLinks,IconWrapper, NavBtn, ProfileIcon, NavBtnLinkL} from './NavStyle'

const Navbar = () => {
    const[scrollNav, setScrollNav] = useState(false)


  
    const changeNavBarBgColor = () =>{
      if(window.scrollY >= 80){
        setScrollNav(true)
      }else{
        setScrollNav(false)
      }
    }
  
    useEffect(() => {
      window.addEventListener("scroll", changeNavBarBgColor)
    }, [])
  
       
      
          return (
              <>
             <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                      <NavbarWrapper>
                      <NavLogo to="/">
                         Waavewallet
                      </NavLogo>
                      <MobileIcon >
                        {/* <FaBars /> */}
                      </MobileIcon>
                      <NavMenu>
                        <NavItems>
                            <NavLinks to="/dashboard">Home</NavLinks>
                            <NavLinks to="/wallet">Wallet</NavLinks>
                            <NavLinks to="/transaction">Transactions</NavLinks>
                            <NavLinks to="/investment">Investments</NavLinks>
                           
                        </NavItems>
                      </NavMenu>
                      </NavbarWrapper>
                      <NavBtn>
                       <IconWrapper> <Icon.Bell  fill={'#fff'} size={18} style={{ color:"#fff"}} />
                      </IconWrapper>
                      <NavBtnLinkL to="/">  <ProfileIcon> JD</ProfileIcon> John Doe</NavBtnLinkL>
                        
                          
                      </NavBtn>
                  </NavbarContainer>
                 
              </Nav> 
              </>
          )
}

export default Navbar
