
//my answer:

// function myFunction() {
// 	const names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah'];
// 	for (var i = 0; i < names.length; i++) {
// 		var pick = names.slice();
// 		document.getElementById("demo").innerHTML = pick;
// 	}
// }

// in-class answer:

names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah'];


names.map(name => {
	//create p
	let newName = document.createElement("p");
//create content to add to p
	const newContent = document.createTextNode(name);
	//add text to p
	newName.appendChild(newContent);
//append p tag with content
	document.getElementById("names").appendChild(newName)
});

or

names.map(name => {
	let newName = document.createElement("p")

});

