export const chunk_array = (array, chunk_size) => {
	let index = 0;
	const newArray = [];

	for (index = 0; index < array.length; index += chunk_size) {
		const chunk = array.slice(index, index + chunk_size);
		newArray.push(chunk);
	}
	return newArray;
};

/*Return [true,false] if the localstorage exist */
const checkStore = (store) => {
	return localStorage.getItem(store) || false;
};

const createStore = (store) => {
	localStorage.setItem(store, JSON.stringify([]));
};

const initStore = (store) => {
	let _st = [];
	if (checkStore(store)) {
		_st = JSON.parse(localStorage.getItem(store));
	}
	localStorage.setItem(store, JSON.stringify(_st));
	return _st;
};

const getStore = (store) => {
	if (checkStore(store)) {
		return JSON.parse(localStorage.getItem(store));
	} else {
		return [];
	}
};

const setItem = (store, item) => {
	let _st = [];
	if (checkStore(store)) {
		_st = JSON.parse(localStorage.getItem(store));
	}
	_st.push(item);
	localStorage.setItem(store, JSON.stringify(_st));
};

const checkItem = (store, item) => {
	const _st = getStore(store);
	return _st.find((i) => JSON.stringify(item) === JSON.stringify(i));
};

export const Store = {
	checkStore,
	createStore,
	getStore,
	setItem,
	initStore,
	checkItem,
};
