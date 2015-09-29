window.Asteroids = (function(Asteroids) {
  "use strict";

  var Ship = Asteroids.Ship = function(options, game) {
    options.vel = new Asteroids.Utils.Vector(0, 0);
    options.pos = options.pos || game.center() ;
    options.radius = options.radius || Ship.RADIUS;
    options.color = options.color || Ship.COLOR;
    Asteroids.MovingObject.call(this, options, game);
  };

  Ship.RADIUS = 10;
  Ship.COLOR = "red";

  Asteroids.Utils.inherits(Ship, Asteroids.MovingObject);

  Asteroids.Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = new Asteroids.Utils.Vector(0, 0);
  };

  Asteroids.Ship.prototype.power = function(impulse) {
    this.vel = this.vel.add(impulse);
  };

  return Asteroids;
})(window.Asteroids || {});
