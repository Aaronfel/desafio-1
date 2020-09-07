// Tipos de declaración de funciones

// la forma mas simple
function add(a,b) {
    return a + b;
} 

// asignando a una variable
const square = function(x) {
    return x*x;
}

square(5);

// ES6 una nueva forma de declarar funciones, funciones flecha arrow function

const getSum = (a,b) => {
    return a + b;
};

const getSum2 = (a,b) => a + b;

// () => {instrucciones}
// pametro => expresion
// (paramtro1, paramtro2, ...) => { return expresion}

// () => ({objeto})
// () => { return {objecto}}







