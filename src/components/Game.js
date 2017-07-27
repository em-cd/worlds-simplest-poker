import React from 'react';
import {shuffle, newDeck} from '../helpers.js';
import Form from './Form.js';
import Table from './Table.js';

class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      deck: [],
      players: 0,
      cardsPerHand: 0,
      showTable: false,
      inputPlayers: 2,
      inputCards: 5
    }
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.inputPlayers * this.state.inputCards > 52) {
      alert('There aren\'t enough cards for this combination! Please choose a lower number of players or cards.')
      return;
    }

    this.setState({
      deck: shuffle(newDeck()),
      showTable: true,
      players: this.state.inputPlayers,
      cardsPerHand: this.state.inputCards
    });
  }

  render() {
    return (
      <div className="game">
        <h1>World's Simplest Poker</h1>
        <Form
          inputPlayers={this.state.inputPlayers}
          inputCards={this.state.inputCards}
          onChange={(event) => this.handleChange(event)}
          onSubmit={(event) => this.handleSubmit(event)}
        />
        <Table
          deck={this.state.deck}
          players={this.state.players}
          cardsPerHand={this.state.cardsPerHand}
          showTable={this.state.showTable}
        />
      </div>
    );
  }
  
}

export default Game;