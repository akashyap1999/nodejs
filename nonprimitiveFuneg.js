function eg1 () {
    console.log("hi, i am first ai");
}

let b = eg1;

eg1();
b();

b = function() {
    console.log("Hi, I'm a new AI now!");
  };
eg1();
b();