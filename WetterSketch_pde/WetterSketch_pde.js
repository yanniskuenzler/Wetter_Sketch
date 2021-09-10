function setup() {
  createCanvas(1200, 700);
  background(3, 169, 252);
}


function draw() {
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
