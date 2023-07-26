const container = document.querySelector("body");

const title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";
container.appendChild(title);

const gameContainer = document.createElement("div");
gameContainer.classList.add("game-container");
container.appendChild(gameContainer);

//make a 16 x 16 grid of these divs:
for (let i = 0; i < 16; i++) {
  for (let i = 0; i < 16; i++) {
    const pixel = document.createElement("div");
    gameContainer.appendChild(pixel);
  }
}

//make color change on hover on the div squares

//Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
