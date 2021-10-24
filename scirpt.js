const canvas = document.querySelector('#canvas')

class Block {
 constructor(width, height) {
  this.width = width
  this.height = height
  this.element = document.createElement("div")
 }
}

class Player {
 constructor(width, height, jump) {
  this.width = width
  this.height = height
  this.jump = jump
 }
}

let player = new Player(20, 20, 40)
let b1 = new Block(20, 20,)
let offSetY = 0
const playerElement = document.createElement("div")
function renderPlayer() {
 playerElement.style.width = player.width + "px"
 playerElement.style.height = player.height + "px"
 playerElement.style.position = "absolute"
 playerElement.style.bottom = offSetY + "px"
 playerElement.style.left = "2px"
 playerElement.style.backgroundColor = "lightblue"
 console.log(playerElement)
 canvas.appendChild(playerElement)
}

function renderBlock() {
 b1.element.style.width = b1.width + "px"
 b1.element.style.height = b1.height + "px"
 b1.element.style.position = "absolute"
 b1.element.style.bottom = 0 + "px"
 b1.element.style.right = 0 + "px"
 b1.element.style.backgroundColor = "yellow"
 canvas.appendChild(b1.element)
 b1.element.classList.add("slide")
}

document.addEventListener('keyup', event => {
 if (event.code === 'Space') {
  offSetY += 2
  playerElement.classList.add('player--jump')
  console.log('make player jump');
 }
})

playerElement.addEventListener('animationstart', () => {
 console.log('started')
})

playerElement.addEventListener('animationend', () => {
 console.log('ended')
 playerElement.classList.remove('player--jump')
})


function startGame() {
 renderPlayer()
 renderBlock()
}

function endGame() {

}


startGame()