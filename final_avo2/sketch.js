var cookingInstructions = ["cut the avocado","click to advance >","toast the toast"];
var toasterup;
var toasterdown;
var toast;
var bread;
var toasting = 1;


//rect variables
var toastX = 350;
var toastY = 350;
var toastSize = 400;
var toastrectTop = toastY;
var toastrectBottom = toastY + toastSize;
var toastrectLeft = toastX;
var toastrectRight = toastX + toastSize;

function preload() {
    toasterup = loadImage("images/toasterup.png");
    toasterdown = loadImage("images/toasterdown.png");
    bread = loadImage("images/bread.png");
    toast = loadImage("images/toast.png");
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
    text(cookingInstructions[2],width/2,600);
    textSize(42);
    text(cookingInstructions[1],width/2,650);
    
//  toaster
    
    if(toasting == 1){
           image(bread,width/2,300,300,300);
           image(toasterup,width/2,350,350,350); 
       }else if (toasting == 2){ 
           image(toast,width/2,400,300,300);
           image(toasterdown,width/2,350,350,350);
        }else{
           image(toast,width/2,300,300,300);
           image(toasterup,width/2,350,350,350);     
             }


}

function mousePressed(){
    if(toasting < 3){
    toasting = toasting +1;} else{
            toasting = 1;}
    }