/** we create our object  */
const foodPets ={
    dog : "the dos eat purina dog chow",
    cat : "the cat eat purina cat chow",
    parrot : "the parrot eat alpiste",
    turtle : "the turtle eat lettuce",
}
/** using just one if conditional and one object for pirnt a message */
function whatEat(pet) {
    if (foodPets[pet]) {
        console.log(foodPets[pet]);
        return;
    }
    console.warn("this animal is not added in this list")
}
   
whatEat("rabit")