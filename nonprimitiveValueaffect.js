let user1 = { name: "Adesh" };
let user2 = user1;  // user2 points to the same object as user1

user2.name = "Donia"; // updating name via user2

console.log("user1:", user1.name);  // Donia
console.log("user2:", user2.name);  // Donia
