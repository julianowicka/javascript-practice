let js = 'amazing';
if(js === 'amazing') alert('JavaScript is FUN!');
console.log(40 + 8 + 23 -10);

//Values and variables
let firstName = "Matilda";
console.log(firstName)

let jonas_matilda = "JM";
let $function = 27;
let name = "Jonas";
let pi = 3.1415;

let myFirstJob = "Flight attendant";
let myCurrentJob = "Acrobat";

let job1 = "flight attendant";
let job2 = "acrobat";

console.log(myFirstJob);

/*1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console*/

let country = 'Poland';
let continent = 'Europe';
let population = 37.75;
console.log(country);
console.log(continent);
console.log(population);

//Data Types

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaScriptIsFun = "Yes!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

yeaar = 1920;
console.log(typeof year);

console.log(typeof null);

/*LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/*LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'*/

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description1);