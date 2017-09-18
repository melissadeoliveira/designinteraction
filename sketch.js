var isPink = false;

function setup(){
    createCanvas(1280,1024);
}

function draw(){
   if(isPink == false){ 
    background(54,172,228);
    fill(255);
    strokeWeight(10);
    ellipse(889,468,268,268);
    ellipse(443,468,268,268);
    fill(54,172,228);
    noStroke();
    ellipse(448,458,240,240);
    ellipse(884,458,240,240);
    fill(000);
    noStroke();
    ellipse(465,432,182,182);
    ellipse(867,432,182,182);
    fill(255);
    noStroke();
    ellipse(474.5,422.5,91,91);
    ellipse(857.5,422.5,91,91);} else{
    background(249,96,103);
    fill(255);
    strokeWeight(10);
    ellipse(889,468,268,268);
    ellipse(443,468,268,268);
    fill(249,96,103);
    noStroke();
    ellipse(448,458,240,240);
    ellipse(884,458,240,240);
    fill(000);
    noStroke();
    ellipse(465,432,182,182);
    ellipse(867,432,182,182);
    fill(255);
    noStroke();
    ellipse(474.5,422.5,91,91);
    ellipse(857.5,422.5,91,91)
    }
}

function mousePressed(){
    isPink = !isPink;
}

