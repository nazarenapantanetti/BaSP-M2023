console.log("--EXCERCISE 2: STRINGS");

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
// en mayúscula (utilizar toUpperCase).

console.log("-Excercise 2.a:");
var string1;
string1 = "butterfly wings";
console.log(string1.toUpperCase());

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Excercise 2.b:");
var string2, string3;
string2 = "hello my name is Maria";
string3 = string2.substr(0, 5);
console.log(string3);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
// los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Excercise 2.c:");
var string4, string5;
string4 = "hello my name is Pablo";
string5 = string4.substr(-3, 3);
console.log(string5);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva
//variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log("-Excercise 2.d:");
var string6, string7, stringUp1, stringLow1;

string6 = "hello my name is John";
stringUp1 = string6.substr(0, 1).toUpperCase();
stringLow1 = string6.substr(1).toLowerCase();
string7 = stringUp1 + stringLow1;
console.log(string7);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log("-Excercise 2.e:");
var string8, string9;

string8 = "hello my name is Peter";
string9 = string8.indexOf(" ", 0);
console.log(string9);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio
//entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga
//la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf,
//substring, toUpperCase, toLowerCase y el operador +).

console.log("-Excercise 2.f:");
var string10, string11, stringUp2, stringLow2;

string10 = "hippopotamus and rhinoceroses";
stringUp2 =
  string10.substr(0, 1) + string10.indexOf(" ", 2).substr(0, 1).toUpperCase();
stringLow2 = string10.substr(1).toLowerCase();
