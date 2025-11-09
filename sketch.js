let a_walker;
let wind;

function setup() {
  createCanvas(400, 400);
  a_walker=new walker;
}

function draw() {
  background(220);
  a_walker.balloon();
  a_walker.update();
  a_walker.applyforce(wind);
}
