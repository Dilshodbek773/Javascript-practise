//  JavaScript Fundamentals – Part 1 

//LECTURE: Values and Variables

// I

// let country = "Uzbekistan";
// let continent = "Asia"
// let population = "36 MLN"

// II

// console.log(country);
// console.log(continent);
// console.log(population);

//LECTURE: Data Types

//I


//let isIland = false;
//let language;
//console.log(isIland);

//II


//console.log(typeof country);
//console.log(typeof continent);
//console.log(typeof population);

// LECTURE: let, const and var

// I

//let language = 'Uzbek'
//console.log(language);

//II

//const secondLanguage = 'Uzbek'
//console.log(secondLanguage);

//LECTURE: Basic Operators 

// I

//let population = 35000000;
//population = 35000000 / 2;
//console.log(population);

// II

//let population = 35000000;
//population++;
//console.log(population);

// III

//let population = 35000000;
//let finlandPopulation = 6000000;
//console.log(population >= finlandPopulation);

// IV

//let population = 35000000;
//let averagePopulation = 33000000;
//console.log(averagePopulation >= population);

// V

//let country = "Uzbekistan";
//let description = "Portugal is in Europe, and its 11 million people speak portuguese";
//console.log(description); 


// Coding Challenge #1 

// I

/*let markMass = 78;
let markHeight = 1.69;
let markBmi = markMass / (markHeight ** 2);
console.log(markBmi);


johnMass = 92;
johnHeight = 1.95;
johnBmi = johnMass / johnHeight ** 2;
console.log(johnBmi);

let markHigherBMI = markBmi - johnBmi;
console.log(markBmi > johnBmi);*/

// II

/*let markMass = 95;
let markHeight = 1.88;
let markBmi = markMass / (markHeight ** 2);
//console.log(markBmi);


johnMass = 85;
johnHeight = 1.76;
johnBmi = johnMass / johnHeight ** 2;
//console.log(johnBmi);

let markHigherBMI = markBmi > johnBmi;
console.log(markBmi , johnBmi , markHigherBMI);*/



// LECTURE: Strings and Template Literals

/*let country = 'Poland';
let polandSpeakPopulation = '11 million';
let language = 'portuguese';
let continent = 'Europe';
let poland = `${country} is in ${continent}, and its ${polandSpeakPopulation} people speaks ${language}.`; 
console.log(poland);*/

// LECTURE: Taking Decisions: if / else Statements 

// I

/*const country = 'Uzbekistan';
const population = '36';
let averagePopulation = '33';
if(population > averagePopulation) {
    console.log(`'${country}'s population is above average'`);
}
else{
    console.log(`'${country}'s population is ${averagePopulation - population} million below average'`);
}*/


// Coding Challenge #2 

// I

/*let markMass = 78;
let markHeight = 1.69;
let markBmi = markMass / (markHeight ** 2);
//console.log(markBmi);


let johnMass = 92;
let johnHeight = 1.95;
let johnBmi = johnMass / johnHeight ** 2;
//console.log(johnBmi);


if (markBmi > johnBmi) {
    console.log(`Mark's BMI is higher than John's!`);
} else{
    console.log(`John's BMI is higher than Mark's!`);
}*/

// II

/*let markMass = 95;
let markHeight = 1.88;
let markBmi = markMass / (markHeight ** 2);
//console.log(markBmi);


let johnMass = 85;
let johnHeight = 1.76;
let johnBmi = johnMass / johnHeight ** 2;
//console.log(johnBmi);


if (markBmi > johnBmi) {
    console.log(`Mark's BMI is higher than John's!`);
} else{
    console.log(`John's BMI (${johnBmi}) is higher than Mark's(${markBmi})!`);
}*/

//  LECTURE: Type Conversion and Coercion


// let number = '9' - '5';
// console.log(number);

//let number = '19' - '13' + '17';
//console.log(number);

//let number = '123' < 57;
//console.log(number);

// let number = 5 + 6 + '4' + 9 - 4 - 2;
// console.log(number);


// LECTURE: Equality Operators: == vs. ===

// I

// let numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));
// if (numNeighbours === 1){
//     console.log('Only 1 border!' );
// }
// else if(numNeighbours > 1){
//     console.log( 'More than 1 border');
// }else{
//     console.log('No borders');
// }


// LECTURE: Logical Operators 

// let country = 'Uzbekistan';
// let language = 'Uzbek'
// let population = '36 mln';
// let isIlind = 'No';

// if (language == 'English' && population < '50 mln' && isIlind != 'Yes')
// {
//     console.log(`You should live in ${country}`);
// }else {
//     console.log(`${country} does not meet your criteria`);
// }


