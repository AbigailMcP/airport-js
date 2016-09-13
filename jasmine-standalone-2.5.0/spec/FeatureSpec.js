// 'use strict';
//

describe('Feature test:', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('plane landing', function() {
    it('lands a plane in a hangar', function() {
      spyOn(Math, 'random').and.returnValue(0);
      airport.land(plane);
      expect(plane.isFlying()).toEqual(false);
    });
  });

  describe('plane take off', function() {
    it('release a plane from the hanger', function() {
      spyOn(Math, 'random').and.returnValue(0);
      airport.land(plane);
      airport.takeOff(plane);
      expect(plane.isFlying()).toEqual(true);
    });
  });
  describe('prevent take off when stormy weather', function() {
    it('raise an error if weather is stormy', function() {
      airport.land(plane);
      spyOn(Math, 'random').and.returnValue(1);
      expect(function(){airport.takeOff(plane);}).toThrowError('bad weather, can not take off');
      expect(airport.hangar()).toContain(plane);
    });
  });
});
