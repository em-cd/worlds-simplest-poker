import React from 'react';

function Card(props) {
  const { rank, suit, img } = props;
  return (
    <div className="card">
      <div className="upper">{rank}</div>
      <div className="inner">
        <img src={img} alt={suit} />
      </div>
      <div className="lower">{rank}</div>
    </div>
  );
}

export default Card;
