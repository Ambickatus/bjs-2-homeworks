function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((element, index) => {
		return element === arr2[index];
	});
}

function getUsersNamesInAgeRange(users, gender) {
	let filterUsers = users.filter(element => element.gender === gender);

	if (filterUsers.length === 0)
		return 0;

	let sumOfAges = filterUsers.map(element => element.age);

	let result = (sumOfAges.reduce((acc, age) => (acc + age))) / sumOfAges.length;

	return result
}