 /** Block scope */

 function cars() {
     if (true) {
         var car1 = "Audi";  //this varible has local scope
         let car2 = "Porshe"; // the varibles car2 and car3 has block scope
         const car3 = "Toyota";
     }
     console.log(car1);

     /** if you call this variables outside the block you can
      * receive an error message like "error reference, car is not defiend
      * because this varibles has an block scope so just can be used in the block to be declared as let and const
      */
     console.log(car2);
     console.log(car3);
 }

 cars();

 /** how you call varibles with block scope? */

 function cars() {
    if (true) {
        var car1 = "Audi";  
        let car2 = "Porshe"; 
        const car3 = "Toyota";
        //you can accesed this varibles inside the block
        console.log(car2);
        console.log(car3);
    }
    console.log(car1);
}

cars();