import React from 'react';
import Card from './Card.js';

// takes an array of cards and renders the individual cards, along with player
// number and score, wrapped inside a div with class "hand"

function Hand(props) {
  function renderCard(i) {
    return (
      <Card key={props.cards[i].rank + props.cards[i].suit[0]} suit={props.cards[i].suit} rank={props.cards[i].rank} img={props.cards[i].img} />
    );
  }

  function renderHand(array) {
    let hand = [];
    for (let i = 0; i < array.length; i++) {
      hand.push(renderCard(i));
    }
    return (
      <div className="hand">
        <h2>Player {props.playerNumber} - Score: {props.score}</h2>
        {hand}
      </div>
    );
  }

  return (
    <div className="hand">
      {renderHand(props.cards)}
    </div>
  );
}

export default Hand;
