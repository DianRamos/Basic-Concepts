/**say hello for each user using FOREACH METHOD */

var users =["jhon","mike","leah","karla"];

function sayHello() {

    users.forEach(element => console.log
        (`hello ${element}`));

}
sayHello();
console.log('====================================');

/**say hello for each user using FOR METHOD */

var users2 =["miley","bob","jhonathan","kim"];
function sayHello2(users2) {
    console.log(`hello dear, ${users2}`);

    
}


for (let index = 0; index < users2.length; index++) {
    sayHello2 (users2[index]);
    
}


console.log('====================================');

/** using While method */
var pets = ["dog","cat","parrot","turtle"];

function myPet(pets) {
    console.log(`my pet is a ${pets}`);
    
}
while (pets.length >0) {
    var pet = pets.shift();
    myPet(pet);
}


