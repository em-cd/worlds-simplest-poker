import { newDeck } from '../helpers';

test('newDeck returns a deck of 52 cards', () => {
  const deck = newDeck();
  expect(deck.length).toBe(52);
});

