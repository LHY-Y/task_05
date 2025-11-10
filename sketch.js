let a_walker;

function setup() {
  createCanvas(400, 400);
  a_walker=new walker;
}

function draw() {
  background(220);
  a_walker.balloon();
  a_walker.update();
  a_walker.pop();

  if (mouseIsPressed) {
  let wind = createVector(0, -0.02);
  a_walker.applyforce(wind);
  let air = 0.5;
  a_walker.radius(air);
  }
}
