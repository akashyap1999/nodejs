// Original function
function greet() {
    console.log("Hello from Your Own Personal AI!");
  }
  
  // Assigning the function to another variable (copying reference)
  let sayHello = greet;
  
  // Both can now call the same function
  greet();      // Output: Hello from Your Own Personal AI!
  sayHello();   // Output: Hello from Your Own Personal AI!
  
  // Changing behavior via reassignment
  sayHello = function() {
    console.log("Hi, I'm a new function now!");
  };
  
  sayHello();   // Output: Hi, I'm a new function now!
  greet();      // Output: Hello from Your Own Personal AI! (original not affected)  