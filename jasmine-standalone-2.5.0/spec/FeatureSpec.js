describe('Feature test:', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('plane landing', function() {
    it('lands a plane in a hangar', function() {
      airport.land(plane);
      expect(plane.isFlying()).toEqual(false);
    });
  });

  describe('plane take off', function() {
    it('release a plane from the hanger', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(plane.isFlying()).toEqual(true);
    });
  });
});
