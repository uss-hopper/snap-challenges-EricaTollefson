// functions challenge - Function #1 - my attempt; forgot console.log()

function calculateAnswer(num1, num2) {
	return num1 * num2;
}

calculateAnswer(2, 3);

// in class solution
function operation (num1, num2) {
	let guzinta = num1 / num2;
	return guzinta;
};

console.log(operation(6, 3));

// or simplified:

function operation (num1, num2) {
	return num1 / num2;
};

console.log(operation(6, 3));


// Function #2 - my attempt - I forgot console.log()

let str1 = "Hi ";
let str2 = "Everybody!";

function combine(str1, str2) {
	return str1 + str2;
}

combine(str1, str2);


// in-class solution:

function cat (string1, string2) {
	return string1 + " " + string2;
}

console.log(cat('thingOne' , 'thingTwo'));
