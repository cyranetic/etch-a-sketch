const container = document.querySelector("body");

//default number of squares per side
let squares = 16;

//add title
const title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";
container.appendChild(title);

//Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad.

const squaresButton = document.createElement("button");
squaresButton.textContent = "Resize";
container.appendChild(squaresButton);

//make a square grid containing the given number of squares:
function createGrid() {
  for (let i = 0; i < squares; i++) {
    for (let i = 0; i < squares; i++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.flex = `0 0 ${(1 / squares) * 100}%`;
      //make color change on hover on the div squares
      pixel.addEventListener("mouseenter", (e) => {
        console.log(e.target);
        e.target.style.backgroundColor = "pink";
      });
      gameContainer.appendChild(pixel);
    }
  }
}

//Initialize the Etch-a-Sketch: create frame and fill with default number of squares
const gameContainer = document.createElement("div");
gameContainer.classList.add("game-container");
container.appendChild(gameContainer);
createGrid();

squaresButton.addEventListener("click", (e) => {
  squares = prompt("How many squares per side? Let's keep it under 100");
  if (squares > 100) {
    squares = prompt("How many squares per side? Let's keep it under 100");
  } else if (squares <= 100) {
    gameContainer.replaceChildren();
    createGrid();
  }
});
