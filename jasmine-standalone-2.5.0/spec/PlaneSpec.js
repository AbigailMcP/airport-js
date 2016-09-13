describe('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('plane status', function() {
    it('starts in the air', function() {
      expect(plane.isFlying()).toEqual(true);
    });
  });
});
