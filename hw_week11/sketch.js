var poem = ["this","morning","I","told","the","flowers","what","I'd","do","for","you","and","they","blossomed"];
var index = 0;
var playfair;

function preload() {
  playfair = loadFont('PlayfairDisplay-Bold.ttf');
}

function setup(){
    createCanvas(800,800);
}

function draw(){
    background(0);
    textFont(playfair);
    textSize(32);
    fill(255);
    text(poem[index],width/2,height/2);
}

function mousePressed(){
    index= index + 1;
    
    if(index == words.length){
        index = 0;
    }
}