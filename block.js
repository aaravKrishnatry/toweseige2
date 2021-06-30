class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.visibilty=255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if (this.body.speed <3 ){
           rectMode(CENTER)
           rect(pos.x, pos.y, this.width, this.height)
        }
        else
        {
        World.remove(world,this.body)
          push();
          this.visiblity = this.visiblity - 5;
          tint(255,this.visiblity);
          rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
      }
}
