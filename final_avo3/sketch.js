var cookingInstructions = ["cut the avocado","click to advance >","toast the toast","tap to crack the egg"];
var egg;
var eggcrack1;
var eggcrack2;
var cracking = 1;


//rect variables
var toastX = 350;
var toastY = 350;
var toastSize = 400;
var toastrectTop = toastY;
var toastrectBottom = toastY + toastSize;
var toastrectLeft = toastX;
var toastrectRight = toastX + toastSize;

function preload() {
    egg = loadImage("images/egg.png");
    eggcrack1 = loadImage("images/eggcrack1.png");
    eggcrack2 = loadImage("images/eggcrack2.png");
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
    text(cookingInstructions[3],width/2,600);
    textSize(42);
    text(cookingInstructions[1],width/2,650);
    
//  toaster
    
    if(cracking == 1){
           image(egg,width/2,height/2,350,350); 
       }else if (cracking == 2){ 
           image(eggcrack1,width/2,height/2,350,350);
       }else{
           image(eggcrack2,width/2,height/2,350,350);     
             }


}

function mousePressed(){
    if(cracking < 3){
    cracking = cracking +1;} else{
            cracking = 1;}
    }