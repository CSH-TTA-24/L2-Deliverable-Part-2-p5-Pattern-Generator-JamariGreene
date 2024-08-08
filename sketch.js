function setup() {
  createCanvas(500, 500);
initializeColors();
}

function draw() {
  stroke(r, g, b);
line(width / 2, height / 2, mouseX, mouseY);
}

function mouseClicked() {
  clear();
  changecolor();
    initializecolors();
  redraw();
  
}

function Clear(){
  clear();
 background(r, g, b)
}

function initializeColors(){

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}

function changecolor(){
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

}