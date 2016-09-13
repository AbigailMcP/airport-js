Airport = function() {
  this._hangar = [];
};

Airport.prototype = {
  hangar: function() {
    return this._hangar;
  },
  land: function(plane) {
    this._hangar.push(plane);
  },
};
