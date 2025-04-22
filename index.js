// === REASSIGNMENT ===
// let job = "Developer";
// console.log("Before reassignment:", job);

// job = "Node.js Expert";  // ✅ Reassignment allowed with let
// console.log("After reassignment:", job);

// === REDECLARATION ===
// var city = "Delhi";
// var city = "Mumbai";     // ✅ Redeclaration allowed with var
// console.log("Var redeclared:", city);

// let country = "India";
// let country = "Bharat"; // ❌ Uncommenting this will throw an error
// console.log("Let variable:", country);

let pi = 3.14;
pi = 3.45;
// const pi = 22/7;        // ❌ Redeclaration not allowed
console.log("Const value:", pi);
