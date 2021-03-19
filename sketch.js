var girl, girlImage;
var PowerCircle,powerCircleImage;
var gameState="play";
var gameover;
score=000;
life=0;
count=0;



function preload(){
 girlImage = loadAnimation("Images/girl/girl1.png","Images/girl/girl2.png",
 "Images/girl/girl3.png","Images/girl/girl4.png","Images/girl/girl5.png");
 girlkickImage = loadAnimation("Images/girl/girl5.png");
 fighterstopImage = loadAnimation("Images/fighter/fighter8.png");
 fighterImage = loadAnimation("Images/fighter/fighter3.png","Images/fighter/fighter4.png","Images/fighter/fighter5.png",
 "Images/fighter/fighter7.png","Images/fighter/fighter8.png");
 playgroundImage = loadImage("Images/bg.png");
 //movebackimage=loadAnimation("girl/girl4.png","girl/girl4.png",
 //"girl/girl3.png","girl/girl2.png",)
bulletImage=loadImage("Images/bullets.png");
powerImage=loadImage("Images/power.png");
heartImage=loadImage("Images/heart.png");
gameoverImage=loadImage("Images/gameover.png");
powerCircleImage=loadImage("Images/powercircle.png");
retryImage=loadImage("Images/retry.png");
coinImage=loadImage("Images/coin.png");
buffImage=loadImage("Images/boombuff.png");
}

function setup() {
  createCanvas(1000,450);
  
    //creating playground
  playground = createSprite(600,120);
  playground.addImage("playground",playgroundImage);
  playground.scale = 1.9;
  playground.velocityX =-4;
  

 //creating girl
  girl = createSprite (330,330,30,30);
  girl.addAnimation("girl",girlImage);
  girl.addAnimation("girlkick",girlkickImage);
  
  girl.scale=0.25;
  girl.debug=true;
  //girl.setCollider("rectangle",0,0,350,400)
  girl.setCollider("circle",0,0,200);

  retry=createSprite(500,50);
  retry.addImage(retryImage);
  retry.visible=false;
  retry.scale=0.2;

  gameover = createSprite (500,150,30,30);
  gameover.addImage("gameover",gameoverImage);
  gameover.visible=false;
  gameover.scale=0.3;

  edges=createEdgeSprites();

  
  PowerCircleGroup = new Group();
  PowerGroup = new Group();
  fighterGroup = new Group();
  coinGroup = new Group(); 
  bulletGroup = new Group();

  buff=createSprite(girl.x,girl.y);
  buff.addImage(buffImage);
  buff.visible=false;
  buff.scale=0.6;

  coinscore=createSprite(760,30);
  coinscore.addImage(coinImage);
  coinscore.scale=0.2;

  heart=createSprite(160,30);
  heart.addImage(heartImage);
  heart.scale=0.1;

  heart1=createSprite(120,30);
  heart1.addImage(heartImage);
  heart1.scale=0.1;

  heart2=createSprite(80,30);
  heart2.addImage(heartImage);
  heart2.scale=0.1;

  invisibleGround=createSprite(500,430,1000,20);
  invisibleGround.visible=false;

}

function draw() {
  
  

  if(gameState="play"){

    count=0;    
    buff.visible=false;
    playground.velocityX =-4;    
    if(playground.x < 0){
      playground.x = 600;
    }
    
    if(keyDown("left") && gameState==="play"){
      girl.x=girl.x-2;
     // girl.changeAnimation(movebackimage)
    }
    if(keyDown("right") && gameState==="play"){
      girl.x=girl.x+2
    }
    if(keyDown("up") && gameState==="play"){
      girl.y=girl.y-2;
    }
    if(keyDown("down") && gameState==="play" ){
      girl.y=girl.y+2
    }

    retry.visible=false;

    CreateFighter();
    CreatePower();
    Createcoin();
    Createbullet();

    if(girl.isTouching(fighterGroup) || girl.isTouching(bulletGroup)|| gameState==="restart"){
      gameState="restart";
      // count=count+1;
    }
  
    

    if(keyWentDown("space") && gameState==="play"){
      gameState="kick";
    }
    if(keyWentUp("space")){
      girl.changeAnimation("girl",girlImage);
    }
    girl.velocityY=girl.velocityY+0.5;

    if(girl.isTouching(coinGroup)){
      score=score+10;
      coinGroup.destroyEach();
    }
    
  console.log(gameState)
 }

  if(gameState==="restart"){
    gameOver();
      retry.visible=true;
      buff.visible=true;
      buff.x=girl.x+70;
      fighterGroup.x=fighterGroup-50;
     
  }
  if(count===1){
    life=life+1;
  }
  if(life===1){
    heart.destroy();
  }
  if(life===2){
    heart1.destroy();
  }
  if(life===3){
    heart2.destroy();
    gameState="end";
  }
  console.log(count); 
  if(mousePressedOver(retry)){
    clear();
    gameState="play";
    
    girl.x=100;
    gameover.visible=false;
    fighterGroup.destroyEach();
    bulletGroup.destroyEach();
  }
  
  if(gameState==="kick"){
    girl.changeAnimation("girlkick",girlkickImage);
   girl.velocityY=-15 ;
  }
  
  girl.collide(invisibleGround);
  girl.collide(edges[2])
  
  drawSprites();

  stroke("black");
  strokeWeight(3);
  textSize(20);
  fill("grey");
  textFont("Impact");
  text(score,800,40);
}





function gameOver(){
  gameover.visible=true;
  playground.velocityX=0;
  fighterGroup.setVelocityXEach(0);
  bulletGroup.setVelocityEach(0,0);
  PowerGroup.setVelocityXEach(0);
  PowerCircleGroup.setVelocityXEach(0);
  coinGroup.destroyEach();
 // bulletGroup.destroyEach();
  //fighterGroup.destroyEach();
  fighterGroup.setLifetimeEach(-1);
  bulletGroup.setLifetimeEach(-1);
  girl.changeAnimation("girlkick",girlkickImage);
 // fighter.changeAnimation("fighterstop",fighterstopImage);
  girl.setVelocity(0,0);
}


