"use strict";
// Datatypes Ts
// **** Also we can use multiple types with one class
class Pokemon {
    constructor(name, type, stamina) {
        this.name = name;
        this.type = type;
        this.stamina = stamina;
        this.id = String(Math.random() * 10);
    } // Providing them visibility like public, private or protected, make its syntax smaller
}
const squirtle = new Pokemon('Squirtel', 'Water', 200);
console.log(squirtle);
