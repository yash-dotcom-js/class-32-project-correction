class Block {
    constructor(x,y,w,h){
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
            this.body= Bodies.rectangle(x,y,w,h,options);
            World.add(world,this.body);
            this.w = w;
            this.h = h;
            this.Visiblity=255;
    }
    display(){
        if(this.body.speed<5){


        
        push();
        var angle = this.body.angle;
        var pos= this.body.position;
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w, this.h);
        pop();
    }
    else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }



    }
    
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }
}
