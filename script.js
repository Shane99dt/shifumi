const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const Scissor = document.getElementById("scissor")

const playerSignGenerator = () => {
  const playerSign = 0
  if (rock.addEventListener("click")){
    console.log(playerSign)
    return playerSign === 1
  }else if(paper.addEventListener("click")){
    console.log(playerSign)
    return playerSign === 2
  }else if(Scissor.addEventListener("click")){
    console.log(playerSign)
    return playerSign === 3
  }else{
    console.log(playerSign)
    return 0
  }
}


const computer = () => {
  const signNum =  Math.floor(Math.random() * 3) + 1;
  // if(signNum === 1){
  //   return console.log("rock")
  // }else if(signNum === 2){
  //   return console.log("Paper")
  // }else{
  //   return console.log("Scissor")
  // }
  // signNum 1 === rock
  // signNum 2 === paper
  // signNum 3 === scissor
  console.log(signNum)
  return signNum

}



const game = () => {
  playerSignGenerator()
  computer()
  // signNum / playerSign
  // 1/1,2/2,3/3 draw
  // 2/1,3/2,1/3 computer won
  // 1/2,2/3,3/1 player won


  if(signNum === 1 && playerSign === 1 || signNum === 2 && playerSign === 2 || signNum === 3 && playerSign === 3 ){
    console.log("draw")
  }else if(signNum === 2 && playerSign === 1 || signNum === 3 && playerSign === 2 || signNum === 1 && playerSign === 3 ){
    console.log("computer won")
  }else{
    console.log("player won")
  }
}



let btnShoot = document.getElementsByClassName("shoot")
btnShoot.addEventListener("click", game)


