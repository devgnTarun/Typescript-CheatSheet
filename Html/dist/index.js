"use strict";
// Datatypes Ts
const pikachu = {
    name: 'Pikachu',
    power: 200,
    type: " Elcetric"
};
function getPikachuKeyData(key) {
    console.log(pikachu[key]);
}
getPikachuKeyData('name');
// But what if we are using outside library
// then refer to your object which you are creating
const key = "name";
pikachu[key]; // Key that is name as, key of, mtlb ki key hoyegi, kiski? refrence to object of pikachu!
