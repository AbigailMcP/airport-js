// 'use strict';

describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe('weather status', function() {
    it('returns true half the time', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(weather.isStormy()).toBeTruthy();
    });
    it('returns false half the time', function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather.isStormy()).toBeFalsy();
    });
  });
});
