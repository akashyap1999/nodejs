var a = 200;
 function scopefun() {
var bingo = 15;
var bingo2 = 10;
if(true)
    {
        console.log(bingo+bingo2);

    }
    console.log("error not accessable");

 }
 scopefun()
 console.log(bingo2);
