const modalEl = document.getElementById("modal");


function initiazedSessionScreen() {

    const modalEl = document.getElementById("modal");

    // create action buttons
    const joinGameBtn = document.createElement("button");
    const createGameBtn = document.createElement("button");

    // set content
    joinGameBtn.innerText = "Join Game";
    createGameBtn.innerText = "Create Game";

    // Add event listeners to buttons here
    //---
    
    // add buttons to game modal
    modalEl.appendChild(joinGameBtn);
    modalEl.appendChild(createGameBtn);
    return;
}

export {
    initiazedSessionScreen  
};