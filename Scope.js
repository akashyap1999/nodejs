// Global Scope
var a = 10;

function testScope() {
  var b = 20;        // Function Scope
  if (true) {
    let c = 30;      // Block Scope
    const d = 40;    // Block Scope
    console.log("Inside block:", c, d);
  }
  // console.log(c, d); // ❌ Error: block-scoped variables not accessible here
  console.log("Inside function:", b);
}

testScope();
console.log("Global:", a);
