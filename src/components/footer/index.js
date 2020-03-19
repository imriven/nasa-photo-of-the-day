import React from "react";


function Footer(props) {
  return (
    <div >
      <div>
        <p>
            {props.copyright}
        </p>
      </div>
      <div>
        <p>
            {props.date}
        </p>
      </div>
         <div>
        
        
        <input type="date" value={props.inputDate} onChange={props.changeDate} />
    </div>
    </div>
   
  );
}

export default Footer;
