describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('plane landing', function() {
    it('hangar is empty', function() {
      expect(airport.hangar()).toEqual([]);
    });
    it('instructes a plane to land', function() {
      airport.land("plane");
      expect(airport.hangar()).toContain("plane");
    });
  });
});
