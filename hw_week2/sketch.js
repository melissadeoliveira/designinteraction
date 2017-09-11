var img;
function setup(){
    createCanvas(1080,720);
    img= loadImage("images/blackpinklogo.png");
    
}

function draw(){
    background(255,187,203);
    
    for(var h = 5; h < height; h+=20){
        stroke(000);
        line(0,h,h,height);
    }
    for(var x= 5; x < width; x+=20){
        stroke(255);
        strokeWeight(.95);
        line(width,x,x,0);   
    }
    image(img,width/3.1,height/2,img.width/4,img.height/4);
    
}