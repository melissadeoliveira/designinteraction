function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    
}

function draw(){ 
    
    background(255, 241, 236);
    
    for (var i = 85; i<width; i +=275){
        
        itslit(i,250,246.865,255,random(0,255),random(0,255));

     
}
}
    

    

function itslit(x,y,size,r,g,b){
    rectMode(CENTER);
    fill(r,g,b);
    noStroke();
//    ellipse(85,250,246.865,246.865);
    ellipse(x,y,size,size);
    fill(209,211,212);
    stroke(88,89,92);
    strokeWeight(4);
    ellipse(80,430, 111.424, 94.378);
    rect(80,415,111.424,33.789);
    rect(80,381,111.424,33.789);
    
    
}