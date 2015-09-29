window.Asteroids = (function(Asteroids){

  Asteroids.Bullet = function(options, game) {
    options.color = 'black';
    options.radius = 2;
    Asteroids.MovingObject.call(this, options, game);
  };

  Asteroids.Utils.inherits(Asteroids.Bullet, Asteroids.MovingObject);

  Asteroids.Bullet.prototype.isCollideWith = function(otherObject) {
    if ((this.radius + otherObject.radius) >
          this.pos.distance(otherObject.pos) &&
          otherObject instanceof Asteroids.Asteroid ) {
      this.game.remove(otherObject);
    }
  };

  return Asteroids;
})(window.Asteroids || {});
