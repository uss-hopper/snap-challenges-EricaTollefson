/*Part 1, my code:
*
*Given weightOunces;
*Set value of weightOunces;
*Set weightGrams to: weightOunces * 28.35;
*print weightGrams;
 */

//part 1, in class answer, code-along:

/**
 *Convert a weight to mass or grams
 *
 * @param mass The weight or mass to be converted
 * @param units The abbreviation for the units specified in the mass.
 * @return The converted mass in grams
 **/

function convertToGrams(mass, units) {
	convertedValue = 0;

	if (units === 'g') {
		return mass;
	} else if (units === 'lbs') {
		return mass * 453.592;
	} else if (units === 'oz') {
		return mass * 28.35; {
		}
	} else if  (units === 'kg') {
			return mass * 1000;
		}
		else if (units === 'mg') {
			return mass / 1000;
		}

	return $convertedValue;
}
	console.log(convertToGrams(10, 'lbs'));



//part 2, my code:

/*var i;
for(i=1; i++) {
	console.log(i);
	if(i % 2 === 0 && i <= i) {
		;
	}
	else if(i % 2 != 0) {
		;
	}
} */

//part 2, code along

/**
 * Adds unique positive factors of a number.
 *
 *@param number The number to be factored
 *@return The sum of the factors
 **/

function sumUniquePositiveFactors (number) {
	let sum = 0;

	for (i=1; i<=number; i++) {

		if(number % i === 0) {
			sum = sum + i;
		}
	}

	return sum;
}
console.log(sumUniquePositiveFactors(18));