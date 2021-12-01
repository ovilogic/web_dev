function smallestCommons(arr) {
 let ordered = arr.sort(function(a, b){return a - b})
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
  //console.log(coeficients)
  return coeficients;
  }


  let range = [ordered[0]]
  for (let i = ordered[0]; i < ordered[1]; i++) {
    range.push(i + 1)
  }
  console.log('range is    ', range)

let lcm = {}
  for (let i = 0; i < range.length; i++) {
    let primed = primeBreakdown(range[i])
        function factors(arr) {
        let count = 1;
        let factors = {};
        for (let i = 0; i < arr.length; i++) {
          let y = arr.splice(i, 1) // we are ejecting factors one by one from the array
          while (arr.includes(y[0])) {
          arr.splice(i, 1)
            count++
              factors[y] = count;
                }
                factors[y] = count;
                count = 1

                // problem is that count stays up after the first if-statement; it doesn't know that
                // a new array element is being analysed. How can I tell my program that it is moving on to a new element, a new y[0], a new first[i]?
                i = -1
                continue;
        }
        return factors;
        }

        let factorised = factors(primed)
        console.log(factorised)

    for (let k in factorised) {
      if (k in lcm) {
      let difference = factorised[k] - lcm[k]
      if (difference >= 0) {
        lcm[k] = factorised[k];
        }
      }
      else {lcm[k] = factorised[k];
 }
    }
  }
  console.log('LCM ====== ', lcm)

  let lesserCM = 1;
  for (let k in lcm) {
    let num = Number(k)

      lesserCM *= Math.pow(num, lcm[k])

  }
  console.log('lcm ==', lesserCM)
return lesserCM;
}


// now we need to quantify the maximum number of times a factor appears in any of the 2 arrays

/*
let a = factors(primed)
console.log(a, '== a')
let b = factors(second)
console.log(b, ' == b')

// first, it will be an object with each key from both arrays represented and having as its value the biggest value of the two:

for (let k in a) {
  for (let l in b) {

    if (k in b) {
      let difference = a[k] - b[k]
      if (difference >= 0) {
        lcm[k] = a[k];
      }
      else {lcm[k] = b[k]
     }
    }
 else {lcm[k] = a[k];
 }
 if (l in a) {
   let diff = b[l] - a[l];
   if (diff >= 0) {
     lcm[l] = b[l];
   }
   else {lcm[l] = a[l]}
 }
 else {lcm[l] = b[l]}
  }}
  console.log('lcm object is  ', lcm)
  let lesserCM = 1;
  for (let k in lcm) {
    let num = Number(k)

      lesserCM *= Math.pow(num, lcm[k])

  }
  console.log('lcm ==', lesserCM)
return lesserCM;

}
*/

smallestCommons([1, 5]);