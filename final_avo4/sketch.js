var cookingInstructions = ["cut the avocado","click to advance >","toast the toast","tap to crack the egg","turn up the heat"];
var knob;
var flame;
var flame2;
var flamemed;
var flamesmall;
var fryingpan;
//var heatchange = {
//    x: 700,
//    y: 430,
//    width: 200,
//    height: 200,
//}

let angle = 3;


//rect variables
//var toastX = 350;
//var toastY = 350;
//var toastSize = 400;
//var toastrectTop = toastY;
//var toastrectBottom = toastY + toastSize;
//var toastrectLeft = toastX;
//var toastrectRight = toastX + toastSize;

function preload() {
    knob = loadImage("images/knob.png");
    flame = loadImage("images/flame.png");
    flame2 = loadImage("images/flame2.png");
    flamemed = loadImage("images/flamemed.png");
    flamesmall = loadImage("images/flamesmall.png");
    fryingpan = loadImage("images/fryingpan.png");
    
//    heatchange.create = createImg("images/flame.gif");
    
    vee = loadFont('VT323-Regular.ttf');
    
}


function setup() {
    createCanvas(1200, 800);
//    canvas.position(0,0);
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
    text(cookingInstructions[4],width/2,600);
    textSize(42);
    text(cookingInstructions[1],width/2,650);
    
    
    image(fryingpan,720,300,350,350);
    image(flame,700,430,200,200);
    
    translate(480,350);
    rotate(angle);
    image(knob,0,0,130,130);
    
    angle = angle+1 
    
    
    
             }