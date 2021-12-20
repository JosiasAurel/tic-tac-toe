const modalEl = document.getElementById("modal");

function initiazedSessionScreen(socket) {

    let tOwner = false;

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
        sessId = prompt("Enter the game key");

        const reqData = {
            name,
            gameId: sessId,
            info: "join"
        };

        socket.send(JSON.stringify(reqData));
        modalEl.style.display = "none";
    });

    createGameBtn.addEventListener("click", () => {
        const playName = prompt("Enter your player name");
        const newSess = {
            name: playName,
            info: "create"
        };

        socket.send(JSON.stringify(newSess));
        modalEl.style.display = "none";

        tOwner = true;
    });

    // add buttons to game modal
    modalEl.appendChild(joinGameBtn);
    modalEl.appendChild(createGameBtn);

    return {tOwner, sessId};
}

export {
    initiazedSessionScreen 
};