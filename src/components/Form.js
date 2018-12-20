import React from 'react';

function Form(props) {
  return (
    <form onSubmit={(event) => props.onSubmit(event)}>
      <label>
        How many players?
        <input
          id='players'
          type="number"
          name="inputPlayers"
          value={props.inputPlayers}
          min="2"
          max="52"
          onChange={(event) => props.onChange(event)} />
      </label>
      <label>
        How many cards per person?
        <input
          id='cards'
          type="number"
          name="inputCards"
          value={props.inputCards}
          min="1"
          max="52"
          onChange={(event) => props.onChange(event)} />
      </label>
      <input id='submit' type="submit" value="Play!" />
    </form>
  );
}

export default Form;
