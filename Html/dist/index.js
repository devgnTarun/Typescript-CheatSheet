"use strict";
// Datatypes Ts
// let name = 'John'; Name is shown already declared because its inside the window object , which you can check in javascript
// let naam:string = 'John'; Easy formula
// let naam = <string> 'John'; Another syntax to get it now , what is that
// let naam:any = 'John'; 
// naam = 9; ----------------> In this case Typescript knows its any, so, it can be changed from string to number type
// let naam:string = "John";
// const nameLength = naam.length; ---> Using ts leads to more understandable code and better, which reccomends more method on its type
// Also it have union types --------------------------
// let naam:string | number = 'John'
// let naam:string | number = 999;
// let naam:string | number = false; ---------> But it can't be undefined, null or boolean 
// console.log(naam);
// ----------------> Working with function in typescript <----------------------
//With types 
// type Multiply = (a: number, b: number) => number; //------------> This is function refrence created using type
// // --Synatax can be used in more functions and also reliable
// const multiply: Multiply = (a, b) => { //-------->This will take 2 number as paramterer a-b;
//     //----------------------------------> But we should tell if it is , number , string, booleon or anything
//     // return console.log(a * b);
//     return a * b; //-------------------> Also we can fullfil its result , by assigning what to return like in syntax const multiply = (a:number , b:number) : number;
// }
// multiply(39, 988);
// ----------------> Working with arrays in typescript <----------------------
const number = [10, 10, 10]; //Type number array, same in others
const union = [10, 10, 10]; //Can be both string or number
const checkByself = [10, 10, 10, 'string', false]; //Can be string, number an boolean
const syntaxChange = []; //Type string array
const syntaxChange2 = []; //Can be both
// further for syntax 
const syntaxIq100 = new Array(30);
// topple, Defining per index type of array
const array = [3, 4, 5, 'String'];
