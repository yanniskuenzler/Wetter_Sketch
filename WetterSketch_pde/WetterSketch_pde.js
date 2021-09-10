let button;
let rainStatus;

function setup() {
  createCanvas(1200, 700);
  background(165, 198, 232);
  frameRate(30);

  button = createButton('toggle rain');
  button.position(0, 0);
  button.mousePressed(rainCheck);
}
rainCheck();

function draw() {
  rain();

  createCloud(550, 100, 70);
  createCloud(900, 250, 70);
  createCloud(170, 100, 70);

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
    background(165, 198, 232)
    let cloudColour;
    cloudColour = random(90, 100);
    stroke(40, 3, 252);
    fill(40, 3, 252);
    let count = 0
    while (count <= 3){
    circle(random(0, 1200), random(0, 700), 7);
    count += 1;
    }
    count = 0;
    fill(cloudColour);
    stroke(cloudColour);
  }
  else {
    clear();
    background(3, 169, 252)
    fill('white');
    stroke('white');
  }
}

function createCloud(x, y, r) {
  circle(x, y, r);
  circle(x + 30, y - 20, r - 20);
  circle(x + 25, y, r + 15);
  circle(x + 50, y - 5, r + 15);
  circle(x + 85, y + 10, r - 20);
}
