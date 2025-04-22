// =======================
// JavaScript Data Types
// =======================

// ✅ PRIMITIVE TYPES
// These hold simple, fixed values (like numbers, strings, etc.)
// 👉 Each variable directly contains the value (copied by value)
// 👉 Changing one variable does NOT affect others

let name = "Adesh";              // String
let age = 25;                    // Number
let isStudent = true;           // Boolean
let nothing = null;             // Null
let notAssigned;                // Undefined
let bigValue = 9007199254740991n; // BigInt
let unique = Symbol("id");      // Symbol

console.log("=== Primitive Types ===");
console.log("name:", name, "| type:", typeof name);
console.log("age:", age, "| type:", typeof age);
console.log("isStudent:", isStudent, "| type:", typeof isStudent);
console.log("nothing:", nothing, "| type:", typeof nothing);
console.log("notAssigned:", notAssigned, "| type:", typeof notAssigned);
console.log("bigValue:", bigValue, "| type:", typeof bigValue);
console.log("unique:", unique.toString(), "| type:", typeof unique);

console.log("\n");

// ✅ NON-PRIMITIVE TYPES
// These hold collections or more complex data (arrays, objects, functions)
// 👉 Variables store a reference (a pointer) to the actual value in memory
// 👉 If two variables reference the same object/array, changing one affects the other

let hobbies = ["coding", "reading", "gaming"];   // Array
let person = { name: "Donia", role: "Frontend" }; // Object
let greet = function() { return "Hello Shree AI!"; }; // Function

console.log("=== Non-Primitive Types ===");
console.log("hobbies:", hobbies, "| type:", typeof hobbies);
console.log("person:", person, "| type:", typeof person);
console.log("greet():", greet(), "| type:", typeof greet);

console.log("\n");

// ✅ Key Difference Recap
console.log("=== Primitive vs Non-Primitive ===");
console.log("👉 Primitive: Stores actual value (copied by value)");
console.log("👉 Non-Primitive: Stores reference (copied by reference)");
console.log("👉 Primitive changes don’t affect others");
console.log("👉 Non-Primitive changes can reflect across references");
