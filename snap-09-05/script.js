//my answer:

function myDogs() {


	const axios = require('axios')

	const getBreeds = () => {
		try {
			return axios.get('https://dog.ceo/api/breeds/list/all')
		} catch(error) {
			console.error(error)
		}
	}

	const returnBreeds = async () => {
		const breeds = getBreeds()
			.then(response => {
				const myReducer = (accumulator, currentValue) => accumulator + " " + currentValue;
				if(response.data.message) {
					console.log(
						`${Object.entries(response.data.message).reduce(myReducer)}`
					)
				}
			})
			.catch(error => {
				console.log(error)
			})
	}

	returnBreeds(myDogs)

	document.getElementById("target");
}