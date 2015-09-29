window.Asteroids = (function(Asteroids) {
  Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.bindKeyHandlers();
  };

  Asteroids.GameView.prototype.start = function() {
    var that = this;
    setInterval(function() {
      that.game.makeStep();
      that.game.draw(that.ctx);
    }, 20);
  };

  Asteroids.GameView.prototype.bindKeyHandlers = function() {
    var that = this;
    key('up', function() {
      var impulse = new Asteroids.Utils.Vector(0, -5);
      that.game.findShip().power(impulse);
    } );
    key('down', function() {
      var impulse = new Asteroids.Utils.Vector(0, 5);
      that.game.findShip().power(impulse);
    } );
    key('left', function() {
      var impulse = new Asteroids.Utils.Vector(-5,0);
      that.game.findShip().power(impulse);
    } );

    key('right', function() {
      var impulse = new Asteroids.Utils.Vector(5, 0);
      that.game.findShip().power(impulse);
    } );
  };

  return Asteroids;
})(window.Asteroids || {});
