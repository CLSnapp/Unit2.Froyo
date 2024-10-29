const userInputString = prompt(
  "Please enter a list of comma-separated froyo flavors you would like,",
  ""
);
//const (variable)
const flavors = userInputString.split(",");

//function name(parameter)
function getFlavors(flavors) {
  //this creates an empty object
  const count = {};

  for (const flavor of flavors) {
    if (count[flavor]) {
      //if line 15 is true it will add 1 to that flavor
      count[flavor] += 1;
      //if line 15 is false it will make a new flavor in the count object
    } else {
      count[flavor] = 1;
    }
  }
  return count;
}
//console.log(function(array));
console.log(getFlavors(flavors));
