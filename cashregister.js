function checkCashRegister(price, cash, cid) {
let change = cash - price
change = change.toFixed(2)
//console.log(change)
let denom = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
let pieces = []
let cidObj = {}
let result = {
  status: "OPEN",
  change: []
}
// constructing the array that holds how many pieces of each denomination there are:
for (let i = 0; i < cid.length; i++) {
  let x = Math.round(cid[i][1] / denom[i])
  pieces.push(x)
  // Let's have an object too. Who knows, might serve better.
  cidObj[cid[i][0]] = x;
}
console.log('pieces', pieces)
//console.log('denom', denom)

for (let i = denom.length - 1; i >= 0; i--) {
  //console.log(change, denom[i], pieces[i])
  let x = change / denom[i]
  //console.log(change / denom[i], 'denom[i] =', denom[i], change / denom[i] <= pieces[i])

  if (x > 0 && Number.isInteger(x) && change / denom[i] <= pieces[i]) {
    let changeDenom = []
    //console.log(change / denom[i], pieces[i], change)
    changeDenom.push(cid[i][0], Number(change))
    result.change.push(changeDenom)
    change = 0;
    //console.log(change, ' ====== change')
  }
  else if (change >= denom[i]) {
    //console.log('else if bit', change)
    let count = 0
    //console.log('entering the while', change, 'denom -', denom[i], pieces[i])
    while (change >= denom[i] && pieces[i] > 0) {
      //console.log('we are in while')
    change -= denom[i]
    pieces[i]--
    change = change.toFixed(2)
    count++
    }
    let changeDenom = []
    //console.log(count)
    if (count > 0) {
      let a = count * denom[i]

    changeDenom.push(cid[i][0], a)
    //console.log(changeDenom)
    result.change.push(changeDenom)
    //console.log(result)
    }
  }
}

if (change != 0) {
  result.status = "INSUFFICIENT_FUNDS";
  result.change = []
}
else if (result.change.length != 0 && change == 0) {
  result.change = cid;
}
console.log(result)
console.log(change)
return result;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
