var imghearteyes;
var imgunamused;
var imgheart;
var imgbrokenheart;
var imgwink;
var circX;
var circY;
var circDiameter = 150;
var circRadius = circDiameter/2;
var d;
var yesFont;

function preload(){
    imghearteyes = loadImage("hearteyes.png");
    imgheart = loadImage("heart.png");
    imgunamused = loadImage("unamused.png");
    imgbrokenheart = loadImage("brokenheart.png");
    yesFont = loadFont("RobotoMono-Regular.ttf");

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    circX = width/2;
    circY = height/2;
    textFont(yesFont);
    textSize(24);
    
}

function draw(){
    background(100,172,255);
    
//    Circle For Clicky Thing
    noFill();
    noStroke();
    ellipse(circX,circY,circDiameter,circDiameter);
    
//    Making the Mouse Hover Thing Work
    d = dist(circX,circY,mouseX,mouseY);
    

    
//    Knowing Where Da Mouse At
    if(d < circRadius){
        //    Heart Eyes Emoji 
    imageMode(CENTER);
    image(imghearteyes,width/2,height/2,150,150);
    image(imgheart,width/2,260,80,80);
    }else{
    imageMode(CENTER);
    image(imgunamused,width/2,height/2,150,150);
    image(imgbrokenheart,width/2,260,80,80);   
    }
    
    fill(255);
    text("turn your frown upsidedown",mouseX,mouseY,250,100);
    

}