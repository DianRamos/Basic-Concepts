 const informacion =[
        {
        nombre:"camilo",
        apellido:"martinez",
        edad:25
        },
        {
          nombre:"diana",
          apellido:"ramos",
          edad:28
          }
]

//funciones declarativas o declaradas

function sayHello() {

   //recorremos el arreglo con forEach para imprimir
  //el mensaje declarado en la funcion
    informacion.forEach(element => console.log(`hello ${element.nombre}`));

}
//invocamos la funcion
sayHello();


//function expresed
var myFunction = function(a,b){
    return a+b;
}
console.log(myFunction(4,5));


/** fynction of recursion */

const rec = (x) => {
  if (x=== 0) {
    return 0
  }
  else {
    return rec (x-1)
  }
}

console.log(rec(5));

/** posbles answers
 * 1. 5
 * 2. 4
 * 3. 0
 * 4. undefined
 */