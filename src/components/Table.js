import React from 'react';
import {deal, compare, calculateScore} from '../helpers.js';
import Hand from './Hand.js';

function Table(props) {

  const hands = deal(props.deck, props.players, props.cardsPerHand); 
  var renderHands = [];

  let highestScore = 0;
  let winner = 0;
  let tie = false;

  for (var i = 0; i < hands.length; i++) {

    let sorted = hands[i].sort(compare); // sort hand by suit and rank
    let score = calculateScore(sorted); // get each hand's score

    if (score > highestScore && score !== 0) {
      highestScore = score; // update the highest score
      winner = (i + 1); // update the winner
      tie = false;
    } 
    else if (score === highestScore) { // check for ties
      winner = winner + ' and ' + (i + 1);
      tie = true;
    }

    renderHands.push(<Hand key={i} playerNumber={i + 1} cards={sorted} score={score} />);
  }

  let status;

  if (tie) {
    status = 'There\'s a tie! Players ' + winner + ' with score ' + highestScore;
  } else {
    status = 'Winner: player ' + winner + ' with score ' + highestScore;
  }

  if (props.showTable) {
    return (
      <div className="table">
        <div className="hands">
          {renderHands}
        </div>
        <div className="status">
          {status}
        </div>
      </div>
    );
  }
  return null;
  
}

export default Table;