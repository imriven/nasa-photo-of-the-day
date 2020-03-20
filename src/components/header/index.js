import React from "react";
import Styled from "styled-components"

const SuperHeader = Styled.h1`
color: ${props => props.color};
font-family: "Baloo Chettan 2", cursive;
font-size: 3rem;
margin-left: 15%;
align-items: center;
justify-content:center;
text-shadow:  5px 5px gray;
`
const SuperDiv = Styled.div`
display:flex-start;
justify-content:center;
background-color:black;
border-top-right-radius: 25px;
width: 90%;
`

function Header(props) {
   
  return (
    <SuperDiv >
      <SuperHeader color="White">{props.title}</SuperHeader>
    </SuperDiv>
  );
}

export default Header;


