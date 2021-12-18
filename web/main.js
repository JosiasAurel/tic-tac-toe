
const SERVICE_URI = "http://localhost:8000" // "https://z90dnq.deta.dev";

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

function invertDictionary(dictionary) {
    const inverted = {};

    for (item in dictionary) {
        inverted[dictionary[item]] = item;
    }

    return inverted;
}

let canPlay = true;

const allTiles = document.getElementsByClassName("tile");

// add events to each time
for (let i = 0; i < allTiles.length; i++) {
    allTiles[i].addEventListener("click", e => clickTile(e, i));
}

function updateGameScreen() {
    let reversedPosDict = invertDictionary(positionDictionary);

    gameGrid.forEach((lilgrid, i) => {
        lilgrid.forEach((slot, j) => {
            if (slot !== "") {
                let tileIndex = reversedPosDict[`${i}${j}`];
                allTiles[tileIndex].innerText = slot;
            }
        });
    });
    return;
}

function clickTile(event, idx) {
    event.target.style.backgroundColor = "blue";

    let coordinate = positionDictionary[idx].split("");
    gameGrid[coordinate[0]][coordinate[1]] = "X";

    updateGameScreen();
    // console.log(gameGrid);
    sendGameState();
}

function sendGameState() {
    makeRequest({
        endpoint: `${SERVICE_URI}/push-state`,
        method: "POST",
        body: {grid: gameGrid}
    }).then(res => {
        console.log(res);
    });
    return;
}

async function makeRequest({
    endpoint,
    method,
    data
}) {
    const response = await fetch(endpoint, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
}