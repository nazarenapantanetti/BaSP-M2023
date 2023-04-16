console.log('--EXCERCISE 3: ARRAYS');

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
//"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('-Excercise 3.a:');
var month;

month = [
  'January',
  'Febrary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

console.log(month[4]);
console.log(month[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('-Excercise 3.b:');
var month;

month = [
  'January',
  'Febrary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
month.sort();
console.log(month);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('-Excercise 3.c:');
var month;

month = [
  'January',
  'Febrary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

month.unshift('easter');
month.push('halloween');
console.log(month);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('-Excercise 3.d:');
var month;

month = [
  'January',
  'Febrary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

month.shift();
month.pop();
console.log(month);

// e. Invertir el orden del array (utilizar reverse).

console.log('-Excercise 3.e:');
var month;

month = [
  'January',
  'Febrary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

console.log(month.reverse());

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión
// - (utilizar join).

console.log('-Excercise 3.f:');
var month;

month = [
  'January',
  'Febrary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

console.log(month.join('-'));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('-Excercise 3.g:');
var month;

month = [
  'January',
  'Febrary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

console.log(month.slice(4, 11));
