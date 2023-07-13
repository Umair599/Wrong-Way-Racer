import Circle from './circle'

class Player extends Circle {
  constructor(color, radius, v) {
      super(color, radius, v);
      this.reset();
  }

  reset() {
      this.circle.x = w/2;
      this.circle.y = h/2;
      this.speed = 2;
  }

  update() {
      let x = this.circle.x + this.v.x;
      let y = this.circle.y + this.v.y;

      this.circle.x = Math.min(Math.max(x, this.radius), w-this.radius);
      this.circle.y = Math.min(Math.max(y, this.radius), w-this.radius);
      monsters.forEach(m => {
        if (this.collide(m)) {
            reset();
            return;
        }
    });
  }
}
function reset() {
  monsters.forEach(m => {
      m.remove();
  });

  monsters = [];
  addMonster();
  player.reset();
}
function onkeydown(ev) {
  switch (ev.key) {
      case "ArrowLeft":
      case "a":
          player.v.x = -player.speed; 
          pressed['left'] = true;
          break;

      case "ArrowRight":
      case "d":
          player.v.x = player.speed;
          pressed['right'] = true;
          break;

      case "ArrowUp":
      case "w":
          player.v.y = -player.speed;
          pressed['up'] = true;
          break;

      case "ArrowDown": 
      case "s":
          player.v.y = player.speed;
          pressed['down'] = true;
          break;
  }
}
function onkeyup(ev) {
  switch (ev.key) {
      case "ArrowLeft": 
      case "a":
          player.v.x = pressed['right']?player.speed:0; 
          pressed['left'] = false;
          break;

      case "ArrowRight": 
      case "d":
          player.v.x = pressed['left']?-player.speed:0; 
          pressed['right'] = false;
          break;

      case "ArrowUp": 
      case "w":
          player.v.y = pressed['down']?player.speed:0; 
          pressed['up'] = false;
          break;

      case "ArrowDown": 
      case "s":
          player.v.y = pressed['up']?-player.speed:0; 
          pressed['down'] = false;
          break;
  }
}

function setupControls() {
  window.addEventListener("keydown", onkeydown);
  window.addEventListener("keyup", onkeyup);
}

//---
player = new Player(0xfcf8ec, 10, {x:0, y:0});
setupControls();