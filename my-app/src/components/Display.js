import React from "react";

const Display = props => {
    //console.log(props.strikes);
  return (
    <div className="Display-Container">
      <p className="Child-Disp">Balls: {props.balls}</p>
      <p className="Child-Disp">Strikes: {props.strikes}</p>
      <p className="Child-Disp">Hits: {props.hit}</p>
    </div>
  );
};

export default Display;