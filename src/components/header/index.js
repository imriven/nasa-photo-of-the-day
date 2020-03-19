import React from "react";
import Styled from "styled-components"

const SuperHeader = Styled.h1`
color: ${props => props.color};
font-family: "Baloo Chettan 2", cursive;
font-size: 3rem;
align-items: center;
justify-content:center;
`
const SuperDiv = Styled.div`
display:flex;
justify-content:center;


width:100%;
height:10vh;
border-radius; 0 0 15% 0;
`

function Header(props) {
   
  return (
    <SuperDiv >
      <SuperHeader color="Purple">{props.title}</SuperHeader>
    </SuperDiv>
  );
}

export default Header;


