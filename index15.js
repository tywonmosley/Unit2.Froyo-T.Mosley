//Build code that prompt suers for a list of intergers searated by commas.
const inputHereString = prompt(
    "Input flavors here with commas seperating each choice.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee" 
);
console.log(inputHereString);
//Split the string of flavor into an array of strings.
const stringFlavorArr = inputHereString.split(",");
console.log(stringFlavorArr);


function flavorOrder(elements) {
    const flavor = {};
    for (let i = 0; i < elements.length; i++) {
      if (flavor[elements[i]]) {

        flavor[elements[i]]++;
      } else {

        flavor[elements[i]] = 1;
      }
    }
    return flavor;
}

console.log(flavorOrder(stringFlavorArr))