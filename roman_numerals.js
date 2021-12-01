function convertToRoman(num) {
  num = num.toString()
  let numArr = num.split('')
  //console.log(numArr)
  let numberLength = numArr.length
  //console.log(numberLength)
  let roman = {}
  let one = 'I'
  let five = 'V'
  let ten = 'X'
  let fifty = 'L'
  let hundred = 'C'
  let fiveHundred = 'D'
  let thousand = 'M'

  let forLimit = Math.pow(10, numberLength);
  //console.log(forLimit)

  // loop for numbers from 1 to 10:

  function onesFivesTens(one, five, ten) {

  for (let i = 1; i <= forLimit; i++) {
    //console.log(i)
    if (i < 4) {
      //console.log('i in if', i)
      roman[i] = one.repeat(i)
  }
  else if (i <= 5) {
    roman[i] = one.repeat(5-i).concat(five)
  }
  else if (i > 5 && i < 9) {
    roman[i] = five.concat(one.repeat(i-5))
  }
  else if (i <= 10) {
    roman[i] = one.repeat(10 - i).concat(ten)
  }
  }
  }

//for (let i = 1; i < numberLength; i++) {

 if (numArr[numberLength - 1] > 0) {
   //console.log(' in the first if')
    onesFivesTens(one, five, ten)
    numArr[numberLength - 1] = roman[numArr[numberLength -1]]
  }
  if (numArr[numberLength - 2] > 0) {
    onesFivesTens(one = 'X', five = 'L', ten = 'C')
    numArr[numberLength - 2] = roman[numArr[numberLength - 2]]
  }
  if (numArr[numberLength - 3] > 0) {
    onesFivesTens(one = 'C', five = 'D', ten = 'M' )
    //console.log(roman)
    numArr[numberLength - 3] = roman[numArr[numberLength - 3]]
  }
  if (numArr[numberLength - 4] > 0) {
    onesFivesTens(one = 'M', five = thousand.repeat(5), ten = thousand.repeat(10))
    numArr[numberLength - 4] = roman[numArr[numberLength - 4]]
  }
//}
/*
  for (let x in roman) {
    if (numArr[numberLength - 1] == x) {
      console.log(roman[x])
      return roman[x];
      */

  //console.log(numArr)
  let x = numArr.join('')
  console.log(x)
  return x;

    }



convertToRoman(3689);