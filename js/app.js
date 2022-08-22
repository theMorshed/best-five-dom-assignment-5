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

document.getElementById('player-cost-calculate').addEventListener('click', function () {
    const perPlayerCostField = document.getElementById('player-total-cost');
    const perPlayerCost = getValue('player-cost');
    if (perPlayerCost !== undefined) {
        const playerCost = perPlayerCost * playerList.length;
        perPlayerCostField.innerText = playerCost;
    }
});

document.getElementById('total-cost-calculate').addEventListener('click', function(){
    const managerCost = getValue('manager');
    const coachCost = getValue('coach');
    const grandTotalCostElement = document.getElementById('grand-total-cost');
    const playerTotalCost = getValue('player-total-cost');
    if (managerCost !== undefined && coachCost !== undefined) {
        const grandTotalCost = managerCost + coachCost + playerTotalCost;
        grandTotalCostElement.innerText = grandTotalCost;
    }
});