// part 1, my answer:

let str = "Happy Monday";

function (noVowels) {
	for str remove vowels;
	return string with no vowels;
}

print string;

//part 1 in-class answer:


function removeVowels( string myString) {
	vowels = ["a", "e", "i", "o", "u"]
	string noVowels = "";
	for each (character in the string) {
		if (!(character in vowels) ) {
			noVowels = noVowels + character;
		}
	}
	return noVowels
}

// part 2, my answer:

let arr = [lots of numbers];

function (last number) {
	order the array small - large
	return arr.length -1
}

print greatest number

//part 2 in-class answer:

function greatestNumbers ( array myNumbers) {
	previousNumber = null;

	for( i=0; i<myNumbers.length; i++) {
		currentValue = myNumbers[i];
		if (previousNumber = null){
			previousNumber = currentValue ;
		} else if (currentValue > previousNumber) {
			previousNumber = currentValue
		}
	return previousNumber;
}

//part 3, my answer:

let fib = [0, 1]

function (fib) {
	while length of items in arr < 100
		add two items = 3rd item
		let arr length increment,

	return arr[];
}

print arr of 100 numbers

//part 3, in-class answer:

function f100 () {
	array fib = [1, 1]

	for (i=2, i<=100, i++) {
		fib[i] = fib[i-1] + fib[i-2];
	}
	return fib;
}
		

}

