var mode = 0;
let pony;
let pImg;
let sImg;
let shrub = []
let resources = {
  starImg: []
}
let music;

function preload(){
  pImg = loadImage('img/pony.png')
  sImg = loadImage('img/shrub.png')
//////////////////////////////////////
  for (let i=0; i < 6; i++)
  resources.starImg[i] = loadImage('img/star' + i + '.png')
  music = loadSound('music.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();
  pony = new Pony();
  stars = new StarSystem(resources.starImg)
}
function mousePressed(){
    if (mouseIsPressed && splash.update() == true){
       music.play();
  }
}

function keyPressed(){
  if (key == ' '){
    pony.jump();
  }
}
function draw() {
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  if (mode == 1) {
    splash.hide();
////////////////////// your cod e here
    if(random(1) < 0.01){
      shrub.push(new Shrub());
    }
    background(207, 165, 204);
    fill(100);
    pony.show();
    pony.move();
    stars.run()
    
    for(let t of shrub){
      t.move();
      t.show();
      if(pony.hits(t)){
      console.log('game over')
         strokeWeight(10);
      textSize(64);
        textFont('Courier New')
      fill(77,0,75);
      textAlign(CENTER);
      text("Game Over", width / 2, height * 0.3);
      fill(77,0,75)
      textSize(24)
      text("Opps!Try Again!", width / 2, height * 0.4)
        music.stop()
        noLoop();
        }
          
    }
  }
}

