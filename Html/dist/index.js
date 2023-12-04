"use strict";
// Datatypes Ts
const objBoy = {
    name: 'John',
    age: 15,
    gender: 'Lgtv'
};
const objGirls = {
    name: 'Annie',
    age: 17,
    func: (a, b) => {
        console.log(a + b);
    },
};
//Using function inside object
const objIgtv = {
    name: 'Sammy',
    age: 12,
    func: (a, b) => {
        console.log(a + b);
    },
};
objIgtv.func(10, 10);
