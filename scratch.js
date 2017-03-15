
console.log('test');

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
  if (Math.floor(num)-num === 0) {
    console.log('true');
    return true;

  }
  else {
    console.log('false');
    return false;

  }
}

isInteger(8);
