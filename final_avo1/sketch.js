var cookingInstructions = ["cut the avocado","click to advance >"];
var avo;
var avowpit;
var avonopit;
var knife;
var vee;

//rect variables
var avorectX = 350;
var avorectY = 350;
var avorectSize = 400;
var avorectTop = avorectY;
var avorectBottom = avorectY + avorectSize;
var avorectLeft = avorectX;
var avorectRight = avorectX + avorectSize;

function preload() {
    avo = loadImage("images/avo.png");
    knife = loadImage("images/knife.png");
    avowpit = loadImage("images/avowpit.png");
    avonopit = loadImage("images/avonopit.png");
    vee = loadFont('VT323-Regular.ttf');
    
}


function setup() {
    createCanvas(1200, 800);
    imageMode(CENTER);
    textAlign(CENTER);
}

function draw() {
    background(247,202,201);
    
//    text
    textFont(vee);
    textSize(64);
    fill(255);
    text(cookingInstructions[0],width/2,600);
    textSize(42);
    text(cookingInstructions[1],width/2,650);
    
//    avocadoes
    if(mouseX > avorectLeft && mouseX < avorectRight && mouseY > avorectTop && mouseY < avorectBottom){
       image(avonopit,700,height/2,350,350);
       image(avowpit,500,height/2,350,350); 
    }else {
        image(avo,width/2,height/2,350,350);
    }
    
//    knife
    image(knife, mouseX,mouseY,350,350);

}