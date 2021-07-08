class Rubber {
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		restitution:0.7,
		friction:9,
		density:1
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y,(this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("darkblue");
			fill("blue");
			ellipse(0,0,this.r,this.r)
			//draw the ellipse here to display the rubber ball
             //ellipse(0,0,this.r,this.r)
			pop()
	}

}