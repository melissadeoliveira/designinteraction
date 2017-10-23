var magnolia;

var boi;

var cardi;

var skrt;

var trappin;

var unh;

var clickrectplaytrack = {
    width: 571,
    length: 52.5,
    x: 300,
    y: 200,
    left: 300,
    right: 300 + 571,
    top: 200,
    bottom: 200 + 52.2,
};

var clickrectboi = {
    width: 135,
    length: 52.5,
    x: 100,
    y: 475,
    left: 100,
    right: 100 + 135,
    top: 475,
    bottom: 475 + 52.2,
};

var clickrectcardi = {
    width: 135,
    length: 52.5,
    x: 300,
    y: 475,
    left: 300,
    right: 300 + 135,
    top: 475,
    bottom: 475 + 52.2,
}

var clickrectskrt = {
    width: 135,
    length: 52.5,
    x: 500,
    y: 475,
    left: 500,
    right: 500 + 135,
    top: 475,
    bottom: 475 + 52.2,
}

var clickrecttrappin = {
    width: 135,
    length: 52.5,
    x: 700,
    y: 475,
    left: 700,
    right: 700 + 135,
    top: 475,
    bottom: 475 + 52.2,
}

var clickrectunh = {
    width: 135,
    length: 52.5,
    x: 900,
    y: 475,
    left: 900,
    right: 900 + 135,
    top: 475,
    bottom: 475 + 52.2,
}

var playtrack = {
    loc: 0,
    width: 571,
    length:  52.5,
    x: 300,
    y: 200,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
}

