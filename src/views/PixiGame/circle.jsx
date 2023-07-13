class Circle {
  constructor(color, radius, v) {
      this.radius = radius;
      this.v = v;

      let circle = new PIXI.Graphics();
      circle.beginFill(color);
      circle.drawCircle(0, 0, radius);
      circle.endFill();
      circle.x = radius;
      circle.y = radius;
      app.stage.addChild(circle);

      this.circle = circle;
      
  }
  remove() {
    app.stage.removeChild(this.circle);
}
  collide(other) {
    let dx = other.circle.x - this.circle.x;
    let dy = other.circle.y - this.circle.y;
    let dist = Math.sqrt(dx*dx + dy*dy);

    return dist < (this.radius + other.radius);
}
}

class Monster extends Circle {
  update() {
      this.circle.x += this.v.x;
      this.circle.y += this.v.y;

      if (this.circle.x >= w-this.radius || this.circle.x <= this.radius)
          this.v.x *= -1;

      if (this.circle.y >= h-this.radius || this.circle.y <= this.radius)
          this.v.y *= -1;
  }
}

function addMonster() {
  monsters.push(new Monster(0x79a3b1, Math.random()*10 + 10, {x:2 + Math.random(), y:2 + Math.random()}));
}