
import { initiazedSessionScreen } from "./modal.js";

const SERVICE_URI = "wss://tic-tac-toe-experiment-server.josiasaurel.repl.co";

// establish socket connection
const socket = new WebSocket(SERVICE_URI);

// handle a connection close
socket.onclose = _ => {
    const connectStateEl = document.getElementById("connect-state");
    connectStateEl.style.backgroundColor = "red";
    alert("Socket Connection Closed");
    alert("Disconnected");
}

socket.onerror = error => {
    const connectStateEl = document.getElementById("connect-state");
    connectStateEl.style.backgroundColor = "red";
    alert(`An error occurred, reason : ${error.message}`);
}

socket.onopen = msg => {
    const connectStateEl = document.getElementById("connect-state");
    connectStateEl.style.backgroundColor = "greenyellow";
}

socket.onmessage = msg => {
    let data = JSON.parse(msg.data);

    if (data.info === "update") {
        gameGrid = data.grid;
        updateGameScreen();
    } else if (data.info === "") {

    }
    // console.log(msg);
    console.log(data);
}

let owner = false;
let gameId = sessId;

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

    for (let item in dictionary) {
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
    console.log(positionDictionary);
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

    notifyServer();
    updateGameScreen();
    // console.log(gameGrid);
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

function notifyServer() {
    console.log(gameId);
    if (owner) {
        socket.send(JSON.stringify({ info: "update", grid: gameGrid }));
    } else {
        const reqData = JSON.stringify({ info: "update", grid: gameGrid, id: sessId })
        console.log(reqData);
        socket.send(reqData);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const data = initiazedSessionScreen(socket);
    owner = data.tOwner;
    gameId = sessId;
});