//Build code that prompt suers for a list of intergers searated by commas.
const inputHereString = prompt(
    "Input flavors here with commas seperating each choice.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee" 
);
console.log(inputHereString);
//Split the string of flavor into an array of strings.
const stringFlavorArr = inputHereString.split(",");
console.log(stringFlavorArr);

//Convert the array of strings into array of flavors
const flavors = [];
for (let favs = 0; favs < stringFlavorArr.length; favs++) {
    const flavFlav = stringFlavorArr[favs];
    const favor = flavFlav;
    flavors.push(favor)
} 
console.log(flavors)