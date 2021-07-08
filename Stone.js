class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 60;
      this.height = 60;
      World.add(world, this.body);
    };
    display(){
      var angle = this.body.angle;
      var pos= this.body.position; 
    
      
      
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      rectMode(CENTER)
      strokeWeight(4)
      stroke("maroon")
      fill("brown")
      rect(0, 0, this.width, this.height);
      pop();
    };
  };