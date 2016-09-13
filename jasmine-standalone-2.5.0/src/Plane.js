Plane = function() {
  this._isFlying = true;
};

Plane.prototype = {
  isFlying: function() {
    return this._isFlying;
  },
  down: function() {
    this._isFlying = false;
  },
  up: function() {
    this._isFlying = true;
  }
};
