const userInputString = prompt(
  "Please enter a list of comma-separated froyo flavors you would like,",
  ""
);

const flavors = userInputString.split(",");

function getFlavors(flavors) {
  const count = {};

  for (const flavor of flavors) {
    if (count[flavor]) {
      count[flavor] += 1;
    } else {
      count[flavor] = 1;
    }
  }
  return count;
}

console.log(getFlavors(flavors));
