function palindrome(str) {
  let regex = /\w/g
  let f = str.match(regex)
  let count = 0;
  console.log(f)
  for (let i = 0; i < ((f.length / 2) - 1); i++) {
    console.log(f[i + f.length-1])
   if (f[i] === f[i + f.length - 1]) {
     count++
     if (count = (f.length / 2) - 1) {
       return true;
     }
   }
  }
  return false;
}

palindrome("eye");