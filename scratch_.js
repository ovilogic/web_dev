function smallestCommons(arr) {
 let order = arr.sort(function(a, b){return a - b})
  // I need to fucking take apart each number as a product of prime numbers;
  function primeBreakdown(x) { // function to determine the prime factors for x
  let coeficients = [1]
  for (let i = 2; i <= x; i++) {
    if(x % i == 0) {
      coeficients.push(i); // i is officially a coeficient
      x = x / i; // moving on to an x without the factor above
      i = 1; // also restarting the for-loop;
      continue;
    }
  }
  console.log(coeficients)
  return coeficients;
  }
  let first = primeBreakdown(arr[0])
  let second = primeBreakdown(arr[1])


// now we need to quantify the maximum number of times a factor appears in any of the 2 arrays
let count = 1;
let factors = {};
 for (let i = 0; i < first.length; i++) {
   let y = first.splice(i, 1) // we are ejecting factors one by one from the array

   if (first.includes(y[0])) {
     count++
      factors[y] = count
        }
        i = -1
        continue;
 }
 console.log(factors) // what we have is only the fa
}

smallestCommons([72,96]);