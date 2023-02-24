//5.Write a function that would allow you to do this?

function createBase(num) {
    return function(num1) {
      return num + num1;
    }
  }
  
  var addSix = createBase(6);
  console.log(addSix(10)); // 16
  console.log(addSix(21)); // 27



