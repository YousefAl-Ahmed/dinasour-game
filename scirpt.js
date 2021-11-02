// select HTML Canvas
const canvas = document.querySelector('#canvas')
// variables 
let isPlayerRunning = true
let player
let cactus
let score = 0
let count = 0
let isGameOver = false
// player image width = 43, height = 47
const PLAYER_WIDTH = 43
const PLAYER_HEIGHT = 47
const CACTUS_WIDTH = 17
const CACTUS_HEIGHT = 35

// Cactus class to create cactus object
class Cactus {
 constructor(width, height, hitboxWidth, hitboxHeight) {
  this.width = width
  this.height = height
  this.hitboxWidth = hitboxWidth
  this.hitboxHeight = hitboxHeight
  this.element;   // DOM Element
 }
}

// Player class to create cactus object
class Player {
 constructor(width, height, hitboxWidth, hitboxHeight) {
  this.width = width
  this.height = height
  this.hitboxWidth = hitboxWidth
  this.hitboxHeight = hitboxHeight
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
 cactus.element.classList.add('cactus', 'slide', 'cactus--inside')
 canvas.appendChild(cactus.element)
}

// Spacebar key Event listner to make player jump
document.addEventListener('keyup', event => {
 if (event.code === 'Space') {
  player.element.classList.add('player--jump')    // add css class to make jump animation
 }
})

// function to check game state, will run every 100ms 
setInterval(function () {
 let playerRectangle = player.element.getBoundingClientRect()         // get size of elment and position relative to viewport
 let cactusRectangle = cactus.element.getBoundingClientRect()      // get size of elment and position relative to viewport
 let canvasRect = canvas.getBoundingClientRect()
 // collision detection 
 if (
  playerRectangle.x < cactusRectangle.x + cactus.hitboxWidth &&
  playerRectangle.x + player.hitboxWidth > cactusRectangle.x &&
  playerRectangle.y < cactusRectangle.y + cactus.hitboxHeight &&
  playerRectangle.y + player.hitboxHeight > cactusRectangle.y &&
  isPlayerRunning
 ) {
  isPlayerRunning = false
  isGameOver = true
  console.log('collision happend pause game!!')
  cactus.element.classList.add('pause')  // add css class to paus cactus animation
 }

 if (!isGameOver) {
  score++
  if (score % 100 == 0) {
   console.log(score)
  }
 } else {
  score = 0
  console.log(score)
 }




 // check if cactus outside canvas to generate a new one 
 if (cactusRectangle.x < canvasRect.x) {
  cactus.element.classList.remove('cactus--inside')
  cactus.element.classList.add('cactus--outside')
 } else {
  cactus.element.classList.remove('cactus--outside')
  cactus.element.classList.add('cactus--inside')
 }
}, 10)

// function to generate random cactus
function generateRandomCactus() { }

// start, restart game function
function startGame() {
 isPlayerRunning = true
 player = new Player(PLAYER_WIDTH, PLAYER_HEIGHT, PLAYER_WIDTH - 5, PLAYER_HEIGHT - 5)
 cactus = new Cactus(CACTUS_WIDTH, CACTUS_HEIGHT, CACTUS_WIDTH - 3, CACTUS_HEIGHT - 3)
 renderPlayer()
 renderCactus()
}

// function when player hit cactus
function gameOver() { }

startGame()