//Build code that prompt suers for a list of intergers searated by commas.
const inputHereString = prompt(
    "Input flavors here with commas.","vanilla,vanilla,vanilla,strawberry,coffee,coffee" 
);
//Split the string of flavor into an array of strings.
const stringFlavorArr = inputHereString.split(",")
console.log(stringFlavorArr);
