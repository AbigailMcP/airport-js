describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['down']);
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
});
