let grid = document.querySelector(".grid");

window.addEventListener("load", () => {
  let gridSize = getGridSize();
  createGrid(gridSize);
});

// Array.from(allCells).forEach((cell) => {
//   cell.addEventListener("mouseover", highlightCell);
// });

const changeGridSizeButton = document.querySelector(".button--grid--size");

changeGridSizeButton.addEventListener("click", () => {
  let newGridSize = getGridSize();
  createGrid(newGridSize);
});

// functions

function createGrid(gridSize) {
  grid.innerHTML = "";

  for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid--row");

    grid.appendChild(gridRow);

    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid--cell");

      //this tells the order of the current cell
      //   cell.dataset.row = i;
      //   cell.dataset.column = j;

      cell.addEventListener("mouseover", highlightCell);

      //add cell into large grid
      gridRow.appendChild(cell);
    }
  }
}
function getRandomColor() {
  return Math.floor(Math.random() * 255);
}
function highlightCell() {
  this.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}

function clearAllHighlight() {
  let allCells = document.querySelectorAll(".grid--cell");
  Array.from(allCells).forEach((cell) => {
    cell.style.backgroundColor = "initial";
  });
}

function getGridSize() {
  return document.querySelector(".grid--size").value;
}
