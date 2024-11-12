let particles = [];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  if(mouseIsPressed){
    particles.push(new Particle(mouseX, mouseY));
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].display();

    if (particles[i].x < 0 || particles[i].x > width || particles[i].y < 0 || particles[i].y > height) {
      particles.splice(i, 1);
    }
  }
}

class Particle{
  constructor(x, y){
    this.x = x;
    this.y = y;

    this.Xspeed = random(-2, 2);
    this.Yspeed = random(-2, 2);

    this.color = color(random(0, 255), random(0,255), random(0, 255));
  }
  
  display(){
    fill(this.color);
    ellipse(this.x, this.y, 10);

    ellipse(this.x-7.5, this.y-7.5, 10);

    ellipse(this.x+7.5, this.y+7.5, 10);

    ellipse(this.x-7.5, this.y+7.5, 10);

    ellipse(this.x+7.5, this.y-7.5, 10);

    ellipse(this.x, this.y-7.5, 10);

    ellipse(this.x, this.y+7.5, 10);

    ellipse(this.x+7.5, this.y, 10);

    ellipse(this.x-7.5, this.y, 10);

    this.x += this.Xspeed;
    this.y += this.Yspeed;
  }

}