import React from "react";


function Footer(props) {
  return (
    <div >
      <div>
        <p>
            {props.copyright}
        </p>
      </div>
        <p>
            {props.date}
        </p>
    </div>
  );
}

export default Footer;
