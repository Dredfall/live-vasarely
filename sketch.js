const CELL_SIZE = 50
const OFFSET = 12
const SHAPE_SIZE = CELL_SIZE - 2*OFFSET
// layout
const MARGIN = 0
const COLUMNS = 8
const ROWS = 8
const PADDING = 0
const GRIDBOX = CELL_SIZE + PADDING
const START = (CELL_SIZE / 2) + MARGIN

let PALETTE = []
let PALETTE_HEX = []
let choice = 0
let token = true

function getRandomPalette(palette) {
  const rando2 = floor(random(0,5));
  switch (rando2) {
    case 0:
      palette = PALETTE_HEX_BLUE
      break;
  }
  switch (rando2) {
    case 1:
      palette = PALETTE_HEX_GREEN
      break;
  }
  switch (rando2) {
    case 2:
      palette = PALETTE_HEX_PINK
      break;
  }
  switch (rando2) {
    case 3:
      palette = PALETTE_HEX_ORANGE
      break;
  }
  switch (rando2) {
    case 4:
      palette = PALETTE_HEX_RED
      break;
  }
    
  //console.log(rando2)
  return palette
}

function drawRandomShape(posX,posY) {
  const rando = random(1)
  if(rando > 0.75) {
    rect(posX,posY,SHAPE_SIZE,SHAPE_SIZE)  
  } 
  else if(rando > 0.50) {
    rotate(45)
    rect(posX,posY,SHAPE_SIZE,SHAPE_SIZE)  
  } 
  else  {
    ellipse(posX,posY, SHAPE_SIZE,SHAPE_SIZE)
  } 
}

function drawShape(posX,posY) {
  if(choice == 'carré') {
    rect(posX,posY,SHAPE_SIZE,SHAPE_SIZE)  
  } 
  else if(choice == 'losange') {
    rotate(45)
    rect(posX,posY,0.8*SHAPE_SIZE,0.8*SHAPE_SIZE)  
  } 
  else  {
    ellipse(posX,posY, SHAPE_SIZE,SHAPE_SIZE)
  } 
}

function randomSelectTwo() {
  const rando = random(1)
  if(rando > 0.5) {
    return true  
  } 
    else {
    return false
  }
}

function myTriangle (center, radius, direction) {
  if (direction) {
    beginShape();
    vertex(center + radius * cos(60), radius * sin(60));
    vertex(center + radius * cos(300), radius * sin(300));
    vertex(center + radius * cos(180), radius * sin(180));
    endShape(CLOSE); 
  } else {
    beginShape();
    vertex(center + radius * cos(180), radius * sin(180));
    vertex(center + radius * cos(300), radius * sin(300));
    vertex(center + radius * cos(60), radius * sin(60));
    endShape(CLOSE);
  }
}

function setup() {
  const totalX = 2*START + GRIDBOX * COLUMNS
  const totalY = 2*START + GRIDBOX * ROWS
  PALETTE = [
    [253, 224, 58], //yellow
    //[167, 186, 204], //light blue gray 
    [223, 45, 32], // red
    [91, 176, 52]

  ]
  PALETTE_HEX_BLUE = [
    ['#03045E'],
    ['#023E8A'],
    ['#0077B6'],
    ['#0096C7'],
    ['#00B4D8']
  ]
  PALETTE_HEX_GREEN = [
    ['#081C15'],
    ['#1B4332'],
    ['#2D6A4F'],
    ['#40916C'],
    ['#52B788']
  ]
  PALETTE_HEX_PINK = [
    ['#ffdab9'],
    ['#fbc4ab'],
    ['#f8ad9d'],
    ['#f4978e'],
    ['#f08080']
  ]
  PALETTE_HEX_ORANGE= [
    ['#ff4800'],
    ['#ff5400'],
    ['#ff6000'],
    ['#ff6d00'],
    ['#ff7900']
  ]
  PALETTE_HEX_RED= [
    ['#9c191b'],
    ['#ac1c1e'],
    ['#bd1f21'],
    ['#d02224'],
    ['#dd2c2f']
  ]

  createCanvas(totalX, totalY, SVG);
  //noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)

  radio = createRadio();
  radio.option('carré');
  radio.option('cercle');
  radio.option('losange');
  radio.style('width', '70px');
  textAlign(CENTER);
  radio.position(650,20)
  radio.value('carré')
}

//picker for colors 
//picker for forms
//draw shape

function mouseClicked() {
  let coordX = floor(mouseX/(CELL_SIZE))
  let coordY = floor(mouseY/(CELL_SIZE))
  const posX = START + ((coordX) * GRIDBOX)
  const posY = START + ((coordY) * GRIDBOX)

  console.log(coordX)
  console.log(coordY)
  //console.log(coordX)
  //console.log(coordY)
  //console.log(floor(mouseX/(COLUMNS)))
  //console.log(mouseY)
  //console.log(width)
  push()
          translate(posX, posY)
          noStroke()
          fill(PALETTE[0])
          //drawRandomShape(0,0)
          if(posX < (width-CELL_SIZE) && posY < (height-CELL_SIZE)) {
            drawShape(0,0,choice)
          }
          pop()
/*    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        const posX = START + ((coordX+x) * GRIDBOX)
        const posY = START + ((coordY+y) * GRIDBOX)
        if(posX < (width-CELL_SIZE) && posY < (height-CELL_SIZE)) {
          push()
          translate(posX, posY)
          noStroke()
          fill(PALETTE[0])
          //drawRandomShape(0,0)
          drawShape(0,0,choice)
          pop()
        } 
      }
    } */
}

function draw() {
  //let red = 253;
  //let green = 224
  //let blue = 58
  //background(230);
  let remain = 4
  let color = 0
  let palette = PALETTE_HEX_BLUE
  if(token == true)
  {
    for (let x = 0; x < COLUMNS; x++) {
      for (let y = 0; y < ROWS; y++) {
        if(remain == 0)
        {
          palette = getRandomPalette()
          remain = floor(random(1,4))
          //console.log(remain)
        }
        const posX = START + (x * GRIDBOX)
        const posY = START + (y * GRIDBOX) 
        push()
        translate(posX, posY)
        noStroke()
        fill(palette[remain])
        if(remain > 0) {
          remain --
        }
        rect(0,0,CELL_SIZE,CELL_SIZE)
        //fill(PALETTE[0])
        //drawRandomShape(0,0)
        pop()
      }
    }
    token = false
  }
  choice = radio.value();
  //console.log(choice)
}
