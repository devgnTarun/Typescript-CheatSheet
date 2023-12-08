"use strict";
// Datatypes Ts
const charizad = {
    name: 'Charizad',
    power: 200
};
//Using <value> like this can make this function smart, then using any. As function will know, jo agr aayega parameter vich oohi jayega, and jo jayega. oste method according to it call ho payega.
const showPokemon = (p) => {
    return p;
};
//Basic generix syntax
const myPokemon = showPokemon(charizad);
