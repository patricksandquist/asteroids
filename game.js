window.Asteroids = (function(Asteroids) {
  "use strict";


  Asteroids.Game = function() {
    // this.asteroids = [];
    this.allObjects = [];
    this.makeAllObjects();
  };

  var Game = Asteroids.Game;
  Asteroids.Game.DIM_X = 600;
  Asteroids.Game.DIM_Y = 600;
  Asteroids.Game.NUM_ASTEROIDS = 4;

  Game.prototype.addAsteroids = function() {
    for (var astr = 0; astr < Game.NUM_ASTEROIDS; astr++) {
      this.asteroids.push(new Asteroids.Asteroid( { pos: this.randomPosition() }, this));
    }
  };

  Game.prototype.makeAllObjects = function() {
    for (var astr = 0; astr < Game.NUM_ASTEROIDS; astr++) {
      this.allObjects.push(new Asteroids.Asteroid( { pos: this.randomPosition() }, this));
    }
    this.allObjects.push(new Asteroids.Ship({}, this));
  };

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.allObjects.length; i++) {
      for (var j = 0; j < this.allObjects.length; j++) {
        if (i !== j) {
          this.allObjects[i].isCollideWith(this.allObjects[j]);
        }
      }
    }
  };

  Game.prototype.makeStep = function() {
    this.makeMove();
    this.checkCollisions();
  };

  Game.prototype.randomPosition = function() {
    var x = Math.random() * Game.DIM_X;
    var y = Math.random() * Game.DIM_Y;
    return new Asteroids.Utils.Vector(x, y);
  };

  Game.prototype.center = function() {
    return new Asteroids.Utils.Vector(Game.DIM_X / 2, Game.DIM_Y / 2);
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects.forEach(function(aster) {
      aster.draw(ctx);
    });
  };

  Game.prototype.wrap = function(pos) {
    var x, y;
    if (pos.x  < 0) {
       x = Game.DIM_X;
    } else {
       x = pos.x % Game.DIM_X;
    }
    if (pos.y  < 0) {
       y = Game.DIM_Y;
    } else {
       y = pos.y % Game.DIM_Y;
    }
    return new Asteroids.Utils.Vector(x, y);
  };

  Game.prototype.makeMove = function() {
    this.allObjects.forEach(function(aster) {
      aster.move();
    });
  };

  Game.prototype.remove = function(asteroid) {
    var index = this.asteroids.indexOf(asteroid);
    this.asteroids = this.asteroids.slice(0, index)
        .concat(this.asteroids.slice(index + 1));
  };

  Game.prototype.findShip = function() {
    for (var i=0; i<this.allObjects.length; i++) {
      if (this.allObjects[i] instanceof Asteroids.Ship) {
        return this.allObjects[i];
      }
    }
  };

  return Asteroids;
})(window.Asteroids || {});
