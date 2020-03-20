import React from "react";
import Styled from "styled-components"

const FooterMainDiv = Styled.div`
display:flex;

flex-wrap: no-wrap;
padding: 2%;
width: 100%;
background-color:black;
border-bottom-left-radius: 25px;
margin-right: 0 0 3% 1%
`

const FootertCopyDiv = Styled.div`
color: white;
display:flex;
justify-content:center;
width: 33%;
`

const FooterDateDiv = Styled.div`
color: white;
display:flex;
justify-content:center;
width: 33%;
`

const FooterInputDiv = Styled.div`
color: white;
display:flex;
justify-content:center;
width: 33%;
`

function Footer(props) {
  return (
    <FooterMainDiv >
      <FootertCopyDiv>
        <p>
            {props.copyright}
        </p>
      </FootertCopyDiv>
      <FooterDateDiv>
        <p>
            {props.date}
        </p>
      </FooterDateDiv>
         <FooterInputDiv>
        
        
        <input type="date" value={props.inputDate} onChange={props.changeDate} />
    </FooterInputDiv>
    </FooterMainDiv>
   
  );
}

export default Footer;
