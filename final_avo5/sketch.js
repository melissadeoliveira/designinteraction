particles = [];
var cookingInstructions = ["cut the avocado","click to advance >","toast the toast","tap to crack the egg","turn up the heat", "finally season your masterpiece!"];
var done;
var vee;

function preload() {
    done = loadImage("images/done.png");   
    vee = loadFont('VT323-Regular.ttf');    
}

function setup() {
  createCanvas(1200, 800);
  imageMode(CENTER);
  textAlign(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(247,202,201);
    
 //    text
    textFont(vee);
    textSize(64);
    fill(255);
    text(cookingInstructions[5],width/2,600);
    
    
 image(done,width/2,height/2,350,350);
    
  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}

class Particle {

  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.vx = random(-1, 1);
    this.vy = random(5, 1);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    //stroke(255);
    fill(random(255,0), this.alpha);
    rect(this.x, this.y, 5,5);
  }

}
