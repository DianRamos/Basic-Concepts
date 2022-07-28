/** Local Scope */

function sayHello() {
    let userName = "Diana";
    console.log(userName);
    
    if (userName === "Diana") {
        console.log(`hello ${userName}!`);
    }
}
/** the variable userName was declared inside the function say hello
 * so just can be used here 
 * */

sayHello();

/** if you wan to use it out side you can receive
 * an error message because this variable is undefined
 */ 

console.log(userName);