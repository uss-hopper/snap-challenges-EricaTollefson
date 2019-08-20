



/** Create an array
 *
 * var str = "Ensign Babyface! Your shields were failing, sir. This should be interesting. Your head is not an artifact! What's a knock-out like you doing in a computer-generated gin joint like this? Why don't we just give everybody a promotion and call it a night - 'Commander'? But the probability of making a six is no greater than that of rolling a seven. What? We're not at all alike! I recommend you don't fire until you're within 40,000 kilometers. Wouldn't that bring about chaos? Flair is what marks the difference between artistry and mere competence."
var array = str.split(" ");
console.log(array);**/



var arrayOfWords = [
	'Ensign',          'Babyface!',               'Your',
	'shields',               'were',           'failing,',
	'sir.',               'This',             'should',
	'be',       'interesting.',               'Your',
	'head',                 'is',                'not',
	'an',          'artifact!',             "What's",
	'a',          'knock-out',               'like',
	'you',              'doing',                 'in',
	'a', 'computer-generated',                'gin',
	'joint',               'like',              'this?',
	'Why',              "don't",                 'we',
	'just',               'give',          'everybody',
	'a',          'promotion',                'and',
	'call',                 'it',                  'a',
	'night',                  '-',       "'Commander'?",
	'But',                'the',        'probability',
	'of',             'making',                  'a',
	'six',                 'is',                 'no',
	'greater',               'than',               'that',
	'of',            'rolling',                  'a',
	'seven.',              'What?',              "We're",
	'not',                 'at',                'all',
	'alike!',                  'I',          'recommend',
	'you',              "don't",               'fire',
	'until',             "you're",             'within',
	'40,000',        'kilometers.',           "Wouldn't",
	'that',              'bring',              'about',
	'chaos?',              'Flair',                 'is',
	'what',              'marks',                'the',
	'difference',            'between',           'artistry',
	'and',               'mere',        'competence.'
];

// my answer, only filters for lower case e:

/**function filterWord(arrayOfWords, index, letter) {
	var filteredWords = arrayOfWords.filter(function(word) {
		return word[index] !== letter; //should have added .toLowerCase() between word and [index]
	});
	return filteredWords
}
console.log(filterWord(arrayOfWords, 0, 'e'));**/


//in-class answer:
let str = "Ensign Babyface! Your shields were failing, sir. This should be interesting. Your head is not an artifact! What's a knock-out like you doing in a computer-generated gin joint like this? Why don't we just give everybody a promotion and call it a night - 'Commander'? But the probability of making a six is no greater than that of rolling a seven. What? We're not at all alike! I recommend you don't fire until you're within 40,000 kilometers. Wouldn't that bring about chaos? Flair is what marks the difference between artistry and mere competence.";
let array = str.split(" ");
let filteredStr = array.filter(word=> word[0].toLowerCase()!=='e');
let words = filteredStr.join(' ');
console.log(words);



