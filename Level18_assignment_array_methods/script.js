//A
const words = ["nice", "awesome", "amazing"];
const addTheWordCool = words.push("cool");
console.log("Add cool:", words);

//B
const amountOfElementsInArray = ['apples', 'pears', 'lemons'];
console.log(amountOfElementsInArray.length);

//C
const selectBelgiumFromBenelux = ["Belgium", "Netherlands", "Luxembourg"];
console.log(selectBelgiumFromBenelux[0]);

//D
const lastElementInArray = ["Hare", "Guinea pig", "Chicken", "Turtle"];
console.log(lastElementInArray[lastElementInArray.length - 1])

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"]
console.log(presidents.slice(1)); //copy
console.log(presidents.splice(1, 3)); //remove

//F
const stringsTogether = ['Winc', 'Academy', 'is', 'fun', ';-}'];
console.log(stringsTogether.join(' '));

//G
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combineArrays = array1.concat(array2);

console.log(combineArrays);
