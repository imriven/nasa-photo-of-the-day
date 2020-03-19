import React from "react";
import Styled from "styled-components"

const MainContainerDiv = Styled.div`
display:flex;
flex-wrap:no-wrap;
margin-bottom: 5%
`

const MainDisplayDiv = Styled.div`
display: flex;
box-shadow: 10px 10px 8px #888888;
borderTopRightRadius: 15;
`

const MainDescriptionDiv = Styled.div`
display:flex;
width: 50%;
align-items:center;
text-align: justify;
line-height:150%;
padding: 2%;
`


function Main(props) {
    let display;
if (props.type === "image") {
    display = <img height="auto" width="100%" src={props.url} />
} else if(props.type === "video") {
    display = <iframe width="640" height="480"
    src={props.url}>
    </iframe>
}


  return (
    <MainContainerDiv >
      <MainDisplayDiv>
 
        
        {display}
        
      </MainDisplayDiv>
      <MainDescriptionDiv>
          <p>
          {props.description}
          </p>
      </MainDescriptionDiv>
    </ MainContainerDiv>
  );
}

export default Main;
