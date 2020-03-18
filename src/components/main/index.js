import React from "react";


function Main(props) {
  return (
    <div >
      <div>
          <img src={props.image}>
          </img>
      </div>
      <div>
          <p>
          {props.description}
          </p>
      </div>
    </div>
  );
}

export default Main;
