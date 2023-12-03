const btnKey = document.querySelectorAll('.btnKey')
const players = document.getElementById('players')
const turnPlayer = document.getElementById('turnPlayer')

const keysPressed_X = []
const keysPressed_O = []

let currentPlayer = 'X'
let numberOfMoves = 0

const winCondicional = [
    ['1', '2', '3'],
    ['1', '4', '7'],
    ['1', '5', '9'],
    ['2', '5', '8'],
    ['3', '6' ,'9'],
    ['3', '5', '7'],
    ['4', '5', '6'],
    ['7', '8', '9']
]

gamePlayers()

turnPlayer.innerText = 'Vez do jogador: ' + currentPlayer

btnKey.forEach((key) => {
    key.addEventListener('click', () => {
        if(currentPlayer == 'X') {
            keysPressed_X.push(key.value)
            insertText(key.value).innerText = currentPlayer
            insertText(key.value).setAttribute('disabled', '')
            currentPlayer = 'O'
            numberOfMoves++
        } else {
            keysPressed_O.push(key.value)
            insertText(key.value).innerText = currentPlayer
            insertText(key.value).setAttribute('disabled', '')
            currentPlayer = 'X'
            numberOfMoves++
        }

        momentPlayer()
        checkingWinner()
    })
})

function checkingWinner () {
    for(let arrItem of winCondicional){
        if(arrItem.every((item) => keysPressed_X.includes(item))) {
            alert('O jogador "X" ganhou!!')
            exitFunction()
        } 
        if(arrItem.every((item) => keysPressed_O.includes(item))) {
            alert('O jogador "O" ganhou!!')
            exitFunction()
        }
        if (numberOfMoves == 9){
            alert('Empate na partida!!')
            exitFunction()
        }
    }
}

function momentPlayer () {
    return turnPlayer.innerText = 'Vez do jogador: ' + currentPlayer
}

function insertText (num) {
    const text = document.querySelector(`button[value="${num}"]`)
    return text
}

function gamePlayers () { 
    const playerOne = prompt('Nome do primeiro jogador (X): ')
    const playerTwo = prompt('Nome do segundo jogador (O): ')

    if (playerOne && playerTwo) {
        players.innerText = 'Jogadores: ' + playerOne + '(X) e ' + playerTwo + '(O)'
        return players
    } else { 
        alert('Nomes inválidos!')
        return location.reload()
    }
}

function exitFunction () { 
    btnKey.forEach((key) => { 
        key.innerText = ''
    })

    players.innerText = ''
    turnPlayer.innerText = ''

    location.reload()
}