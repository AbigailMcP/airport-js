var Javabuzz = function(){

};

Javabuzz.prototype._isDivisibleBy = function (number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByFithteen = function (number) {
  return (this._isDivisibleBy(number, 15));
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return (this._isDivisibleBy(number, 3));
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return (this._isDivisibleBy(number, 5));
};

Javabuzz.prototype.says = function(number) {
  if (this.isDivisibleByFithteen(number)) {
    return "javabuzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "java";
  }
  if (this.isDivisibleByFive(number)) {
    return "buzz";
  }
  return number;
};
