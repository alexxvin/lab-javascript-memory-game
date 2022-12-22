window.addEventListener("load", () => {
  console.log("Scripts are connected", { document });
});

const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const openedCards = ["ss", "rr"];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards();

window.addEventListener("load", (event) => {
  let html = "";
  console.log(memoryGame.cards);

  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here

      console.log(`Card clicked: ${card}`);

      const cardName = card.getAttribute("data-card-name");
      console.log(cardName);
      const backCard = card.querySelector(".card .back");
      const frontCard = card.querySelector(".card .front");

      backCard.style.backgroundColor = "transparent";
      frontCard.style.backfaceVisibility = "visible";

      memoryGame.pickingCards(cardName);

      const isPairFound = memoryGame.checkIfPair(
        memoryGame.pickedCards[0],
        memoryGame.pickedCards[1]
      );

      // if (!isPairFound) {

      //   // setTimeout(() => {
      //   backCard.style.backgroundColor = "#456783";
      //   frontCard.style.backfaceVisibility = "hidden";
      //   // }, 2000);
      // }

      console.log({ result: isPairFound });

      console.log({ memoryGame });

      // console.log(card);
      // getting name of the card frim the node
      // updating the class with the card clciked
      //
    });
  });
});
