
var gameGrid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

const positionDictionary = {
    0: "00",
    1: "01",
    2: "02",
    3: "10",
    4: "11",
    5: "12",
    6: "20",
    7: "21",
    8: "22"
}

const allTiles = document.getElementsByClassName("tile");

// add events to each time
for (let i = 0; i < allTiles.length; i++) {
    allTiles[i].addEventListener("click", e => clickTile(e, i));
}

function clickTile(event, idx) {
    event.target.style.backgroundColor = "red";

    let coordinate = positionDictionary[idx].split("");
    gameGrid[coordinate[0]][coordinate[1]] = "X";
    // console.log(gameGrid);
}