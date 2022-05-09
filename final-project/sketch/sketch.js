let fans = [];
let fans2 = [];
let bg;

let innerFansAngle = 0;
let outerFansAngle = 0;

function preload(){
  bg = loadImage('k4flower.png')
}

function setup() {
  bg = loadImage('k4flower.png')
  let canvas = createCanvas(950, 950);
  canvas.parent('sketch-container')

  for (let angle=0; angle < 360; angle += 60) {
    let fan = new Fan(100, angle);
    fans.push(fan);
  }
  
   for (let angle=0; angle < 360; angle += 30) {
    let fan = new Fan2(100, angle);
    fans2.push(fan);
  }

 
}



function draw() {
  background(bg);
  

  push();
  translate(width/2, height/2);
  rotate(radians(innerFansAngle));
  innerFansAngle += 0.1;
  // this is just because the class will translate again
  translate(-width/2, -height/2);
  for (let i=0; i < fans.length; i++) {
    fans[i].move();
    fans[i].display();
  }
  pop();
  
  push();
  translate(width/2, height/2);
  rotate(radians(outerFansAngle));
  outerFansAngle -= 0.1;
  // this is just because the class will translate again
  translate(-width/2, -height/2);
  for (let i=0; i < fans2.length; i++) {
    fans2[i].move();
    fans2[i].display();
  }
  pop();
   
}

class Fan {
  constructor(dist, startAngle) {
    this.dist = dist;
    this.angle = startAngle;
    this.fanAngle = 0;
    
//     this.fanAngle = 0// this.angle = 0;// initialize angle variable
//     this.scalar = 0;  // set the radius of circle
//     this.startX = 450;	// set the x-coordinate for the circle center
//     this.startY = 450;	// set the y-coordinate for the circle center
  }

  move() {
    this.fanAngle = this.fanAngle + 1;
//     this.x = this.startX + this.scalar * cos(this.fanAngle);
//     this.y = this.startY + this.scalar * sin(this.fanAngle);
//     this.fanAngle++
    
  }
  
  display() {
    push();
    // translate to center point
    translate(width/2, height/2);
    rotate(radians(this.angle));
    // translate distance outwards
    translate(0, this.dist);
    
    // you could add some more fun here
    rotate(radians(this.fanAngle));
    
    // now 0, 0 is the center of the current fan
   push();
    noStroke()
    push()
    fill(219, 33, 33)
    arc(0, 0, 250, 250, PI + QUARTER_PI, TWO_PI);
    pop()
    push()
    fill(38, 153, 101)
    arc(0, 0, 200, 200, PI + QUARTER_PI, TWO_PI);
    pop()
    push()
    fill(235, 196, 26)
    arc(0, 0, 175, 175, PI + QUARTER_PI, TWO_PI);
    pop()
    push()
    fill(245, 233, 213);
    arc(0, 0, 150, 150, PI + QUARTER_PI, TWO_PI);
    pop()
    push()
    fill(245, 233, 213)
    arc(0, 0, 100, 100, PI + QUARTER_PI, TWO_PI)
    pop()
    push()
    fill(17, 42, 207)
    arc(0, 0, 90, 90, PI + QUARTER_PI, TWO_PI)
    pop()
    push()
    fill(0)
    arc(0, 0, 65, 65, PI + QUARTER_PI, TWO_PI)
    pop()
    pop();
    pop()
  }
}

class Fan2 {
  constructor(dist, startAngle) {
    this.dist = dist;
    this.angle = startAngle;
    this.fanAngle = 0;
    
  }

  move() {
    this.fanAngle = this.fanAngle + 1;
    
    
  }
  
  display() {
    push();
    // translate to center point
    translate(width/2, height/2);
    rotate(radians(this.angle));
    // translate distance outwards
    translate(0, this.dist*3.5);
    
    // you could add some more fun here
    rotate(radians(this.fanAngle));

    // now 0, 0 is the center of the current fan
       push();
    noStroke()
    push()
    fill(219, 33, 33)
    arc(0, 0, 250, 250, PI + QUARTER_PI, TWO_PI);
    pop()
    push()
    fill(38, 153, 101)
    arc(0, 0, 200, 200, PI + QUARTER_PI, TWO_PI);
    pop()
    push()
    fill(235, 196, 26)
    arc(0, 0, 175, 175, PI + QUARTER_PI, TWO_PI);
    pop()
    push()
    fill(245, 233, 213);
    arc(0, 0, 150, 150, PI + QUARTER_PI, TWO_PI);
    pop()
    push()
    fill(245, 233, 213)
    arc(0, 0, 100, 100, PI + QUARTER_PI, TWO_PI)
    pop()
    push()
    fill(17, 42, 207)
    arc(0, 0, 90, 90, PI + QUARTER_PI, TWO_PI)
    pop()
    push()
    fill(0)
    arc(0, 0, 65, 65, PI + QUARTER_PI, TWO_PI)
    pop()
    pop();
    pop()
  }
}