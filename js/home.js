// Defines a tree that may be drawn in the p5 framework
class Tree {
    // Create a tree with the specified initial length
    constructor(length)
    {
        this.length = length;
        this.angle = 0;
    }

    branch(depth)
    {
        if (depth > 0 && this.length > 10)
        {
            var t1 = new Tree(this.length / random(1, 1.9));
            t1.angle = -PI / random(6, 12);
            t1.branch(depth - 1);
            var t2 = new Tree(this.length / random(1, 1.9));
            t2.angle = PI / random(6, 12);
            t2.branch(depth - 1);
            this.children = [t1, t2];
        }
    }

    draw(t)
    {
        push();

        if (t > 0)
		{
			rotate(this.angle + map(noise(t), 0, 1, -PI / 64, PI / 64));
		}
		else
		{
			rotate(this.angle);
		}
		
		strokeWeight(this.length / 10);
		stroke(193, 154, 107);
		line(0, 0, 0, -this.length);
		
		if (this.children != null)
		{
            // Prevents branch to branch seaming 
            translate(0, -this.length + this.length / 20);

			this.children[0].draw(t);
			this.children[1].draw(t);
		}
		else
		{
            translate(0, -this.length);

			noStroke();
			fill(75, 100, 75, 120);
			ellipse(0, 0, this.length * 2, this.length * 2);
		}
        
        pop();
    }
}

var t;
var tree;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-background');
    tree = new Tree(height / 6);
    t = random(50);
    tree.branch(8);
}
  
function draw() {
    background(18, 18, 26);
    t += 0.005;
    
    push();
    translate(width / 4, height);
    tree.draw(t);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}