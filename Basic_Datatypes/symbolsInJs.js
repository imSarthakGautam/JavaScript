//Javascript uses symbols as an unique and immutabke data types
// to mostly avoid basic naming collisions

//Syntax
const mySymbol = Symbol("Symbol example");

//uniqueness

const mySymbol2 = Symbol("Symbol example");

console.log(symbol===symbol2);
//false because each of them are uniqye

const myObj = {
    [mySymbol]: "Hi, It's Sarthak here"
};//as object property

console.log(myObj[mySymbol]);
//not myObj.mySymbol or myObj.["mySymbol"]

