 class Pony {
  constructor(){
    this.r = 110
    this.x = 50
    this.y = height - this.r;
    this.velocity = 0;
    this.gravity = 1.5;
  }
  jump(){
    if(this.y == height - this.r){
      this.velocity = -28
      };
  }
   hits(shrub){
     
    let x1 = this.x + this.r * 0.5;
     let y1 = this.y + this.r * 0.5;
     let x2 = shrub.x + shrub.r * 0.5;
     let y2 = shrub.y + shrub.r * 0.5;
     return collideCircleCircle(x1,y1,this.r,x2,y2,shrub.r)
   }
   
  move(){
    this.y += this.velocity;
    this.velocity += this.gravity;
    this.y = constrain(this.y, 0, height - this.r)
    
  }
  show(){
    image(pImg,this.x, this.y, this.r, this.r)
  }
}