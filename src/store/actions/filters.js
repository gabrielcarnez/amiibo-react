export const INPUT_SEARCH = "INPUT_SEARCH";
export const FAVORITE = "FAVORITE";

export const inputSearch = (text) => {
	return {
		type: INPUT_SEARCH,
		payload: text,
	};
};

export const favorite = (isFavorite) => {
	return {
		type: FAVORITE,
		payload: isFavorite,
	};
};

