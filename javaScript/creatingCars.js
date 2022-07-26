function createCar(color, brand, model, transmition) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.transmition = transmition;
}
var cars = [];

while (cars.length <=5) {
    var color = prompt('enter color');
    var brand = prompt('enter brand');
    var model = prompt('enter model');
    var transmition = prompt('enter tansmition');

    cars.push(newCar = new createCar (color,brand,model,transmition));
}

for(let i = 0 ; i < cars.length ; i++){
    console.log(cars[i]);
  }


