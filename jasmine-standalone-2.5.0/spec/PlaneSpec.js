describe('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('plane status', function() {
    it('starts in the air', function() {
      expect(plane.isFlying()).toEqual(true);
    });
    it('changes to false when plane calls down', function() {
      plane.down();
      expect(plane.isFlying()).toEqual(false);
    });
    it('changes to true when plane calls up', function() {
      plane.up();
      expect(plane.isFlying()).toEqual(true);
    });
  });
});
