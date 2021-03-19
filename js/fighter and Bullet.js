function CreateFighter(){
    if(frameCount%300=== 0){
      fighter = createSprite (1200,320,30,30);
      fighter.addAnimation("fighter",fighterImage);
      fighter.addAnimation("fighterstop",fighterstopImage);
      fighter.scale=1.2;
      fighter.velocityX=-6;
      fighter.lifetime=250;
      fighter.debug=true;
      fighter.setCollider("rectangle",0,0,100,70)
      buff.depth=fighter.depth+1;
      fighterGroup.add(fighter);
    }
}
  
function Createbullet(){
  if(frameCount%100===0){
  bullet=createSprite(random(500,900),-10);
  bullet.addImage(bulletImage);
  bullet.scale=0.05;
  bullet.velocityX=-4;
  bullet.velocityY=4;
  bulletGroup.add(bullet);
  bullet.debug=true;
  bullet.lifetime=200;
  bullet.setCollider("circle",0,0,20);
  }
}
  