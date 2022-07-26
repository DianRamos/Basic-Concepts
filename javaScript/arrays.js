var info =["name","lastname","age","country"];

console.log('====================================');
console.log("the length of info is " +info.length);
/* show the element for the first position*/
console.table("the first element is " +info [0])

/*add an object to the end of the array */
console.table("the new length is "+info.push("nationality"))
console.table(info)

/*remove the last object of the array */
console.table("removing the element "+info.pop("nationality"))
console.table(info)

/*add an object to the start of the array */
console.table("adding a new element "+info.unshift("gender"))
console.table(info)


/*remove an object to the start of the array */
console.table("removing element "+info.shift("gender"))
console.table(info)

/**how to know the index value for any elemente of the array */
console.table("the index for the element lastname is " +info.indexOf("lastname"))
console.table(info)

console.log('====================================');
