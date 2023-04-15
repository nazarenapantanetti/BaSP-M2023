console.log("--EXCERCISE 1: VARIABLES AND OPERATORS");

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma
// de ambos números en una 3er variable.

console.log("-Excercise 1.a:");
var numberOne, numberTwo, addition;

numberOne = 2;
numberTwo = 10;
addition = numberOne + numberTwo;
console.log(addition);

//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log("-Excercise 1.b:");
var wordOne, wordTwo, sentence;

wordOne = "candies";
wordTwo = "chocolate";
sentence = "Pablo prefer eating " + wordOne + " than " + wordTwo;

console.log(sentence);

// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
// guardando el resultado de la suma en una 3er variable (utilizar length).

console.log("-Excercise 1.c:");
var fruitOne, fruitTwo, letters;

fruitOne = "banana";
fruitTwo = "apple";
letters = fruitOne.length + fruitTwo.length;

console.log(
  "banana has a lenght of " +
    fruitOne.length +
    " letters, and apple " +
    fruitTwo.length
);
console.log("the lenght of both words is " + letters);
