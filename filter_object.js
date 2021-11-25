const match = collection.filter(x => {
  let key = Object.keys(source)[0];
  let value = source[key]
  let xkeys = Object.keys(x)
  for ( let j = 0; j < )
  for ( let i = 0; i < xkeys.length; i++) {
    if (value == x[xkeys[i]] && key == xkeys[i]) {
      return x;
    }
  }
})

arr.push(...match)
console.log(arr)