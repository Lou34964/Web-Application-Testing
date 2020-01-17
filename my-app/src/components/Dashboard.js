import React from "react";

export function inc(a){
  return a+1;
}

const Dashboard = (props) => {

  const Strike = () => {
    if (props.strikes === 2) {
      props.setBalls(0)
      return props.setStrikes(0);
    } else {
      return props.setStrikes(inc(props.strikes));
    }
  };

  const Ball = () => {
    if (props.balls === 4) {
      props.setStrikes(0)
      return props.setBalls(0);
    } else {
      return props.setBalls(inc(props.balls));
    }
  };

  const Foul = () => {
    if (props.strikes < 2) {
      return props.setStrikes(inc(props.strikes));
    } else {
      return props.strikes;
    }
  };

  const Hit = () => {
    props.setHit(inc(props.hit));
    if (props.hit > -1) {
      return (
          props.setStrikes(0),
          props.setBalls(0)          
      );
    } else {
        return props.hit;
    }
  };

  const Reset = () =>{
    props.setStrikes(0);
    props.setHit(0);
    props.setBalls(0);
  }

  return (
    <div className="DashBoard-Container">
      <button onClick={Strike} className="bnts">Strike</button>
      <button onClick={Ball} className="bnts">Ball</button>
      <button onClick={Foul} className="bnts">Foul</button>
      <button onClick={Hit} className="bnts">Hit</button>
      <button onClick={Reset} className="bnts">Reset</button>
    </div>
  );
};

export default Dashboard;