const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const Scissor = document.getElementById("scissor")
const scorePlayerDisplay = document.getElementById("score-player")
const scoreComputerDisplay = document.getElementById("score-computer")
const computerChoiceDisplay = document.getElementById("computerChoice")
const computerChoiceDisplay2 = document.getElementById("computerChoice2")
const computerChoiceDisplay3 = document.getElementById("computerChoice3")
const computerChoiceDisplay4 = document.getElementById("computerChoice4")
const resultDisplay = document.getElementById("gameResult")
const roundResultDisplay = document.getElementById("roundResult")
const history = document.getElementById('history')
const historyAdd = document.getElementById('historyAdd')
const loadingGif = document.getElementById('loadingGif')


window.alert("Haven't constructed yet. Kindly play the 2 player game")

let playerScore = 0
let computerScore = 0
let computerScore2 = 0
let computerScore3 = 0
let computerScore4 = 0

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
const computer2 = () => {
  const signNum =  Math.floor(Math.random() * 3) + 1;
  let compSign2
  if(signNum === 1){
    compSign2 = 'rock'
  }else if(signNum === 2){
    compSign2 = 'paper'
  }else{
    compSign2 = 'scissor'
  }
  return compSign2
}
const computer3 = () => {
  const signNum =  Math.floor(Math.random() * 3) + 1;
  let compSign3
  if(signNum === 1){
    compSign3 = 'rock'
  }else if(signNum === 2){
    compSign3 = 'paper'
  }else{
    compSign3 = 'scissor'
  }
  return compSign3
}
const computer4 = () => {
  const signNum =  Math.floor(Math.random() * 3) + 1;
  let compSign4
  if(signNum === 1){
    compSign4 = 'rock'
  }else if(signNum === 2){
    compSign4 = 'paper'
  }else{
    compSign4 = 'scissor'
  }
  return compSign4
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
  const signNum2 = computer2()
  const signNum3 = computer3()
  const signNum4 = computer4()
  computerChoiceDisplay.innerHTML = `${signNum}`
  console.log(playerSign, signNum, signNum2, signNum3, signNum4)
  count++
  // signNum / playerSign
  // 1/1,2/2,3/3 draw
  // 2/1,3/2,1/3 computer won
  // 1/2,2/3,3/1 player won


// function dirReduc(plan) {
//   var opposite = {
//     'rock': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
//   return plan.reduce(function(dirs, dir){
//       if (dirs[dirs.length - 1] === opposite[dir])
//         dirs.pop();
//       else
//         dirs.push(dir);
//       return dirs;
//     }, []);
// }

  if(signNum === signNum2 === signNum3 === signNum4 === playerSign){
    console.log("draw")
    resultDisplay.innerHTML = ""
    roundResultDisplay.innerHTML = "Tie"
    historyAdd.innerHTML += `
        <article>
          <h2>Round ${count}</h2>
          <p>Everyone played ${signNum}</p>
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
  // game()
  setTimeout(game,3000)
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

