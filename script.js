const container = document.querySelector("#container");
const grid = document.querySelector(".grid");
var gridWidth = 4;
for (x = 0; x < gridWidth * 4; x++) {
  var square = document.createElement("div");
  square.className = "square";
  grid.appendChild(square);
}

var squareNodelist = document.querySelectorAll(".square");

squareNodelist.forEach((square) => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);

  square.addEventListener("mouseover", () => {
    square.setAttribute("style", `background-color: #${randomColor}`);
  });
});
//Reset logic
//ResetButton

var resetGrid = document.createElement("button");
resetGrid.className = "button";
resetGrid.textContent = "Reset";
container.prepend(resetGrid);
var squaresToReset = document.querySelectorAll(".square");
resetGrid.addEventListener("click", () => {
  squaresToReset.forEach((square) => {
    square.remove();
  });
  var gridWidth = prompt("How many square per side to make new grid");
  setGrid(gridWidth);
});

function setGrid(gridWidth) {
  for (x = 0; x < gridWidth * 4; x++) {
    var square = document.createElement("div");
    square.className = "square";
    grid.appendChild(square);
  }

  var squareNodelist = document.querySelectorAll(".square");
  squareNodelist.forEach((square) => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    square.addEventListener("mouseover", () => {
      square.setAttribute("style", `background-color: #${randomColor}`);
    });
  });
}

//
