class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 100;
      this.height = 40;
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
      stroke("grey")
      fill("silver")
      rect(0, 0, this.width, this.height);
      pop();
    };
  };