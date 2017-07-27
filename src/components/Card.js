import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <div className="upper">{props.rank}</div>
      <div className="inner">
        <img src={props.img} alt={props.suit} />
      </div>
      <div className="lower">{props.rank}</div>
    </div>
  );
}

export default Card;