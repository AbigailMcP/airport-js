describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
  describe('knows when a number is not', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(4)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('knows when a number is not', function() {
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(4)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFithteen(15)).toBe(true);
    });
  });

  describe('knows when a number is not', function() {
    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFithteen(16)).toBe(false);
    });
  });


  describe('when playing says', function() {
    it('java when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual('java');
    });
  });

  describe('when playing says', function() {
    it('buzz when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual('buzz');
    });
  });

  describe('when playing says', function() {
    it('javabuzz when a number is divisible by 15', function() {
      expect(javabuzz.says(15)).toEqual('javabuzz');
    });
  });

  describe('when playing says', function() {
    it('number when a number is not divisible by 3 or 5', function() {
      expect(javabuzz.says(26)).toEqual(26);
    });
  });

});
