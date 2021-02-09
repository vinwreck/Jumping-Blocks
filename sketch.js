var box1, box2, box3, box4;
var ball; 
var line1, line2, line3, line4;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,550);

    //create 4 different surfaces
    box1 = createSprite(85,550,170,30);
    box1.shapeColor="blue";
    box2 = createSprite(295,550,170,30);
    box2.shapeColor="orange";
    box3 = createSprite(505,550,170,30);
    box3.shapeColor="violet";
    box4 = createSprite(715,550,170,30);
    box4.shapeColor="green";

    //create box sprite and give velocity
    ball = createSprite(random(20,750),50,20,20);
    ball.shapeColor="white";
    ball.velocityX=8;
    ball.velocityY=8;

    //creating edge lines
    line1 = createSprite(800,300,5,600);
    line1.shapeColor="black";
    line2 = createSprite(400,0,800,5);
    line2.shapeColor="black";
    line3 = createSprite(0,300,5,600);
    line3.shapeColor="black";
    line4 = createSprite(400,550,800,1);
    line4.shapeColor="black";
    
}

function draw() {
    background("black");

    //create edgeSprite
    ball.bounceOff(line1);
    ball.bounceOff(line2);
    ball.bounceOff(line3);
    ball.bounceOff(line4);

    //add condition to check if box touching surface and make it box

    if(box1.isTouching(ball) && ball.bounceOff(box1)) {
        ball.shapeColor="blue";
        music.play();
    }
    if(box3.isTouching(ball) && ball.bounceOff(box3)) {
        ball.shapeColor="violet";
        music.play();
    }
    if(box4.isTouching(ball) && ball.bounceOff(box4)) {
        ball.shapeColor="green";
        music.play();
    }

    if(ball.isTouching(box2)) {
        ball.shapeColor="orange";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }



    drawSprites();
}
