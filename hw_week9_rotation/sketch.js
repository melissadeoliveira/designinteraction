var verse1;
var verse2;
var lemon;
var song;

var counter = 0;
var speed = 1;
var counter2 = 500;
var switchitup;


function preload(){
    verse1 = loadImage("verse1.png");
    verse2 = loadImage("verse2.png");
    lemon = loadImage("lemon.png");
    song = loadSound("lemonmusic.mp3");
}

function setup(){
    createCanvas(1200,1000);
    imageMode(CENTER);
    
}

function draw(){
     background(0);
    
//    verse1
      if(switchitup == true){
         translate(600,500);
         scale(.2);
         image(verse2,0,0);
          
         translate(1190,800);
         rotate(radians(counter));
         image(lemon,1000,500);
          
         translate(1000,400);
         rotate(radians(counter));
         image(lemon,400,500);
          
         translate(0,700);
         rotate(radians(counter));
         image(lemon,1000,0);
          
         translate(1190,800);
         rotate(radians(counter2));
         image(lemon,1000,500);
          
         translate(1000,400);
         rotate(radians(counter2));
         image(lemon,400,500);
          
         translate(0,700);
         rotate(radians(counter2));
         image(lemon,1000,0);
        
         counter+= speed;
    }else{
         translate(600,500);
         scale(.2);
         image(verse1,0,0);
    }

}

function mousePressed(){
    
    switchitup = !switchitup;
    
       if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();
  }
}