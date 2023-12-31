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

// const number : number[]= [10, 10, 10 ]; //Type number array, same in others
// const union : string[] | number[] = [10, 10, 10]; //Can be both string or number
// const checkByself = [10, 10, 10 , 'string' , false]; //Can be string, number an boolean

// const syntaxChange: Array<string> = []; //Type string array
// const syntaxChange2: Array<number | string> = []; //Can be both

// // further for syntax 

// const syntaxIq100 : Array<number> = new Array(30)

// // topple, Defining per index type of array
// const array : [number , number,  number  , string] = [3, 4, 5 , 'String'];

// ----------------> Working with Objects in typescript <----------------------

// type obj1 = { //-------------------> Using type is okay, but interface helps to extend and copy other object fields
//     name: string,
//     age: number,
//     gender: string
// }

// where as if i am using interface here, i can access another interface too, must check Synatax of both =

// interface obj2 {
//     name: string,
//     age: number,
//     gender?: string //------------> (?) question mark is used to make it optional
// }

// type FunctionType = (a: number, b: number) => void;
// interface obj3 extends obj2 { //-------------Here i can use fields of obj2 
//     func:  FunctionType;
// }

// const objBoy: obj1 = {
//     name: 'John',
//     age: 15,
//     gender: 'Lgtv'
// }

// const objGirls: obj3 = {
//     name: 'Annie',
//     age: 17,
//     func: (a, b) => {
//         console.log(a + b);
//    },
// }

// //Using function inside object
// const objIgtv: obj3 = {
//     name: 'Sammy',
//     age: 12,
//     func: (a, b) => {
//          console.log(a + b);
//     },
// }

// objIgtv.func(10, 10);


// ----------------> Working with Funtions with types interface and parameter in typescript <----------------------

// you can create this simple type for using it in function and use proper params with there type for code wellness and deciding what it will return according to us!
// type FunPlus = (a :number , b:number , c? : number) => number;  // ? is for making it  optional

// const plusThis:FunPlus = (a, b, c = 20) => { // (c = 20) is default value so, its not giving error, c must be probably undefined
//     return a + b * c
// }
// plusThis(2, 3, 6)

// ----------> Syntax without arrow function

// function plusThis(a: number, b: number = 20): number {
//     return a + b;
// }

// plusThis(3, 9);

// type PlusType = (a: number, b?: number) => number;

// const plus: PlusType = function plusThis(a, b = 20): number {
//     return a + b;
// }

// Function dealing with array in parameters

// type ArrayFun = (...a: number[]) => number;

// const arrayPlus: ArrayFun = (...a:number[]) => {//Using spread operator and square brackets, let typescript know what is this
//     return a.length;   
// }

// arrayPlus(40, 50, 60)


// ----------------> Working with Funtions with objects * main * <----------------------

// whenever creating ecommerce create interface too with as we create schema 

// interface Transaction {
//     id: string,
//     by: string,
//     to: string,  
//     hash: number
// };

// //Use its interface which own double checks error
// const addTransaction = (trasaction: Transaction) => {
//     // trasaction.id === '456789o'; // You can edit this , without readonly
//     return console.log(trasaction);
// }
// //Creating trasaction, using interface, so, i can't miss anything
// const _trasaction: Transaction = {
//     id: '1234567890',
//     by: 'Tarun',
//     to: "idk",
//     hash: 987656789098765
// };

// addTransaction(_trasaction);


// ---------> Type never in typescript

// const throwError = () => {
//     throw new Error(); // In this case , it will say function type is never because of throw keyword and also we are throwing err
// }


// ----------------> Working with Classes in typescript <----------------------

// class Pokemon {
//     name; //There are 3 keywords in typescript which is not in javascript (Public - By deafult, Private - Can't access object data outside class, Protected - Can't access data outside class , except subclass)
//     protected type;
//     stamina;
//     readonly id: string;// This id is immutable can't be changed, as it is readonly
//     constructor(name: string, type: string, stamina: number) {
//         this.name = name;
//         this.type = type;
//         this.stamina = stamina;
//         this.id = String(Math.random() * 100);
//     }
//     //In case we setted it private ... So we can access it like this
//     getStamina = () => { return this.stamina };
// }

