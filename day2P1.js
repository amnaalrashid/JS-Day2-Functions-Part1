/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName() {
  console.log("Amnah");
}

//printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birth) {
  let age = 2024 - birth;
  console.log(`your age is  ${age}`);
}

//printAge(1995);

/**
 * Task 2:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */

function printAgeAndName(name, birth) {
  let age = 2024 - birth;
  console.log(`Hello ${name} your age is ${age}`);
}

//printAgeAndName("Amnah", 1995);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, language) {
  if (language == "en") {
    console.log(`Hello ${name}`);
  } else if (language == "es") {
    console.log(`Hola ${name}`);
  } else if (language == "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language == "tr") {
    console.log(`Merhaba ${name}`);
  }
}

//printHello("Amnah", "tr");
//printHello("Amnah", "tr");

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is biggest`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is biggest`);
  } else if (num3 > num1 && num3 > num2) {
    console.log(`${num3} is biggest`);
  }
}

printMax(3, 10, 11);
