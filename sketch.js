let CELL_SIZE = 70
let SHAPE_SIZE = 40
// layout
let MARGIN = 0
let COLUMNS = 9
let ROWS = 9
let PADDING = 0
let GRIDBOX = CELL_SIZE + PADDING
let START = (CELL_SIZE / 2) + MARGIN

let PALETTE = []
let PALETTE_HEX = []
let choice = 0
let token = true

let val = 0
let val2 = 0
let val3 = 8
let val4 = 8
let val5 = 1

let shapes_coord = [30]
let toggle = false
//console.log(shapes_coord)



function getRandomPalette(palette) {
  const rando2 = floor(random(0,7));
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
      palette = PALETTE_HEX_PURPLE
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
  switch (rando2) {
    case 5:
      palette = PALETTE_HEX_PINK
      break;
  }
  switch (rando2) {
    case 6:
      palette = PALETTE_HEX_GREEN2
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
  let palette = getRandomPalette()
  if(choice == 'Carré') {
    if(toggle) {
      rect(posX,posY,SHAPE_SIZE,SHAPE_SIZE) 
      fill(palette[3])
      rect(posX,posY,0.3*SHAPE_SIZE,0.3*SHAPE_SIZE) 
    }
    else {
      rect(posX,posY,SHAPE_SIZE,SHAPE_SIZE) 
    }
     
  } 
  else if(choice == 'Losange') {
    if(toggle) {

      rotate(45)
      rect(posX,posY,0.8*SHAPE_SIZE,0.8*SHAPE_SIZE)
      fill(palette[3])
      rect(posX,posY,0.3*SHAPE_SIZE,0.3*SHAPE_SIZE)
    }
    else {
      rotate(45)
      rect(posX,posY,0.8*SHAPE_SIZE,0.8*SHAPE_SIZE) 
    }
     
  } 
  else if(choice == 'Triangle Gauche') {
    if(toggle) { 
      myTriangle(0.1*SHAPE_SIZE,0.6*SHAPE_SIZE,1)
      fill(palette[3])
      myTriangle(0.1*SHAPE_SIZE,0.2*SHAPE_SIZE,1)
    }
    else {
      myTriangle(0.1*SHAPE_SIZE,0.6*SHAPE_SIZE,1)
    }
  } 
  else if(choice == 'Triangle Droite') {
    if(toggle) { 
      myTriangle(-0.1*SHAPE_SIZE,0.6*SHAPE_SIZE,0)
      fill(palette[3])
      myTriangle(-0.1*SHAPE_SIZE,0.2*SHAPE_SIZE,0)
    }
    else {
      myTriangle(-0.1*SHAPE_SIZE,0.6*SHAPE_SIZE,0)
    }
  } 
  else if(choice == 'Triangle Haut') {
    if(toggle) { 
      myTriangle(0,0.6*SHAPE_SIZE,3)
      fill(palette[3])
      myTriangle(0,0.2*SHAPE_SIZE,3)
    }
    else {
      myTriangle(0,0.6*SHAPE_SIZE,3)
    }
  } 
  else if(choice == 'Triangle Bas') {
    if(toggle) { 
      myTriangle(0,0.6*SHAPE_SIZE,2)
      fill(palette[3])
      myTriangle(0,0.2*SHAPE_SIZE,2)
    }
    else {
      myTriangle(0,0.6*SHAPE_SIZE,2)
    }
  } 
  else {
    if(toggle) { 
      ellipse(posX,posY, SHAPE_SIZE,SHAPE_SIZE)
      fill(palette[3])
      ellipse(posX,posY, 0.3*SHAPE_SIZE,0.3*SHAPE_SIZE)
    }
    else {
      ellipse(posX,posY, SHAPE_SIZE,SHAPE_SIZE)
    }
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
  if (direction == 0) {
    beginShape();
    vertex(center + radius * cos(0), radius * sin(0));
    vertex(center + radius * cos(120), radius * sin(120));
    vertex(center + radius * cos(240), radius * sin(240));
    endShape(CLOSE); 
  } else if (direction == 1) {
    beginShape();
    vertex(center + radius * cos(180), radius * sin(180));
    vertex(center + radius * cos(300), radius * sin(300));
    vertex(center + radius * cos(60), radius * sin(60));
    endShape(CLOSE);
  } else if (direction == 2) {
    beginShape();
    vertex(center + radius * cos(90), radius * sin(90));
    vertex(center + radius * cos(210), radius * sin(210));
    vertex(center + radius * cos(330), radius * sin(330));
    endShape(CLOSE);
  }  else if (direction == 3) {
    beginShape();
    vertex(center + radius * cos(270), radius * sin(270));
    vertex(center + radius * cos(30), radius * sin(30));
    vertex(center + radius * cos(150), radius * sin(150));
    endShape(CLOSE);
  }
}
function reset_tab() {
  
  for(let i = 0 ; i < 50 ; i++) {
    shapes_coord[i]=[30]
  }
}

function generate() {
  //console.log(CELL_SIZE)
  console.log(val3)
  console.log(val4)
  CELL_SIZE = val
  reset_tab();
  if(val4*CELL_SIZE <= 700) {
    ROWS = val4
  }
  else {
    ROWS = floor(640/CELL_SIZE) 
  }

  if(val3*CELL_SIZE <= 640) {
    COLUMNS = val3
  }
  else {
    COLUMNS = floor(640/CELL_SIZE) 
  }
  if(val2 <= CELL_SIZE-int(0.30*CELL_SIZE)) {
    SHAPE_SIZE = val2
  }
  else {
    SHAPE_SIZE = CELL_SIZE-int(0.30*CELL_SIZE)
  }
  token = true
  background(255,0)
}

function myCheckedEvent() {
  if (this.checked()) {
    toggle = true
  } else {
    toggle = false
  }
}

function setup() {
  const totalX = 2*START + GRIDBOX * COLUMNS
  const totalY = 2*START + GRIDBOX * ROWS
  //SHAPE_SIZE = CELL_SIZE-int(0.60*CELL_SIZE)
  PALETTE = [
    [252, 195, 2], //yellow
    //[167, 186, 204], //light blue gray 
    [223, 45, 32], // red
    [0, 0, 0],
    [91, 176, 52]

  ]
  PALETTE_HEX_BLUE = [
    ['#3d5680'],
    ['#445f8e'],
    ['#576f99'],
    ['#697fa5'],
    ['#7c8fb0']
  ]
  PALETTE_HEX_GREEN = [
    ['#304a31'],
    ['#365437'],
    ['#3c5d3d'],
    ['#506d50'],
    ['#637d64']
  ]
  PALETTE_HEX_GREEN2= [
    ['#72863c'],
    ['#819644'],
    ['#8fa74b'],
    ['#9ab05d'],
    ['#a5b96f']
  ]
  PALETTE_HEX_PURPLE= [
    ['#61475c'],
    ['#6e516a'],
    ['#7c5b77'],
    ['#8a6584'],
    ['#967490']
  ]
  PALETTE_HEX_ORANGE= [
    ['#e8781f'],
    ['#e8781f'],
    ['#ea8635'],
    ['#ea8635'],
    ['#ed934c']
  ]
  PALETTE_HEX_PINK= [
    ['#93535f'],
    ['#a65e6b'],
    ['#b86877'],
    ['#bf7785'],
    ['#c68692']
  ]
  PALETTE_HEX_RED= [
    ['#ae3326'],
    ['#c33a2b'],
    ['#d94030'],
    ['#dd5345'],
    ['#e16659']
  ]

  createCanvas(660, 660, SVG);
  //noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)

  radio = createRadio();
  radio.option('Carré');
  radio.option('Losange');
  radio.option('Cercle');
  radio.option('Triangle Haut');
  radio.option('Triangle Bas');
  radio.option('Triangle Gauche');
  radio.option('Triangle Droite');
  radio.value('Carré')

  radio.style('width', '30px');
  textAlign(CENTER);
  radio.position(800,20)
  radio.value('carré')

  slider = createSlider(30, 80, 70, 5);
  slider.position(800, 375);
  slider.style('width', '80px');

  button = createButton('Refresh');
  button.position(800, 660);
  button.mousePressed(generate);

  slider_sh = createSlider(0, 70, 40, 5);
  slider_sh.position(800, 425);
  slider_sh.style('width', '80px');

  slider_p = createSlider(1, 3, 1, 1);
  slider_p.position(800, 475);
  slider_p.style('width', '80px');

  //slider_co = createSlider(1, 20, 8, 1);
  //slider_co.position(750, 200);
  //slider_co.style('width', '80px');

  myInput = createInput();
  myInput.position(800, 525);
  myInput.style('width', '60px');
  myInput.value('9')

  myInput2 = createInput();
  myInput2.position(800, 575);
  myInput2.style('width', '60px');
  myInput2.value('9')

  let h5 = createElement('p', 'Taille des cellules');
  h5.style('black', '#00a1d3');
  h5.position(890, 360);

  let h6 = createElement('p', 'Taille des formes');
  h6.style('black', '#00a1d3');
  h6.position(890, 410);

  let h7 = createElement('p', 'Nombre de colonnes');
  h7.style('black', '#00a1d3');
  h7.position(890, 510);

  let h8 = createElement('p', 'Nombre de lignes');
  h8.style('black', '#00a1d3');
  h8.position(890, 560);

  let h9 = createElement('p', 'Taille du pinceau');
  h9.style('black', '#00a1d3');
  h9.position(890, 460);

  checkbox = createCheckbox('Formes internes', false);
  checkbox.changed(myCheckedEvent);
  checkbox.position(800, 620);

  for(let i = 0 ; i < 50 ; i++) {
    shapes_coord[i]=[30]
  }
}
//console.log(shapes_coord)

//picker for colors 
//picker for forms
//draw shape

function mouseClicked() {
  let coordX = floor(mouseX/(CELL_SIZE))
  let coordY = floor(mouseY/(CELL_SIZE))
  const posX = (CELL_SIZE / 2) + ((coordX) * CELL_SIZE)
  const posY = (CELL_SIZE / 2) + ((coordY) * CELL_SIZE)

 // console.log(coordX)
 // console.log(coordY)
  //console.log(coordX)
  //console.log(coordY)
  //console.log(floor(mouseX/(COLUMNS)))
  //console.log(mouseY)
  //console.log(width)
 /* push()
          translate(posX, posY)
          noStroke()
          fill(PALETTE[0])
          //drawRandomShape(0,0)
          if(posX <= ((CELL_SIZE*COLUMNS) + CELL_SIZE/3) && posY <= ((CELL_SIZE*ROWS)+CELL_SIZE/3)) {
            drawShape(0,0,choice)
          }
          pop() */

  for (let x = -val5+1; x < val5; x++) {
      for (let y = -val5+1; y < val5; y++) {
        const posX = (CELL_SIZE / 2) + ((coordX+x) * CELL_SIZE)
        const posY = (CELL_SIZE / 2) + ((coordY+y) * CELL_SIZE)
        if((coordX+x >=0) && (coordY+y >=0)) {
          if(shapes_coord[coordX+x][coordY+y] !=1 ) {
            if(posX <= ((CELL_SIZE*COLUMNS) + CELL_SIZE/3) && posY <= ((CELL_SIZE*ROWS)+CELL_SIZE/3)) {
              push()
              translate(posX, posY)
              noStroke()
              fill('#eccc35')
              //drawRandomShape(0,0)
              drawShape(0,0,choice)
              pop()
              shapes_coord[coordX+x][coordY+y] = 1
            } 
          }
        }
      }
    } 
}

function keyPressed() {
  if (keyCode === ENTER) {
    generate() }
}

function draw() {
  //let red = 253;
  //let green = 224
  //let blue = 58
  //background(230);
  let remain = 4
  let color = 0
  let palette
  let rando = int(random(0,7))
  switch (rando) {
    case 0 :
      palette = PALETTE_HEX_BLUE
      break;
    case 1 :
      palette = PALETTE_HEX_GREEN
      break;
    case 2 :
      palette = PALETTE_HEX_PURPLE
      break;
    case 3 :
      palette = PALETTE_HEX_ORANGE
      break;
    case 4 :
      palette = PALETTE_HEX_RED
      break;
    case 5 :
      palette = PALETTE_HEX_PINK
      break;
    case 6 :
      palette = PALETTE_HEX_GREEN2
      break;
  }
  val = slider.value();
  val2 = slider_sh.value();
  val3 = myInput.value()
  val4 = myInput2.value()
  val5 = slider_p.value()


  if(token == true)
  {
    //console.log(CELL_SIZE)
    for (let x = 0; x < COLUMNS; x++) {
      for (let y = 0; y < ROWS; y++) {
        if(remain == 0)
        {
          palette = getRandomPalette()
          remain = floor(random(1,5))
          //console.log(remain)
        }
        const posX = (CELL_SIZE / 2) + (x * CELL_SIZE)
        const posY = (CELL_SIZE / 2) + (y * CELL_SIZE) 
        push()
        translate(posX, posY)
        noStroke()
        fill(palette[remain])
        if(remain >= 0) {
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
