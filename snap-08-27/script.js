/*part 1, example of looping through an array to count, then my answer:
const arr = [1, 1, 2, 3, 3, 3];
const count = {};

for (let i = 0; i < arr.length; ++i) {

	if (!count[arr[i]]){
		count[arr[i]] = 0;
	}

	++count[arr[i]];
	console.log(count)
} */

let arr = [set of numbers];
let count = {} create set-up for answer

for ( i=0, i - count array length, i increment) {
	loop through the array
	check for each number in the array, count arr.i
	increment count of each number ++
	console.log(count results);

}

//part 1, in-class answer:
numbers = [ 1, 7, 5, 1, 3, 5, 1] //we want: count = ["1": 3, "7": 1, "3": 1, "5":2]
for each (Numbers as Number) {
	count [Number] ++
}


//part 2, my answer:

const numbers = numbers between 5 and 10 inclusive

for numbers {
	if (number % 2 = 0), return fizz,
	 if else (number % 3 = 0), return buzz,
		else (number % 2 = 0 && number % 3 == 0), return baz,
}
console.log(numbers);

//part 2, in-class answer:
For i = 1 to x {
	if i%6 =0 {
		output = "baz"
	}
	if else i%3 = 0 {
		output = "buzz"
	}
	if else i%2 = 0 {
		output = "fizz"
	}
	else {
		output = "i"
	}
}
print(output)



