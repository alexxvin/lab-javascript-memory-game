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

// const openedCards = [];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards();

window.addEventListener("load", (event) => {
  let html = "";

  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  function setAsVisible(card) {
    card.classList.remove("opened");
    card.classList.add("found");
    const backCard = card.querySelector(".back");
    const frontCard = card.querySelector(".front");
    backCard.style.backgroundColor = "transparent";
    frontCard.style.backfaceVisibility = "visible";
  }

  function setAsHidden(card) {
    card.classList.remove("opened");
    const backCard = card.querySelector(".back");
    const frontCard = card.querySelector(".front");
    backCard.style.backgroundColor = "#456783";
    frontCard.style.backfaceVisibility = "hidden";
  }

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // console.log(memoryGame);
      document.querySelector("#pairs-clicked").innerText =
        memoryGame.pairsClicked;
      document.querySelector("#pairs-guessed").innerText =
        memoryGame.pairsGuessed;
      const cardName = card.getAttribute("data-card-name");
      const backCard = card.querySelector(".card .back");
      const frontCard = card.querySelector(".card .front");

      card.classList.add("opened");
      backCard.style.backgroundColor = "transparent";
      frontCard.style.backfaceVisibility = "visible";

      memoryGame.pickingCards(cardName);

      if (memoryGame.pickedCards.length === 2) {
        const openedCards = document.querySelectorAll(".opened");
        if (!memoryGame.checkIfPair()) {
          setTimeout(() => {
            openedCards.forEach((card) => {
              setAsHidden(card);
            });
          }, 1000);
        } else {
          openedCards.forEach((card) => {
            setAsVisible(card);
          });
        }
        memoryGame.resetPickingCards();
      }
    });
  });
});
