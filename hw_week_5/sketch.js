var circOne = 474.5;
var circTwo = 857.5;
var speed = .75;
var irisRed 
var irisBlue 
var irisGreen 
var colThing = 1;

function setup(){
    createCanvas(1280,1024);
}

function draw(){ 
    
    if(colThing == 1){
        irisRed = 54;
        irisBlue = 172;
        irisGreen = 228;
    } else if (colThing == 2){
        irisRed = 249;
        irisBlue = 96;
        irisGreen = 103;} else{
        irisRed = 97;
        irisBlue = 223;
        irisGreen = 130;
        } 
  
    background(irisRed,irisBlue,irisGreen);
    
    //    OUTER WHITE CIRCLE
    fill(255);
    strokeWeight(10);
    ellipse(889,468,268,268);
    ellipse(443,468,268,268);
    
    
    //    IRIS
    fill(irisRed,irisBlue,irisGreen);
    noStroke();
    ellipse(448,458,240,240);
    ellipse(884,458,240,240);
    
    
    //    BLACK CIRCLE
    fill(000);
    noStroke();
    ellipse(465,432,182,182);
    ellipse(867,432,182,182);
    
     //    PUPIL
    fill(255);
    noStroke();
    ellipse(circOne,422.5,91,91);
    ellipse(circTwo,422.5,91,91);
    
    circOne = circOne + speed;
    
    circTwo = circTwo + speed;
    
    if (circOne > 647 || circOne < 454){
        speed = speed*-1;
    }
    
    if (circTwo > 867 || circTwo < 0){
        speed = speed*-1;
    
}
}

function mousePressed(){
    if(colThing < 3){
    colThing = colThing +1;} else{
            colThing = 1;}
    }

    
   




