const canvas = document.querySelector('#canvas')
let isDinoRunning = true
let player
let cactus
let score = 0

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

class Cactus {
 constructor(width, height) {
  this.width = width
  this.height = height
  this.element = document.createElement("div")
 }
}

class Player {
 constructor(width, height) {
  this.width = width
  this.height = height
  this.element = document.createElement("div")
 }
}

function renderPlayer() {
 player.element.style.width = player.width + "px"
 player.element.style.height = player.height + "px"
 player.element.classList.add('player')
 player.element.addEventListener('animationstart', () => {
  console.log('animation started')
 })
 player.element.addEventListener('animationend', () => {
  console.log('animation ended')
  player.element.classList.remove('player--jump')
 })
 canvas.appendChild(player.element)
}

function renderCactus() {
 cactus.element.style.width = cactus.width + "px"
 cactus.element.style.height = cactus.height + "px"
 cactus.element.classList.add('cactus', 'slide')
 canvas.appendChild(cactus.element)
}

document.addEventListener('keyup', event => {
 if (event.code === 'Space') {
  player.element.classList.add('player--jump')
  console.log('make player jump');
 }
})

// function alive to check if dinasour is still alive
let isAlive = setInterval(function () {
 let dinoRect = player.element.getBoundingClientRect()
 let cactusRect = cactus.element.getBoundingClientRect()

 if (
  dinoRect.x < cactusRect.x + cactusRect.width &&
  dinoRect.x + dinoRect.width > cactusRect.x &&
  dinoRect.y < cactusRect.y + dinoRect.height &&
  dinoRect.y + dinoRect.height > cactusRect.y &&
  isDinoRunning
 ) {
  isRunning = false
  console.log('collision happend pause game!!')
  cactus.element.classList.add('pause')
 }
}, 10)

let isCactusOutside = setInterval(function () {
 let cactusRect = cactus.element.getBoundingClientRect()
 let canvasRect = canvas.getBoundingClientRect()
 if (cactusRect.x < canvasRect.x) {
  console.log('outside canvas')
  if (cactus.element != null) {
   cactus.element.remove()
  }
  generateRandomCactus()
 }
}, 10)


// function generateRandomCactus() {
//  setInterval(() => {
//   // make a function to choose next cactus to render
//   let randomIndex = Math.floor(Math.random() * cactuses.length)
//   let newcactus = cactuses[randomIndex]
//   console.log(newcactus)
//   // make cactus equal to the new setting of the selected cactus
//   console.log('render new one')
//  }, 5000)
// }

function startGame() {
 isDinoRunning = true
 player = new Player(5, 20, 40)
 cactus = new Cactus(10, 20)
 renderPlayer()
 renderCactus()
}

function gameOver() {

}

startGame()