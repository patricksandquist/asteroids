window.Asteroids = (function(Asteroids) {
  "use strict";

  // var randomVel = Asteroids.Utils.Vector.randomVec(5);

  var Asteroid = Asteroids.Asteroid = function(options, game) {
    options.vel = options.vel || Asteroids.Utils.Vector.randomVec(5);
    options.radius = options.radius || Asteroid.RADIUS;
    options.color = options.color || Asteroid.COLOR;
    Asteroids.MovingObject.call(this, options, game);
  };

  Asteroids.Utils.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "black";
  Asteroid.RADIUS = 20;

  Asteroid.prototype.isCollideWith = function(otherObject) {
    if ((this.radius + otherObject.radius) >
          this.pos.distance(otherObject.pos) &&
          otherObject instanceof Asteroids.Ship ) {
      otherObject.relocate();
    }
  };

  return Asteroids;
})(window.Asteroids || {});
