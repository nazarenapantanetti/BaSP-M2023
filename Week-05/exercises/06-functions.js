console.log('--EXCERCISE 6: FUNCTIONS');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función
// y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Excercise 6.a:');
var value1 = 2;
var value2 = 10;
var total;

function add(value1, value2) {
  return value1 + value2;
}

total = add(value1, value2);
console.log(total);

// b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los
// parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros
// tiene error y retornar el valor NaN como resultado.

console.log('-Excercise 6.b:');

var value1 = 'a';
var value2 = 10;
var total;

function add(value1, value2) {
  if (typeof value1 === 'number' && typeof value2 === 'number') {
    return value1 + value2;
  } else {
    alert('one value is wrong');
    return NaN;
  }
}
total = add(value1, value2);
console.log(total);

// c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva
// verdadero si es un número entero.

console.log('-Excercise 6.c:');
var num = 4.5;

function validateInteger(num) {
  return num % 1 === 0;
}
console.log(validateInteger(num));

// d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función
//el ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar
//un alert con el error y retornar el número convertido a entero (redondeado).

console.log('-Excercise 6.d:');

var value1 = 6.5;
var value2 = 10;
var total;

function newAdd(value1, value2) {
  if (validateInteger(value1, value2) === true) {
    return value1 + value2;
  } else {
    alert('wrong');
    return Math.round(value1, value2 !== true);
  }
}
total = newAdd(value1, value2);
console.log(total);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva
// función probando que todo siga funcionando igual que en el apartado anterior.

console.log('-Excercise 6.e:');
var value = 3.5;

function validateOrRound(value) {
  if (value % 1 === 0) {
    return true;
  } else {
    alert('number round');
    return Math.round(value);
  }
}
console.log(validateOrRound(value));

var anotherValue = 8.5;

function callFunction(anotherValue) {
  return validateOrRound(anotherValue);
}
console.log(callFunction(anotherValue));
