import styled from  "styled-components/macro"


export const Container = styled.div`
  
  display: flex;
  justify-content:center;
  align-items: center;
  min-height:100vh;
  background-color: #1A2841;
  color:#fff;
  padding:0 1rem;
`

export const Row = styled.div`
 width: 1120px;
 display: flex;
 justify-content: space-between;
 align-items : ${(props) => props.value};

@media (max-width: 768px){
    min-width: 100%;
    flex-direction: column;
}
`
export const Column = styled.div`
width: 50% ;
@media (max-width: 768px){
    width: 100% ;
}

`

export const H1 = styled.h1`
font-size:36px;
/* line-height:24px; */
`

export const H3 = styled.h3`
    font-size: 24px;
    letter-spacing: 2px;
    padding-bottom: 3rem;
    margin-top: ${(props)=> props.marginTop};
`
export const P = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #EBECEE;
margin-top:5vh;
letter-spacing: .4px;
width: 400px;

@media(max-width:600px){
    width:100%;
}
`
