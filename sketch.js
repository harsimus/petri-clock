function setup() {
    createCanvas(500, 500);
    noLoop();
  }
  
function draw() {
    background(220);
    ellipse(250,250,250,250);
    ellipse(Math.random() * 250,Math.random() * 250,50,50);
  }