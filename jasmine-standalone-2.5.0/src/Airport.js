Airport = function() {
  this._hangar = [];
};

Airport.prototype = {
  hangar: function() {
    return this._hangar;
  },
  land: function(plane) {
    plane.down();
    this._hangar.push(plane);
  },
  takeOff: function(plane) {
    plane.up();
    this._hangar.pop(plane);
  },
};