var boibtn = {
    loc: 0,
    width: 135,
    length:  52.5,
    x: 100,
    y: 475,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var cardibtn = {
    loc: 0,
    width: 135,
    length:  52.5,
    x: 300,
    y: 475,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var skrtbtn = {
    loc: 0,
    width: 135,
    length:  52.5,
    x: 500,
    y: 475,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var trappinbtn = {
    loc: 0,
    width: 135,
    length:  52.5,
    x: 700,
    y: 475,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var unhbtn = {
    loc: 0,
    width: 135,
    length:  52.5,
    x: 900,
    y: 475,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var boiPressed = {
    loc: 0,
    width: 135,
    length:  52.5,
    x: 100,
    y: 475,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var cardiPressed = {
    loc: 0,
    width: 135,
    length:  52.5,
    x: 300,
    y: 475,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var skrtPressed = {
    loc: 0,
    width: 135,
    length:  52.5,
    x: 500,
    y: 475,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var trappinPressed = {
    loc: 0,
    width: 135,
    length:  52.5,
    x: 700,
    y: 475,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var unhPressed = {
    loc: 0,
    width: 135,
    length:  52.5,
    x: 900,
    y: 475,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
    
};


function preload(){
    magnolia = loadSound("instrumental.mp3");
    boi = loadSound("boi.mp3");
    cardi = loadSound("cardi.mp3");
    skrt = loadSound("skrt.mp3");
    trappin = loadSound("trappin.mp3");
    unh = loadSound("unh.mp3");
    boibtn.loc = loadImage("boibtn.png");
    cardibtn.loc = loadImage("cardibtn.png");
    skrtbtn.loc = loadImage("skrtbtn.png");
    trappinbtn.loc = loadImage("trappinbtn.png");
    unhbtn.loc = loadImage("unhbtn.png");
    boiPressed.loc = loadImage("boiPressed.png");
    cardiPressed.loc = loadImage("cardiPressed.png");
    skrtPressed.loc = loadImage("skrtPressed.png");
    trappinPressed.loc = loadImage("trappinPressed.png");
    unhPressed.loc = loadImage("unhPressed.png");
    playtrack.loc = loadImage("playtrack.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    
    background(000);
    
//    play dat track!
    image(playtrack.loc, playtrack.x, playtrack.y, playtrack.width, playtrack.length);
    
//    buttons
    image(boibtn.loc, boibtn.x, boibtn.y, boibtn.width, boibtn.length);
    image(cardibtn.loc, cardibtn.x, cardibtn.y, cardibtn.width, cardibtn.length);
    image(skrtbtn.loc, skrtbtn.x, skrtbtn.y, skrtbtn.width, skrtbtn.length);
    image(trappinbtn.loc, trappinbtn.x, trappinbtn.y, trappinbtn.width, trappinbtn.length);
    image(unhbtn.loc, unhbtn.x, unhbtn.y, unhbtn.width, unhbtn.length);
    
//    squares for buttons
    noFill();
    noStroke();
    rect(clickrectplaytrack.x,clickrectplaytrack.y,clickrectplaytrack.width,clickrectplaytrack.length);
    rect(clickrectboi.x,clickrectboi.y,clickrectboi.width,clickrectboi.length);
    rect(clickrectcardi.x,clickrectcardi.y,clickrectcardi.width,clickrectcardi.length);
    rect(clickrectskrt.x,clickrectskrt.y,clickrectskrt.width,clickrectskrt.length);
    rect(clickrecttrappin.x,clickrecttrappin.y,clickrecttrappin.width,clickrecttrappin.length);
    rect(clickrectunh.x,clickrectunh.y,clickrectunh.width,clickrectunh.length);
    
    
//    making it werk!
    if(mouseX > clickrectboi.left && mouseX < clickrectboi.right && mouseY > clickrectboi.top && mouseY < clickrectboi.bottom){
        image(boiPressed.loc, boiPressed.x, boiPressed.y, boiPressed.width, boiPressed.length);
    }else{
        image(boibtn.loc, boibtn.x, boibtn.y, boibtn.width, boibtn.length);
    }
    
    if(mouseX > clickrectcardi.left && mouseX < clickrectcardi.right && mouseY > clickrectcardi.top && mouseY < clickrectcardi.bottom){
        image(cardiPressed.loc, cardiPressed.x, cardiPressed.y, cardiPressed.width, cardiPressed.length);
    }else{
        image(cardibtn.loc, cardibtn.x, cardibtn.y, cardibtn.width, cardibtn.length);
    }
    
    if(mouseX > clickrectskrt.left && mouseX < clickrectskrt.right && mouseY > clickrectskrt.top && mouseY < clickrectskrt.bottom){
        image(skrtPressed.loc, skrtPressed.x, skrtPressed.y, skrtPressed.width, skrtPressed.length);
    }else{
        image(skrtbtn.loc, skrtbtn.x, skrtbtn.y, skrtbtn.width, skrtbtn.length);
    }
    
    if(mouseX > clickrecttrappin.left && mouseX < clickrecttrappin.right && mouseY > clickrecttrappin.top && mouseY < clickrecttrappin.bottom){
        image(trappinPressed.loc, trappinPressed.x, trappinPressed.y, trappinPressed.width, trappinPressed.length);
    }else{
        image(trappinbtn.loc, trappinbtn.x, trappinbtn.y, trappinbtn.width, trappinbtn.length);
    }
    
    if(mouseX > clickrectunh.left && mouseX < clickrectunh.right && mouseY > clickrectunh.top && mouseY < clickrectunh.bottom){
        image(unhPressed.loc, unhPressed.x, unhPressed.y, unhPressed.width, unhPressed.length);
    }else{
        image(unhbtn.loc, unhbtn.x, unhbtn.y, unhbtn.width, unhbtn.length);
    }
}   



function mousePressed(){
    
    if (mouseX > clickrectplaytrack.left && mouseX < clickrectplaytrack.right && mouseY > clickrectplaytrack.top && mouseY < clickrectplaytrack.bottom){
        magnolia.play();
    }
    
    if(mouseX > clickrectboi.left && mouseX < clickrectboi.right && mouseY > clickrectboi.top && mouseY < clickrectboi.bottom){
        boi.play();
    }
    
    if(mouseX > clickrectcardi.left && mouseX < clickrectcardi.right && mouseY > clickrectcardi.top && mouseY < clickrectcardi.bottom){
        cardi.play();
    }
    
    if(mouseX > clickrectskrt.left && mouseX < clickrectskrt.right && mouseY > clickrectskrt.top && mouseY < clickrectskrt.bottom){
        skrt.play();
    }
    
    if(mouseX > clickrecttrappin.left && mouseX < clickrecttrappin.right && mouseY > clickrecttrappin.top && mouseY < clickrecttrappin.bottom){
        trappin.play();
    }
    
    if(mouseX > clickrectunh.left && mouseX < clickrectunh.right && mouseY > clickrectunh.top && mouseY < clickrectunh.bottom){
        unh.play();

    }
    
    
    
    
////    pressed buttons
//    if(mouseX > clickrect.left && mouseX < clickrect.right && mouseY > clickrect.top && mouseY < clickrect.bottom){
//        image(boibtn.loc, boibtn.x, boibtn.y, boibtn.width, boibtn.length);
//    }else{
//        image(boiPressed.loc, boiPressed.x, boiPressed.y, boiPressed.width, boiPressed.length);
//    }
//    image(boiPressed.loc, boiPressed.x, boiPressed.y, boiPressed.width, boiPressed.length);
//    image(cardibtn.loc, cardibtn.x, cardibtn.y, cardibtn.width, cardibtn.length);
//    image(skrtbtn.loc, skrtbtn.x, skrtbtn.y, skrtbtn.width, skrtbtn.length);
//    image(trappinbtn.loc, trappinbtn.x, trappinbtn.y, trappinbtn.width, trappinbtn.length);
//    image(unhbtn.loc, unhbtn.x, unhbtn.y, unhbtn.width, unhbtn.length);
}

