// let vs var

// let es la forma mas actual de declar variables ES6
// var queda limitado para legacy

let x = 1;
let y = 5;
if(x === 1) {
    let x = 2; // es otra variable
    console.log('x dentro del bloque ' + x);    
}
//var x = 10;
console.log('x fuera del bloque ' + x);

const key = 'abc123';

// const por defecto
// declaro con let nunca con var

const person = {
    name : 'wes',
    age: 28
}

person.age = 44;

console.log(person);

const wez = Object.freeze(person);
wez.name = "Juan";
console.log(wez);