// class PokemonGrowth extends Pokemon {
//     attackRate: number;
//     constructor(name: string, type: string, stamina: number, attackRate: number) {
//         super(name, type, stamina);
//         this.attackRate = attackRate;
//     }

//     // Get and set function used in class
//     get getType(): string {
//         return this.type;
//     }
//     set setStamina(i:number) {
//         this.stamina = i;
//     }
// }

// const pikachu = new Pokemon('Pikachu', 'Electric', 90);
// const raichu = new PokemonGrowth('Raichu', 'Electric', 100, 100)
// console.log(pikachu.getStamina())
// console.log(pikachu);
// console.log(raichu);
// raichu.setStamina = 120; //This is called after one raichu console, to check that its fine or not and also, not using () to call, sending value in = as paramter
// console.log(raichu);
// console.log(raichu.getType); // While using get like above in class. We don't need to use () this to call function;


// Using class with interface 

// interface PokemonType {
//     name: string;
//     type: string;
//     stamina: number;
//     id: string;
// }
// // **** Also we can use multiple types with one class
// class Pokemon implements PokemonType { //Using implement keyword to attach type with it 
//     id : string = String(Math.random() * 10);
//     constructor(public name : string, public type : string, public stamina : number ) { } // Providing them visibility like public, private or protected, make its syntax smaller
// }
// const squirtle = new Pokemon('Squirtel' , 'Water' , 200);
// console.log(squirtle);

// ----------------> Working with Type Assertion in typescript <---------------------- Usefull while submitting form in react/nextjs and in more cases, in layout.tsx and many

// const btn = document.getElementById('link')! ; // Using this !null sign to change its property htmlelement from null
// const btn =<HTMLButtonElement> document.getElementById('link') ; // Using specific html element name in this syntax
// const btn =document.getElementById('link') as HTMLElement ; // Another clear syntax of using it
// btn.oncancel // If does not by default that it is achor and HTMLELEMENT - It know that it is null -- so do above thing

// Working with forms 

// const form = document.querySelector('#writable') as HTMLFormElement;
// const valueTxt = <HTMLInputElement>document.querySelector('form > input');
// let writableString = document.getElementById('writeOn')!;


// form.onsubmit = (e) => {
//     e.preventDefault();
//     const value = String(valueTxt.value);
//     writableString.textContent = value;
//     //Editing dom with form
// }

//Understanding more in deep 

// interface Pokemon {
//     name: string,
//     power: number,
//     type: string
// }

// const pikachu: Pokemon = {
//     name: 'Pikachu',
//     power: 200,
//     type: " Elcetric"
// }

// function getPikachuKeyData(key: keyof Pokemon) { // Key of keyword helps to fetch any data inside of object with using interface
//     console.log(pikachu[key]);
// }
// getPikachuKeyData('name')

// // But what if we are using outside library

// // then refer to your object which you are creating

// const key = "name";
// pikachu[key as keyof typeof pikachu]; // Key that is name as, key of, mtlb ki key hoyegi, kiski? refrence to object of pikachu!


// ----------------> Working with Type utility in typescript <---------------------- 

// Read documentation for better understanding this

// ----------------> Working with Generics in typescript <---------------------- 

interface Pokemon {
    name: string,
    power: number
}

const charizad: Pokemon = {
    name: 'Charizad',
    power: 200
}
//Using <value> like this can make this function smart, then using any. As function will know, jo agr aayega parameter vich oohi jayega, and jo jayega. oste method according to it call ho payega.
const showPokemon = <T>(p: T): T => {
    return p;
}
//Basic generix syntax
const myPokemon = showPokemon<Pokemon>(charizad);