class FizzBuzz {
  isDivisibleByThreeAndFive(number) {
    return number % 3 === 0 && number % 5 ===0;
  }
  isDivisibleByThree(number) {
    return number % 3 === 0 
  }
  isDivisibleByFive(number) {
    return number % 5 === 0
  }

  says(number) {
    if (this.isDivisibleByThreeAndFive(number)) {
      return 'Fizzbuzz'
    } 
    else if (this.isDivisibleByThree(number)) {
      return 'Fizz'
   }
   else if (this.isDivisibleByFive(number)) {
      return 'Buzz'
     }
   else {
      return number
   }
  }
}
fizzbuzz = new FizzBuzz;
for (let i = 0; i <= 100; i++) {
 console.log(fizzbuzz.says(i));
}