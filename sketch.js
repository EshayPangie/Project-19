var boy;
var forest_background;
var coin;
var invisibleGround;
var score = 0;
var coinGroup;
var gameState = "play"

function preload() {
  boyImg = loadImage("Boy - running.gif");
  forest_backgroundImg = loadImage("Forest.jpg");
  coinImg = loadImage("coin.png");
}

function setup() {
  createCanvas(800, 700);
  forest_background = createSprite(600, 300);
  forest_background.addImage("forest", forest_backgroundImg);
  forest_background.scale = 0.8;
  boy = createSprite(120, 550, 20, 20);
  boy.addImage("boy", boyImg);
  boy.scale = 0.55;
  invisibleGround = createSprite(400, 690, 800, 10);
  invisibleGround.visible = false;
  coinGroup = createGroup();
}

function draw() {
  boy.collide(invisibleGround);
  generateCoins();
  background("white");
  textSize(30);
  text("Score="+score, 300, 300);
  forest_background.velocityX = -5;
  // if (forest_background.x < 0) {
  //   forest_background.x = 600;
  // }
  if (coinGroup.isTouching(boy)) {
    score = score + 1;
    coinGroup.destroyEach();
  }

  if (keyDown("space")) {
    boy.y = boy.y - 80;
    boy.velocityY = boy.velocityY + 6;
  }

  drawSprites();
}

function generateCoins() {
  if (frameCount % 100 == 0) {
    coin = createSprite(700, 600, 50, 50);
    coin.scale = 0.1;
    coin.velocityX = -6;
    coin.addImage("coin", coinImg);
    coin.x = Math.round(random(40, 770));
    coin.y = Math.round(random(50, 680));
    coinGroup.add(coin);
  }
}
