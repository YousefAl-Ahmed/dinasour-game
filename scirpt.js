// select HTML Canvas
const canvas = document.querySelector('#canvas')
// variables 
let isDinoRunning = true
let player
let cactus
let score = 0

// array to choose random cactus to render
let cactuses = [
 singleCactus = {
  width: 20,
  height: 20,
  img: "img1",
 },
 doubleCactus = {
  width: 30,
  height: 20,
  img: "img2",
 }
]

// Cactus class to create cactus object
class Cactus {
 constructor(width, height) {
  this.width = width
  this.height = height
  this.element;   // DOM Element
 }
}

// Player class to create cactus object
class Player {
 constructor(width, height) {
  this.width = width
  this.height = height
  this.element;   // DOM Element
 }
}

// function to create Player DOM Element, add event listeners, and render it 
function renderPlayer() {
 // create DOM Element 
 player.element = document.createElement("div")
 // add width to playerDOM
 player.element.style.width = player.width + "px"
 // add height to playerDOM
 player.element.style.height = player.height + "px"
 // add css class to player
 player.element.classList.add('player')
 // add event lister (this will ensure that player can jump after the first jump and not only once)
 player.element.addEventListener('animationend', () => {
  console.log('animation ended')
  player.element.classList.remove('player--jump')
 })
 // append playerDOM to canvas Element
 canvas.appendChild(player.element)
}

// function to create Cactus DOM Element, and render it 
function renderCactus() {
 cactus.element = document.createElement("div")
 cactus.element.style.width = cactus.width + "px"
 cactus.element.style.height = cactus.height + "px"
 cactus.element.classList.add('cactus', 'slide')
 canvas.appendChild(cactus.element)
}

// Spacebar key Event listner to make player jump
document.addEventListener('keyup', event => {
 if (event.code === 'Space') {
  player.element.classList.add('player--jump')    // add css class to make jump animation
 }
})

// function to check game state every 100ms 
setInterval(function () {
 let dinoRect = player.element.getBoundingClientRect()         // get size of elment and position relative to viewport
 let cactusRect = cactus.element.getBoundingClientRect()      // get size of elment and position relative to viewport
 let canvasRect = canvas.getBoundingClientRect()
 // collision detection 
 if (
  dinoRect.x < cactusRect.x + cactusRect.width &&
  dinoRect.x + dinoRect.width > cactusRect.x &&
  dinoRect.y < cactusRect.y + dinoRect.height &&
  dinoRect.y + dinoRect.height > cactusRect.y &&
  isDinoRunning
 ) {
  isDinoRunning = false
  console.log('collision happend pause game!!')

  cactus.element.classList.add('pause')  // add css class to paus cactus animation
 }

 // check if cactus outside canvas to generate a new one 
 if (cactusRect.x < canvasRect.x) { }
}, 10)

// function to generate random cactus
function generateRandomCactus() { }

// start, restart game function
function startGame() {
 isDinoRunning = true
 player = new Player(5, 20, 40)
 cactus = new Cactus(10, 20)
 renderPlayer()
 renderCactus()
}

// function when player hit cactus
function gameOver() {}

startGame()