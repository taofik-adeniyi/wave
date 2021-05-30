
import styled from 'styled-components/macro'
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
background:${({scrollNav})=>(scrollNav ? "#1A2841" : "#1A2841")};
height:80px;
display:flex;
justify-content: center;
align-items : center;
position: sticky;
top:0;
z-index:10;
width:100%;

@media (max-width:960px){
    transition: 0.8s all ease;
}


@media (max-width: 768px){

background:${({scrollNav})=>(scrollNav ? "#1A2841" : "#1A2841;")};
height:80px;
display:flex;
margin-top: -80px;
}

`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:100% ;
height: 80px;

z-index:1;
padding:0 24px;
 max-width:1400px; 

@media (max-width: 768px) {
  justify-content: flex-start;
}

`

export const NavbarWrapper = styled.div`
display: flex;
`

export const NavLogo = styled(LinkR)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
width:150px;
font-size:16px;
font-weight:600;
color:#fff;
display:flex;
align-items:center;

@media (max-width: 768px) {
  display: none;
}
@media (max-width: 480px){
    width:120px;
}

`
export const ImgLogo = styled.img`
  width: 100%;
  display:flex;
  justify-self:flex-start;

`

 export const MobileIcon = styled.div`
  display:none;

  @media (max-width: 768px){
    display:block; 
    position:absolute;
    // top:0;
    // right:0;
    cursor:pointer;
    font-size:1.5rem;
    // transform: translate(-100%, 60%);
    color:#fff;
  }
 `
 export const MobileDropDown = styled.div`
  display: none;
  
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    position absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    background-color: #0a1f44;
    opacity: 0.9;
    color: #fff;
    // transition: ${({mobile})=>mobile ? 'transform ease-out 150ms;' : ''}
    // transition: ${({mobile})=>mobile ? 'left ease-out 5ms' : '' }
  }
 `
 export const ItemWrapper = styled.div`
    position: relative; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-tems: center
 `

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style: none;
margin-bottom:0px !important;
text-align:center;
margin-top:0;

@media (max-width: 768px){
    display:none; 

  }

`

export const NavItems = styled.li`
 height:80px;
 display:flex;
 align-items:center;
`

export const NavLinks =styled(LinkR)`
 display: flex;
 align-items: center;
 color: #898F99;
 font-family:poppins;
 font-size: .9rem;
 text-decoration:none !important;
font-weight: 600 !important;
padding: 0 3px;
border-bottom:3px solid  transparent;

transition: all .2s ease-in-out;
 padding:0 1.5rem;
 cursor:pointer;
 height:100%;

 &:active{
    background-color:#0D182C;
    color:#fff;
 }
 &:hover{
    color:#0089ff;
    transition: all .2s ease-in-out;
    background-color:#0D182C;
    color:#fff;
    border-bottom:3px solid  #0059FF;
  

}


`
export const Item = styled(LinkR)`
  box-sizing: border-box; 
  text-align: center; 
  width: 100%; 
  padding: 20px;
  color: #fff;
  border-bottom: 1px solid #999;
  &:hover{
    color: blue;
  }
  // &:focus{
  //   color: red;
  // }
`
export const Body = styled.div`
  display: flex; 
  height: 80px; 
  font-weight: bold; 
  color: #fff; 
  width: 100%;
  justify-content: center;
  align-items: center; 
  background-color: #1A2841;
`

export const NavBtn = styled.nav`
display:flex;
align-items:center;


@media (max-width:768px){
    display:none;
}

`

export const NavBtnLinkL = styled(LinkR)`
padding: 7px 25px 8px 25px;
display: flex;
align-items: center;
font-size:.9rem;
color:#fff;
padding:10px 12px;
 font-weight:600;
font-family:poppins;
transition: all .2s ease-in-out;
 border-left: 1px solid #ffffff75;
height: 3px;

&:hover{
    color:#fff;
}


`

export const ProfileIcon = styled.div`
display:flex;
align-items:center;
justify-content:center;
 width: 40px;
 height:40px;
border-radius : 50%;

color:#fff;
font-weight:600;
font-size:14px;
background: #f0f5ff1c;
margin-right:.8rem;
letter-spacing: 1.1px;
`
export const IconWrapper = styled.div`
margin-right:.8rem;
display:flex;
align-items:center;
`

export const NavBtnLink = styled(LinkR)`


color: #040da0;
font-weight:600;
border-radius: 10px;
padding: 7px 25px 8px 25px;
white-space: nowrap;
transition: 0.3s;
font-size: .9rem;
border: 2px solid transparent;

font-weight: 600;
background: #fff;
font-family: poppins; 
transition: all .2s ease-in-out;

&:hover{
    color:#fff;
    border: 2px solid #fff;
    background: transparent;
    transition: all .2s ease-in-out;
}


`
export const Mobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    margin-left: auto;
  }
`
export const Divider = styled.div`
  width: 1px; 
  height: 40px;
  margin-right: 10px; 
  position: relative;
  background-color: #999;
`