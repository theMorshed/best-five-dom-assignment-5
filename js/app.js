// global variable declare and initialization
const playerList = [];
const playerListElement = document.getElementById('player-list');

// addToLeaderBoard Function while will add selected player to leader board 
function addToLeaderBoard(event) {
    const singlePlayer = this.event.target.parentNode.parentNode;
    const playerName = singlePlayer.children[0].innerText;
    // check player not more than 5
    if (playerList.length > 4) {
        alert('You can\'t add more than 5 player');
        return;
    }
    playerList.push(playerName);
    this.event.target.setAttribute('disabled', true);
    playerListElement.innerHTML = '';
    displayPlayer(playerList);
}

// displayPlayer function which is responsible to display player
function displayPlayer(playerList) {
    for (let player of playerList) {
        const li = document.createElement('li');
        li.classList.add('text-xl', 'mb-3');
        li.innerText = player;
        playerListElement.appendChild(li);
    }
}

// calculate player total cost
document.getElementById('player-cost-calculate').addEventListener('click', function () {
    const perPlayerCostField = document.getElementById('player-total-cost');
    // getValue function invoke for getting input field value
    const perPlayerCost = getValue('player-cost');
    if (perPlayerCost > 0) {
        if (perPlayerCost !== undefined) {
            const playerCost = perPlayerCost * playerList.length;
            perPlayerCostField.innerText = playerCost;
        }
    } else {
        alert('Please write a positve number.');
    }
});

// calculate grand total cost of whole team
document.getElementById('total-cost-calculate').addEventListener('click', function(){
    // getValue function invoke for getting input field value
    const managerCost = getValue('manager');
    const coachCost = getValue('coach');
    const grandTotalCostElement = document.getElementById('grand-total-cost');
    // getValue function invoke for getting HTML element value
    const playerTotalCost = getValue('player-total-cost');

    // check input value not number or NaN or negative number
    if (managerCost > 0 && coachCost > 0) {
        if (managerCost !== undefined && coachCost !== undefined) {
            const grandTotalCost = managerCost + coachCost + playerTotalCost;
            grandTotalCostElement.innerText = grandTotalCost;
        }
    } else {
        alert('Please write a positive number');
    }
});