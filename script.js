function addTogether() {
    
    if (arguments.length === 2 && typeof arguments[0] === "number" && typeof arguments[1] === "number") {
      return arguments[0] + arguments[1];
    } else if (arguments.length === 1 && typeof arguments[0] === "number") {
      return (x) => {
        if (typeof x === "number") {
          return x + arguments[0];
        } 
      } 
    } 

    return undefined;
    
}

console.log(addTogether(5)(7)); // prints 12
