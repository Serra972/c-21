var sun,mercury,venus,mars,earth,jupiter,saturn,uranus,neptune ;

var sunImg, mercuryImg, venusImg, earthImg, marsImg, jupeterImg, saturnImg, uranusImg, neptuneImg;

var background,backgroundImg;

function preload(){

  backgroundImg= loadImage("solarImages/galaxy.png");

  sunImg=loadImage("solarImages/sun.png");

  mercuryImg=loadImage("solarImages/mercury.png");

  venusImg=loadImage("solarImages/venus.png");

  earthImg=loadImage("solarImages/earth.png");

  marsImg=loadImage("solarImages/mars.png");

  jupeterImg=loadImage("solarImages/jupiter.png");

  saturnImg=loadImage("solarImages/saturn.png");

  uranusImg=loadImage("solarImages/uranus.png");

  neptuneImg=loadImage("solarImages/neptune.png");


  
}
function setup() {
  createCanvas(1200,1200);

  sun = createSprite(7,7, 100, 150);
  sun.addImage(sunImg);
  sun.scale= 0.1;
  console.log(sun.x);
  sun.setCollider("circle",0,0,200);
  sun.debug=true;

  mercury = createSprite(150,200,40,40);
  mercury.addImage(mercuryImg);
  mercury.scale= 0.1;

  venus = createSprite(230,250,30,30);
  venus.addImage(venusImg);
  venus.scale= 0.2;

  earth = createSprite(330,300,40,40);
  earth.addImage(earthImg);
  earth.scale= 0.25;

  mars = createSprite(450,350,40,40);
  mars.addImage(marsImg);
  mars.scale= 0.11;

  jupiter = createSprite(600,420,30,30);
  jupiter.addImage(jupeterImg);
  jupiter.scale= 0.30;

  saturn = createSprite(830,520,40,40);
  saturn.addImage(saturnImg);
  saturn.scale= 0.25;

  uranus = createSprite(990,700,30,30);
  uranus.addImage(uranusImg);
  uranus.scale= 0.15;

  neptune = createSprite(1100,800,40,40);
  neptune.addImage(neptuneImg);
  neptune.scale= 0.11;
}

function draw() {
  background(backgroundImg);  

  drawSprites();

  text(mouseX + ',' + mouseY, 10, 15);
  if(frameCount%50===0){
    sun.scale= sun.scale+0.1;
  }

  if(sun.collide(mercury)){
    mercury.destroy();
  }

  if(sun.collide(venus)){
    venus.destroy();
  }

  if(sun.collide(earth)){
    earth.destroy();
  }

  if(sun.collide(mars)){
    mars.destroy();
  }

  if(sun.collide(jupiter)){
    jupiter.destroy();
  }

  if(sun.collide(saturn)){
    saturn.destroy();
  }

  if(sun.collide(uranus)){
    uranus.destroy();
  }

  if(sun.collide(neptune)){
    neptune.destroy();
  }
}