// origin js
function add(x, y) {
  return x + y;
}
let myAdd = function (x, y) {
  return x + y;
};

// add types
function add1(x: number, y: number): number {
  return x + y;
}
let myAdd1: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

// Bind "this"
// let deck = {
//   suits: ["spades", "hearts", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker() {
//     return function () {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     };
//   },
// };

// let cardPicker = deck.createCardPicker(); // "this" is set to undefined
// let pickedCard = cardPicker();

// console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);
// let deck = {
//   suits: ["spades", "hearts", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker() {
//     // Note the line bellow is arrow function now
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     };
//   },
// };

// let cardPicker = deck.createCardPicker(); // "this" is set to undefined
// let pickedCard = cardPicker();

// console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);

// use Typescript way
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ["spades", "hearts", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker(this: Deck) {
    // Note the line bellow is arrow function now
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);
