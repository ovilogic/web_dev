function addTogether() {
  let  sum = 0;
  let [first, second] = arguments;

  //console.log(arguments, first, second)
  //console.log(second)
  if (second === undefined) {


    function oneArg(second) {

        //console.log(second)
        sum = second + first;

        return sum;

    }
        return oneArg;
      }
    else {
      if (typeof first == 'number' && typeof second == 'number') {

      return first + second;}
      else {return undefined;}
    }
}
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")


addTogether(2,3);
addTogether(23, 30);
addTogether(5)(7)