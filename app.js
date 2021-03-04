/* First Assignment Variable Declaration */

let country = 'India';
let continent = 'Asia';
let population = '1.38 billion';
console.log(country,',',continent,',',population);

/* ==================================================================== */

/* Second Assignment Data Types */

let isIsland = 1382;
let  abcd = true;
let language;
console.log(isIsland,country,population,language,abcd);

/* ====================================================================== */

/* Third Assignment let,const and var */

let languageH = 'Hindi';
const data = 453;
   /*data = 123;   'Its gives error because we cant define const value on other place we can only change const value where we can intisilized const variable' */
 console.log(data);

/* ======================================================================== */

let a = 40;  /* Variable declaration */
if(true) {
	let a = 70;      /* Declared variable inside the if statement */
	console.log(a)  /* It gives 70 as output */
}
console.log(a)      /* It gives 40 as output */

/* ================================================================ */

var b = 40;         /* Variable declaration */
if(true) {
	var b = 70;      /* Declared variable inside the if statement */
	console.log(a)   /* It gives 70 as output */
}
console.log(b)       /* It gives 70 as output */

/* ===================================================================== */

/* Fourth Assignment */

let countryPopulation =  100;
let result = countryPopulation/2;
    console.log('The country population is', + result); /* Output should be 50 */
countryPopulation++;
console.log(countryPopulation);
let finland = 60000000;

if(finland > countryPopulation) {
   console.log('Finland population is more then our Country');
}
else {
	console.log('Yes Our Country have more populations');
}

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);

/* ================================================================ */




 

