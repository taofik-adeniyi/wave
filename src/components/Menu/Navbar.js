import React, {useState, useEffect} from 'react'
// import {FaBars} from 'react-icons/fa'
import * as Icon from 'react-feather'

import {ItemWrapper, Body, Item, Nav, NavbarContainer, NavLogo,NavbarWrapper, MobileIcon, MobileDropDown, Mobile, Divider, NavMenu, NavItems,NavLinks,IconWrapper, NavBtn, ProfileIcon, NavBtnLinkL} from './NavStyle'

const Navbar = () => {
    const[scrollNav, setScrollNav] = useState(false)
    const[mobile, setMobile] = useState(false)


  
    const changeNavBarBgColor = () =>{
      if(window.scrollY >= 80){
        setScrollNav(true)
      }else{
        setScrollNav(false)
      }
    }

    const openMobile = () => {
      setMobile(!mobile)
    }
  
    useEffect(() => {
      window.addEventListener("scroll", changeNavBarBgColor)
    }, [])
  
       
      
          return (
              <>
             <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <MobileIcon onClick={openMobile}>
                      <Icon.Menu  fill={'#fff'} size={28} style={{ color:"#fff"}} /> 
                  </MobileIcon>
                  <Mobile>
                  <IconWrapper> 
                    <Icon.Bell  fill={'#fff'} size={18} style={{ color:"#fff"}} />
                  </IconWrapper>
                  <Divider />
                  <ProfileIcon> JD</ProfileIcon>
                  </Mobile>
                  
                      {
                        mobile && 
                        <MobileDropDown mobile={mobile}>
                          <Body>Waavewallet</Body>
                        <ItemWrapper>
                          <Item to="/dashboard">Home</Item>
                          <Item to="/wallet">Wallet</Item>
                          <Item to="/transaction">Transactions</Item>
                          <Item to="/investment">Investments</Item>
                        </ItemWrapper>
                        </MobileDropDown>
                      }
                      <NavbarWrapper>
                      <NavLogo to="/">
                         Waavewallet
                      </NavLogo>
                      {/* <MobileIcon onClick={openMobile}>
                          <Icon.Menu  fill={'#fff'} size={28} style={{ color:"#fff"}} /> 
                      </MobileIcon> */}
                      
                      {/* {
                        mobile && 
                        <MobileDropDown>
                          <div style={{backgroundColor: 'yellow'}}>uii</div>
                          <h3>Taofik</h3>
                        </MobileDropDown>
                      } */}
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
                       <IconWrapper> 
                         <Icon.Bell  fill={'#fff'} size={18} style={{ color:"#fff"}} />
                      </IconWrapper>
                      
                      <NavBtnLinkL to="/">  
                        <ProfileIcon> JD</ProfileIcon>
                        John Doe
                      </NavBtnLinkL>
                      </NavBtn>

                  </NavbarContainer>
                 
              </Nav> 
              </>
          )
}

export default Navbar
