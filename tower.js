class Box{
    constructor(x, y) {
      
        this.body = Bodies.rectangle(x, y,40,60);
        this.Visiblity = 255;
        this.image=loadImage("tower.jpg")
        World.add(world, this.body); 
      }
      display(){
        if(this.body.speed < 3){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          fill (118,233,255);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
          
        }

        else{

          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 20;
          tint(255,this.Visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }      
      }
}

// console.log(this.body.speed);
 /*if(this.body.speed < 3){
  super.display();
 }
 else{
   World.remove(world, this.body);
   push();
   this.Visiblity = this.Visiblity - 5;
   tint(255,this.Visiblity);
   image(this.image, this.body.position.x, this.body.position.y, 50, 50);
   pop();
 }
 /* else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          rect(0, 0, this.width,this.height);
          pop();
        } 




};*/