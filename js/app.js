const playerList = [];
const playerListElement = document.getElementById('player-list');

function addToLeaderBoard(event) {
    const singlePlayer = this.event.target.parentNode.parentNode;
    const playerName = singlePlayer.children[0].innerText;
    if (playerList.length > 4) {
        alert('You can\'t add more than 5 player');
        return;
    }
    playerList.push(playerName);
    this.event.target.setAttribute('disabled', true);
    playerListElement.innerHTML = '';
    displayPlayer(playerList);
}

function displayPlayer(playerList) {
    for (let player of playerList) {
        const li = document.createElement('li');
        li.classList.add('text-xl', 'mb-3');
        li.innerText = player;
        playerListElement.appendChild(li);
    }
}