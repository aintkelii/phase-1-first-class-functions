// 1. Function that receives a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// 2. Function that returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    console.log("This is a named function!");
  }
  return namedFunction;
}

// 3. Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    console.log("This is an anonymous function!");
  };
}

// Export the functions if needed (for Node.js environments)
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};
