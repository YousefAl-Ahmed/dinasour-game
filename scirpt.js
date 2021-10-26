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
  this.element = document.createElement("div")
 }
}

let player = new Player(5, 20, 40)
let block = new Block(10, 20)
let offSetY = 0

function renderPlayer() {
 player.element.style.width = player.width + "px"
 player.element.style.height = player.height + "px"
 player.element.classList.add('player')
 canvas.appendChild(player.element)
}

function renderBlock() {
 block.element.style.width = block.width + "px"
 block.element.style.height = block.height + "px"
 block.element.classList.add('block')
 canvas.appendChild(block.element)
}

document.addEventListener('keyup', event => {
 if (event.code === 'Space') {
  player.element.classList.add('player--jump')
  console.log('make player jump');
 }
})

player.element.addEventListener('animationstart', () => {
 console.log('started')
})

player.element.addEventListener('animationend', () => {
 console.log('ended')
 player.element.classList.remove('player--jump')
})


// set alive to check if dinasour is still alive
let isAlive = setInterval(function () {
 let dinoTop = player.element.getClientRects()[0].top
 console.log(dinoTop)
}, 10)


renderPlayer()
renderBlock()

