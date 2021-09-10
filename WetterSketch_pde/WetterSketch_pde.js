let button;
let rainStatus;

function setup() {
  createCanvas(1200, 700);
  background(3, 169, 252);

  button = createButton('toggle rain');
  button.position(0, 0);
  button.mousePressed(rainCheck);
}
rainCheck();

function draw() {
  rain();

  fill('green');
  stroke('green');
  rect(0, 500, 1200, 250); //Grass
  
  //Tree
  fill('brown');
  stroke('brown');
  rect(150, 300, 70, 250);
  fill('green');
  stroke('black');
  circle(185, 280, 250);

}

function rainCheck() {
  if (rainStatus == 0) {
    rainStatus = 1;
  }
  else {
    rainStatus = 0;
  }
}

function rain() {
  if (rainStatus == 1) {
    stroke(40, 3, 252);
    fill(40, 3, 252);
    circle(random(0, 1200), random(0, 700), 7);
  }
  else {
    clear();
    background(3, 169, 252)
  }
}

