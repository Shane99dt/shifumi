const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const Scissor = document.getElementById("scissor")
const scorePlayerDisplay = document.getElementById("score-player")
const scoreComputerDisplay = document.getElementById("score-computer")
const computerChoiceDisplay = document.getElementById("computerChoice")
const computerChoiceDisplay2 = document.getElementById("computerChoice2")
const computerChoiceDisplay3 = document.getElementById("computerChoice3")
const computerChoiceDisplay4 = document.getElementById("computerChoice4")
const resultDisplay = document.getElementById("result")
const roundResultDisplay = document.getElementById("roundResult")
const history = document.getElementById('history')
const historyAdd = document.getElementById('historyAdd')

window.alert("Haven't constructed yet. Kindly play the 2 player game")

let playerScore = 0
let computerScore = 0

const computer = () => {
  const signNum =  Math.floor(Math.random() * 3) + 1;
let compSign
  if(signNum === 1){
    compSign = 'rock'
  }else if(signNum === 2){
    compSign = 'paper'
  }else{
    compSign = 'scissor'
  }
  return compSign
}

const resetValues = () => {
  scoreComputerDisplay.innerHTML = `0`
  scorePlayerDisplay.innerHTML = `0`
  computerScore = 0
  playerScore = 0
  count = 0
}

let count = 0

const game = () => {
  const signNum = computer()
  computerChoiceDisplay.innerHTML = `${signNum}`
  console.log(playerSign, signNum)
  count++
  // signNum / playerSign
  // 1/1,2/2,3/3 draw
  // 2/1,3/2,1/3 computer won
  // 1/2,2/3,3/1 player won

  if(signNum === playerSign){
    console.log("draw")
    resultDisplay.innerHTML = ""
    roundResultDisplay.innerHTML = "Tie"
    historyAdd.innerHTML += `
        <article>
          <h2>Round ${count}</h2>
          <p>Both played ${signNum}</p>
          <p>Tie !</p>
        </article><br>
      `
  }else if(signNum == 'paper' && playerSign == 'rock' || signNum == 'scissor' && playerSign == 'paper' || signNum == 'rock' && playerSign == 'scissor' ){
    computerScore ++
    if(computerScore === 3){
      alert('You lost ! Restart')
      roundResultDisplay.innerHTML = "Point for computer !"
      resultDisplay.innerHTML = "You Lost the game!"
      historyAdd.innerHTML += `
        <article>
          <h2>Round ${count}</h2>
          <p>Point for computer</p>
          <h2>Computer won the game</h2>
        </article><br><br>
      `
      resetValues()
    }else{
      resultDisplay.innerHTML = ""
      roundResultDisplay.innerHTML = "Point for computer !"
      scoreComputerDisplay.innerHTML = `${computerScore}`
      console.log("computer won", computerScore)
      historyAdd.innerHTML += `
        <article>
          <h2>Round ${count}</h2>
          <p>Point for computer</p>
        </article><br>
      `
    }
  }else{
    playerScore ++
    if(playerScore === 3){
      alert('You win ! Restart')
      roundResultDisplay.innerHTML = "Point for you !"
      resultDisplay.innerHTML = "You win the game!"
      historyAdd.innerHTML += `
        <article>
          <h2>Round ${count}</h2>
          <p>Point for player</p>
          <h2>Player won the game</h2>
        </article><br><br>
      `
      resetValues()
    }else{
      resultDisplay.innerHTML = ""
      roundResultDisplay.innerHTML = "Point for you !"
      console.log("player won", playerScore)
      scorePlayerDisplay.innerHTML = `${playerScore}`
      historyAdd.innerHTML += `
        <article>
          <h2>Round ${count}</h2>
          <p>Point for player</p>
        </article><br>
      `
    }
  }
}

// button clicks css

document.querySelector('#rock').addEventListener('click', () => {
  document.querySelector('#rock').classList.add('myClass');
});
// button clicks css end

// // let btnShoot = document.getElementsByClassName("shoot")
// // btnShoot.addEventListener("click", game)

// // let btnRock = document.getElementById("rock")
// // btnRock.addEventListener("click", game)

// // let btnPaper = document.getElementById("paper")
// // btnPaper.addEventListener("click", game)

// // let btnScissor = document.getElementById("scissor")
// // btnScissor.addEventListener("click", game)


const possibles = document.querySelectorAll('.signs')
possibles.forEach((possible) => possible.addEventListener('click', (sign) => {
  playerSign = sign.target.id
  let player
  if(playerSign == 'rock'){
    player === 1
  }else if(player == 'paper'){
    player === 2
  }else{
    player === 3
  }
  game()
}))

// history

const openHistory = document.getElementById('btnHistory')
const closeHistory = document.getElementById("closeHistory")

openHistory.addEventListener('click', function(event){

  history.style.display = 'initial'
  history.style.zIndex = 1
})

closeHistory.addEventListener('click', function(event){
  history.style.display = 'none'
})




// //////////////////////////////////////////////////

// // const computerChoiceDisplay = document.getElementById('computer-choice')
// // const userChoiceDisplay = document.getElementById('user-choice')
// // const resultDisplay = document.getElementById('result')
// // const possibleChoices = document.querySelectorAll('button')
// // let userChoice
// // let computerChoice
// // let result

// // possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (element) => {
// //   userChoice = element.target.id
// //   userChoiceDisplay.innerHTML = userChoice
// //   generateComputerChoice()
// //   getResult()
// // }))

// // function generateComputerChoice() {
// //   const randomNumber = (Math.floor(Math.random() * 3) + 1)
// //   if (randomNumber === 1) {
// //     computerChoice = 'rock'
// //   }
// //   if (randomNumber === 2) {
// //     computerChoice = 'scissor'
// //   }
// //   if (randomNumber === 3) {
// //     computerChoice = 'paper'
// //   }
// //   computerChoiceDisplay.innerHTML = computerChoice
// // }

// // function getResult() {
// //   if (computerChoice === userChoice) {
// //     result = 'its a draw!'
// //   }
// //   if (computerChoice === 'rock' && userChoice === "paper") {
// //     result = 'you win!'
// //   }
// //   if (computerChoice === 'rock' && userChoice === "scissors") {
// //     result = 'you lost!'
// //   }
// //   if (computerChoice === 'paper' && userChoice === "scissors") {
// //     result = 'you win!'
// //   }
// //   if (computerChoice === 'paper' && userChoice === "rock") {
// //     result = 'you lose!'
// //   }
// //   if (computerChoice === 'scissors' && userChoice === "rock") {
// //     result = 'you win!'
// //   }
// //   if (computerChoice === 'scissors' && userChoice === "paper") {
// //     result = 'you lose!'
// //   }
// //   resultDisplay.innerHTML = result
// // }