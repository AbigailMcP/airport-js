Plane = function() {
  this._isFlying = true;
};

Plane.prototype = {
  isFlying: function() {
    return this._isFlying;
  }
};
