// 1.OLD WAY OF NAMEDFUNCTIONS
function square(x) {
  return x * x;
}

// 2.OLD WAY OF ANONYMOUS FUNCTIONS
// var square = function (x) {
//   return x * x;
// }

// square(10);


// 3.NEW WAY WITH ES6 : the one we write!
  // with parameter
    const square = (x) => { // don't need the parenthesis around the parameter if you only have one parameter
      return x * x
    }
  // invoking/calling/executing the function:
  console.log(square(10));

  // without parameter
    const sayHi = () => {
      return 'hello'
    }

  // invoking/calling/executing the function:
  console.log(sayhi());


// INLINE way of writing functions, with implicit return
const square = x => x * x; // without parenthesis for the parameter
const square = (x) => x * x; // with parenthesis

