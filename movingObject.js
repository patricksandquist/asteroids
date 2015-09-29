window.Asteroids = (function(Asteroids) {
  "use strict";
  // Asteroids.MovingObject = {};

  var Vector = Asteroids.Utils.Vector;

  Asteroids.MovingObject = function(options, game) {
    this.game = game;
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  };

  Asteroids.MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  Asteroids.MovingObject.prototype.move = function() {
    this.pos = this.game.wrap(this.pos.add(this.vel));
  };

  Asteroids.MovingObject.prototype.isCollideWith = function(otherObject) {
    // if ((this.radius + otherObject.radius) > this.pos.distance(otherObject.pos)) {
    //   this.game.remove(this);
    //   this.game.remove(otherObject);
    // }
  };

  return Asteroids;
})(window.Asteroids || {});
