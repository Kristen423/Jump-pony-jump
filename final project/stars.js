class Particle{
  constructor(image){
    this.image =image;
    this.totalFrames = image.length;
    this.index = Math.round(random(0, this.totalFrames));
    this.position = null;
    this.speed = null;
    //this.osc = new p5.Oscillator();
    //this.osc.start()
    //this.osc.amp(0.5, .1)
    //this.osc.freq(random(50, 100))
  }
  birth(pos){
    this.position= pos;
  }
  update(){
    this.position[0] -= this.speed
  }
  isDead(){
    return this.position[0] < 0;
    
  }
  show(){
    this.index += (frameCount %3 === 0);
    this.index %= this.totalFrames;
    image(this.image[this.index], this.position[0], this.position[1]);  
  }
}


class ParticleSystem{
  constructor(image){
    this.image = image;
    this.Particle = Particle; // constructor of particle class
    this.list = [];
    this.rate = 12; //emission rate
  }
  run(){
    this.emit();
    this.update();
    this.remove();
    this.show();
  } 
  emit(){
    if (Math.random() < (this.rate/ frameRate())){
      let particle = new this.Particle(this.image);
      particle.birth([width, random(0,height - 200)]);
      this.list.push(particle);
    }
  } 
  update(){
    for (let i in this.list)
      this.list[i].update();
  } 
  remove(){
    for (let i in this.list)
      if(this.list[i].isDead()) this.list.splice(i,1);
  } 
  show(){
    for (let i in this.list)
      this.list[i].show();
  }
}


class Star extends Particle{
  constructor(image){
    super(image);
    this.speed= 15;
  }
}

class StarSystem extends ParticleSystem{
  constructor(image){
    super(image);
    this.Particle = Star;
    this.rate = 10;
    
  }
}
