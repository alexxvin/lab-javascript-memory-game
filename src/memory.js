class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    let currentIndex = this.cards.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.

      let tempCard = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = tempCard;

      // [this.cards[currentIndex], this.cards[randomIndex]] = [
      //   this.cards[randomIndex],
      //   this.cards[currentIndex],
      // ];
    }

    return this.cards;
  }

  checkIfPair() {
    this.pairsClicked++;
    if (this.pickedCards[0] === this.pickedCards[1]) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    if (this.checkIfWin()) {
      // return "Winner";
      return this.checkIfWin();
    } else if (this.checkIfLost()) {
      // return "Lost";
      return this.checkIfLost();
    }
    // ... write your code here
    return false;
  }

  checkIfLost() {
    if (this.pairsClicked === this.cards.length) {
      return true;
    }
    return false;
  }

  checkIfWin() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
  }

  pickingCards(pickedCard) {
    this.pickedCards.push(pickedCard);
  }

  resetPickingCards() {
    this.pickedCards = [];
  }
}
