function callme(funcalls)
{

    console.log("hi i am first line");
    funcalls();
    console.log("hi i am second line");

}

function newone()
{
    console.log("hi i am third line but i am gonna print in second line");

}

callme(newone);