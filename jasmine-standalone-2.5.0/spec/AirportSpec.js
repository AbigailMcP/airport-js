describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['down','up']);
  });

  describe('plane landing', function() {
    it('hangar is empty', function() {
      expect(airport.hangar()).toEqual([]);
    });
    it('instructes a plane to land', function() {
      airport.land(plane);
      expect(airport.hangar()).toContain(plane);
    });
    it('calls plane down', function() {
      airport.land(plane);
      expect(plane.down).toHaveBeenCalled();
    });
  });

  describe('plane take off', function() {
    it('removes a plane from the hangar', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.hangar()).not.toContain(plane);
    });
  });
});
