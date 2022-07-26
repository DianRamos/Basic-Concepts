var cars = {
    color:"red",
    brand: "ferrary",
    model: 2022,
    transmition: "automatic",

    /**implementing objects methods */
    detailCar: function () {
        console.log(`this car is an ${this.brand} color ${this.color}`);
    }
};

console.log("the brand is " +cars.brand);

console.log('====================================');
console.log('accesing function object');


console.log(cars.detailCar());

console.log('====================================');
console.log('Using constructor for create new items');
function createCar(color, brand, model, transmition) {
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.transmition = transmition;

    }

var newCar = new createCar ("blue","kia",2021,"mecanic");
console.log(newCar);