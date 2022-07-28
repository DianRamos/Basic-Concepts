const myGlobal = 0;

function myFunction() {
    const myConst = 1;
    console.log(myGlobal);

    //internal function (closure)
    function parent() {
        const inner = 2;
        console.log(myConst);
        console.log(myGlobal);

        function child() {
            console.log(inner, myConst, myGlobal);
            
        }
       return child(); 
    }
    return parent();
}
myFunction();