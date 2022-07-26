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