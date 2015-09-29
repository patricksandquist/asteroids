window.Asteroids = (function(Asteroids) {
  "use strict";
  Asteroids.Utils = Asteroids.Utils || {};

  Asteroids.Utils.Vector = function(x, y) {
    this.x = x;
    this.y = y;
  };
  var Vector = Asteroids.Utils.Vector;

  Vector.randomVec = function(length) {
    var angle = Math.random() * 2 * Math.PI;
    var x = Math.cos(angle) * length;
    var y = Math.sin(angle) * length;
    return new Vector(x, y);
  };

  Vector.prototype.add = function(otherVector) {
    return new Vector(this.x + otherVector.x, this.y + otherVector.y);
  };

  Vector.prototype.magnitude = function() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  };

  Vector.prototype.distance = function(otherVector) {
    var xDiff = this.x-otherVector.x;
    var yDiff = this.y-otherVector.y;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  };

  Asteroids.Utils.inherits = function(childClass, parentClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.constructor = childClass;
  };

  return Asteroids;
})(window.Asteroids || {});
