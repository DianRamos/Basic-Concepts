
function sayHello() {
    let userName = "Diana";

    function displayUserName() {
        return`hello ${userName}`;
    }
    return displayUserName;
}

const hello = sayHello();
console.log(hello); // we return the description of the function.
console.log(hello());// we retunr the value of the function