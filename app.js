const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = ["", "", "", "", "", "", "", "", ""];

let play = "circle";
infoDisplay.textContent = "!دایره شروع کننده بازیه";
let alertName = "";

function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameBoard.append(cellElement);
  });
}
createBoard();

function addGo(e) {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(play);
  e.target.append(goDisplay);
  play = play === "circle" ? "cross" : "circle";
  alertName = play === "circle" ? "دایره" : "ضربدر";
  infoDisplay.textContent = "حالا نوبت " + alertName + " که انتخاب کنه";
  e.target.removeEventListener("click", addGo);
}
