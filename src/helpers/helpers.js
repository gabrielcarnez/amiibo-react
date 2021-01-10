export const chunk_array = (array, chunk_size) => {
	let index = 0;
	const newArray = [];

	for (index = 0; index < array.length; index += chunk_size) {
		const chunk = array.slice(index, index + chunk_size);
		newArray.push(chunk);
	}
	return newArray;
};
