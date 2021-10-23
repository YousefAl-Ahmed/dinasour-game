const canvas = document.querySelector('#canvas')

class Block {
 constructor(height, width, x, y) {
  this.height = height
  this.width = width
  this.x = x
  this.y = y
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
let offSetY = 0
const playerElement = document.createElement("div")
function renderPlayer() {
 playerElement.style.width = player.width + "px"
 playerElement.style.height = player.height + "px"
 // playerElement.textContent = "HI"
 playerElement.style.display = "block"
 playerElement.style.position = "absolute"
 playerElement.style.bottom = offSetY + "px"
 playerElement.style.left = "2px"
 playerElement.style.backgroundColor = "lightblue"
 console.log(playerElement)
 canvas.appendChild(playerElement)
}

document.addEventListener('keyup', event => {
 if (event.code === 'Space') {
  offSetY += 2
  playerElement.style.bottom = offSetY + "px"
  console.log('make player jump');
 }
})

renderPlayer()

