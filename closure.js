const Person = function(firstAndLast) {
  // Only change code below this line
  var strArr = firstAndLast

  this.getFirstName = function() {
    let x = strArr.split(' ')
    //console.log(x[0])
    return x[0];
  }

  this.getLastName = function() {
    let x = strArr.split(' ')
    //console.log(x[1])
    return x[1];
  }
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    let x = this.getFirstName() + ' ' + this.getLastName()
    //console.log(x)
    return x;
  };
  this.setFirstName = function(first) {
    let x = strArr.split(' ')
    x[0] = first
    console.log(x[0])
    return x[0];
  }
  this.setLastName = function(last) {
    let x = strArr.split(' ')
    x[1] = last
    console.log(x[1])
    return x[1];
  }
 this.setFullName = function(firstAndLast) {

    return setFirstName() + ' ' + setLastName();
 }
  return strArr;
};

const bob = new Person('Bob Ross');
bob.getFirstName()