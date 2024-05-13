class Shrub{
  constructor(){
    this.r = 75
    this.x = width;
    this.y = height - this.r;
  }
   move(){
     this.x -= 10;
   }
     
  show(){
  image(sImg, this.x, this.y, this.r, this.r)
}
}