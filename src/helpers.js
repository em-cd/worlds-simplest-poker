import ClubsImg from './assets/clubs.png';
import DiamondsImg from './assets/diamonds.png';
import HeartsImg from './assets/hearts.png';
import SpadesImg from './assets/spades.png';

var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var imgs = [HeartsImg, SpadesImg, DiamondsImg, ClubsImg];

// create new array of 52 card objects
function newDeck() {
  var deck = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      var card = {
        suit: suits[i],
        rank: ranks[j],
        img: imgs[i]
      };
      deck.push(card);
    }
  }
  return deck;
}

// implementing the fisher-yates shuffle
function shuffle(deck) {
  for (var i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}

function deal(deck, players, cards) {
  var hands = [];
  for (var i = 0; i < players; i++) {
    var begin = i * cards, end = (i + 1) * cards;
    var hand = deck.slice(begin, end);
    hands.push(hand);
  }
  return hands;
}

// sort by suit, then rank
function compare(a, b) {
  if (suits.indexOf(a.suit) === suits.indexOf(b.suit)) {
    return ranks.indexOf(b.rank) - ranks.indexOf(a.rank);
  }
  else if (suits.indexOf(a.suit) > suits.indexOf(b.suit)) {
    return 1;
  } else {
    return -1;
  }
}

function calculateScore(array) {
  var score = 0;
  var pairs = 0;
  var threeOfAKind = 0;

  for (var i = 0; i < array.length; i++) {

    // first add the individual values of cards to the score
    var value = ranks.indexOf(array[i].rank) + 1;
    score += value;

    // TO DO
    // check if there is a straight (5 in a row), if so add 40pts
   
    // check for pairs and three-of-a-kinds
    var count = 1; // keep count of the number of cards of same rank
    for (var j = 0; j < array.length; j++) {
      // loop through all the cards except current one, adding to count if we find one of same rank
      if (j !== i) {
        if (array[i].rank === array[j].rank) {
          count ++;
        }
      }
    }

    // check count for pairs or three-of-a-kinds
    if (count === 2) {
      pairs++;
    } else if (count === 3) {
      threeOfAKind++;
    }
  }

  // finally add bonus points
  if (pairs !== 0) {
    pairs = pairs / 2;
    score += 10 * pairs;
  }
  if (threeOfAKind !== 0){
    threeOfAKind = threeOfAKind / 3;
    score += 20 * threeOfAKind;
  }

  return score;
}

export {newDeck, shuffle, deal, compare, calculateScore};