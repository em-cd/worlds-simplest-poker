import React from 'react';
import Card from './Card.js';

// takes an array of cards and renders the individual cards, along with player
// number and score, wrapped inside a div with class "hand"

function Hand(props) {
  const { cards, playerNumber, score } = props;

  function renderCard(card) {
    return (
      <Card
        key={card.rank + card.suit[0]}
        suit={card.suit}
        rank={card.rank}
        img={card.img} />
    );
  }

  function renderHand(array) {
    let hand = [];
    for (let i = 0; i < array.length; i++) {
      hand.push(renderCard(cards[i]));
    }
    return (
      <div className="hand">
        <h2>Player {playerNumber} - Score: {score}</h2>
        {hand}
      </div>
    );
  }

  return (
    <div className="hand">
      {renderHand(cards)}
    </div>
  );
}

export default Hand;
