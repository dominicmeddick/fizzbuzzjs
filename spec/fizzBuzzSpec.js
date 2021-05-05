describe('Fizzbuzz',function() {

  var fizzbuzz; 
  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  })

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
    it('NOT divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
    it('divisible by 5', function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('NOT divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
    });
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });
    it('NOT divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByThreeAndFive(5)).toBe(false);
    });
  });
});