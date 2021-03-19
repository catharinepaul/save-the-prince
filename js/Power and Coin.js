function CreatePower(){
    if(frameCount===300 || frameCount===1500 ){
     
      PowerCircle = createSprite (1100,250,30,30);
      PowerCircle.addImage("PowerCircle",powerCircleImage);
      PowerCircle.rotationSpeed=20;
      
      PowerCircle.scale=0.4;
      PowerCircle.velocityX=-3;
      PowerCircle.lifetime=250;
  
      PowerCircleGroup.add(PowerCircle);
  
      Power = createSprite (1100,250,30,30);
      Power.addImage("Power",powerImage);
      Power.scale=0.4;
      Power.velocityX=-3;
      Power.lifetime=250;
  
      PowerGroup.add(Power);
      }
   
  }
  function Createcoin(){
    if(frameCount%100===0){
    coin=createSprite(random(500,900),random(100,400));
    coin.addImage(coinImage);
    coin.scale=0.3
    coin.velocityX=-4;
    coinGroup.add(coin);
    coin.debug=true;
    coin.setCollider("circle",0,0,80);
    }
  }
