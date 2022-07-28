// variables

/* declaration */ 
var a; 

/* declare and assign variables*/ 
var b = 'b'; 

/** re asign */
b = 'bb';

/**declaration */
var a = 'aa'; 


/** example for a Global Scope */

var animal = 'Ape'; // this is a global variable
console.log(animal);

//this variable can be used in other code blocks that required it
// for example in this function.

function bestAnimal() {
  console.log(animal);
}

bestAnimal();

/** in this case tha variable country was initialized but not declared
 * so this variable has a global scope and can be called from outside the function
 */
function countries() {
  country = 'Colombia'; // global
  console.log(country);
}

countries();
console.log(country);