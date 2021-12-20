const modalEl = document.getElementById("modal");


function initiazedSessionScreen(socket) {

    const modalEl = document.getElementById("modal");

    // create action buttons
    const joinGameBtn = document.createElement("button");
    const createGameBtn = document.createElement("button");

    // set content
    joinGameBtn.innerText = "Join Game";
    createGameBtn.innerText = "Create Game";

    // Add event listeners to buttons here
    //---
    joinGameBtn.addEventListener("click", () => {
        const name = prompt("Enter your player name");
        const gameId = prompt("Enter the game key");

        const reqData = {
            name,
            gameId
        };

        socket.send(JSON.stringify(reqData));
        modalEl.style.display = "none";
    });

    createGameBtn.addEventListener("click", () => {
        const playName = prompt("Enter your player name");
        const newSess = {
            name: playName
        };

        socket.send(JSON.stringify(newSess));
        modalEl.style.display = "none";
    });

    // add buttons to game modal
    modalEl.appendChild(joinGameBtn);
    modalEl.appendChild(createGameBtn);
    return;
}

export {
    initiazedSessionScreen  
};