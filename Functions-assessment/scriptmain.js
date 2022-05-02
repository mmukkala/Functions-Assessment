function functionLetterName() {
	const name = "Matthew";
	firstLetter = name.charAt(0);
	alert("The name " + name + " starts with the letter " + firstLetter);
  }

function divisibleByTwo(num) {
	if (num % 2 == 0)
		return true
	 else 
		return false
} 

const num1 = 8;
const num2 = 9;

console.log("The number "+num1+" is divisible by 2:" +divisibleByTwo(num1));
console.log("The number "+num2+" is divisible by 2:" +divisibleByTwo(num2));

function largestNum() {
	return Math.max.apply(null, arr);
} 

const arr = [5, 10, 15, 20, 25];

console.log(largestNum(arr));

functionLetterName();
divisibleByTwo();
largestNum();