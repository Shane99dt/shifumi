const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const Scissor = document.getElementById("scissor")
const scorePlayerDisplay = document.getElementById("score-player")
const scoreComputerDisplay = document.getElementById("score-computer")
const computerChoiceDisplay = document.getElementById("computerChoice")
const resultDisplay = document.getElementById("result")

let playerScore = 0
let computerScore = 0

// // const playerSignGenerator = () => {
// //   const playerSign = 0
// //   if (rock.clicked == true){
// //     console.log(playerSign)
// //     return playerSign === 1
// //   }

// //   if(paper.clicked == true){
// //     console.log(playerSign)
// //     return playerSign === 2
// //   }

// //   if(scissor.clicked == true){
// //     console.log(playerSign)
// //     return playerSign === 3
// //   }
// // }



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


const game = () => {
  const signNum = computer()
  computerChoiceDisplay.innerHTML = `${signNum}`
  console.log(playerSign, signNum)

  // signNum / playerSign
  // 1/1,2/2,3/3 draw
  // 2/1,3/2,1/3 computer won
  // 1/2,2/3,3/1 player won

  if(signNum === playerSign){
    console.log("draw")
    resultDisplay.innerHTML = ""
  }else if(signNum == 'paper' && playerSign == 'rock' || signNum == 'scissor' && playerSign == 'paper' || signNum == 'rock' && playerSign == 'scissor' ){
    computerScore ++
    if(computerScore >= 5){
      alert('You lost ! Restart')
      resultDisplay.innerHTML = "You Lost !"
      computerScore = 0
      playerScore = 0
      scoreComputerDisplay.innerHTML = `0`
      scorePlayerDisplay.innerHTML = `0`
    }else{
      resultDisplay.innerHTML = ""
      scoreComputerDisplay.innerHTML = `${computerScore}`
      console.log("computer won", computerScore)
    }
  }else{
    playerScore ++
    if(playerScore >= 5){
      alert('You win ! Restart')
      resultDisplay.innerHTML = "You win !"
      scoreComputerDisplay.innerHTML = `0`
      scorePlayerDisplay.innerHTML = `0`
      computerScore = 0
      playerScore = 0
    }else{
      resultDisplay.innerHTML = ""
      console.log("player won", playerScore)
      scorePlayerDisplay.innerHTML = `${playerScore}`
    }
  }
}


// // let btnShoot = document.getElementsByClassName("shoot")
// // btnShoot.addEventListener("click", game)

// // let btnRock = document.getElementById("rock")
// // btnRock.addEventListener("click", game)

// // let btnPaper = document.getElementById("paper")
// // btnPaper.addEventListener("click", game)

// // let btnScissor = document.getElementById("scissor")
// // btnScissor.addEventListener("click", game)


const possibles = document.querySelectorAll('button')
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