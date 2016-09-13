// 'use strict';

Weather = function() {
  this._STORMCHANCE = 0.5;
};

Weather.prototype = {
  isStormy: function() {
      return (Math.random() > this._STORMCHANCE);
  }
};
