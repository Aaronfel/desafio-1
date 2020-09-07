const miarray = [1,2,3,4,5];

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  let primerInventor_ = inventors[0];
  let ultimoInvento = inventors[inventors.length-1];

  console.log(ultimoInvento.first);

  // iterar arrays en ES6+
  for (let index = 0; index < inventors.length; index++) {
      const element = inventors[index];
      console.log(element);
  }

  for (const inventor of inventors) {
      console.log(inventor);
      //inventors.push(miInventor);
  }

  // agregar elementos al final de un array
  let miInventor = {
      first: 'Pablo', last: 'Perez', year: 1976
  };

  // agregar al final
  inventors.push(miInventor);

  // sacar del final
  let ultimoInventor = inventors.pop();

  // sacar del prinncipio
  let primerInventor = inventors.shift();

  //agregar al principio
  inventors.unshift(miInventor);

  // realizar una copia
  let inventors2 = inventors.slice();

  // ordenamiento
  //inventors.sort();

  // Ejercicio, quiero ordenar los inventores por año de nacimiento

  let nombres = ['Pablo', 'Maria', 'Juana'];
  nombres.sort();
  console.log(nombres);

  let numeros = [34,12,1,100];
  numeros.sort();
  console.log(numeros);
  
// Ejercicio 2
// Dado un array de numeros enteros positivos, determinar el 
// segundo mayor
// input [3,4,6,6,5,5] output = 5

// TDD

function segundoMayor(array){
    array.sort();
    return array[array.length - 2];
}

console.log(segundoMayor([3,4,6,6,5,5]) === 5);
console.log(segundoMayor([1,2,3,4,5,6]) === 5);
console.log(segundoMayor([0,4,5]) === 4);



