console.log("--EXCERCISE 1: VARIABLES AND OPERATORS");

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma
// de ambos números en una 3er variable.

console.log("-Excercise 1.a:");
var number1, number2, addition1;

number1 = 2;
number2 = 10;
addition1 = number1 + number2;
console.log(addition1);

//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log("-Excercise 1.b:");
var sweet1, sweet2, sentence1;

sweet1 = "candies";
sweet2 = "chocolate";
sentence1 = "Pablo prefer eating " + sweet1 + " than " + sweet2;

console.log(sentence1);

// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
// guardando el resultado de la suma en una 3er variable (utilizar length).

console.log("-Excercise 1.c:");
var fruit1, fruit2, letters;

fruit1 = "banana";
fruit2 = "apple";
letters = fruit1.length + fruit2.length;

console.log(
  "banana has a lenght of " +
    fruit1.length +
    " letters, and apple " +
    fruit2.length
);
console.log("the lenght of both words is " + letters);
