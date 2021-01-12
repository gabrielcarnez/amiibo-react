import Axios from "axios";
export const FETCH_AMIIBO_REQUEST = "FETCH_AMIIBO_REQUEST";
export const FETCH_AMIIBO_SUCCESS = "FETCH_AMIIBO_SUCCESS";
export const FETCH_AMIIBO_FAILURE = "FETCH_AMIIBO_FAILURE";
export const SET_FAVORITE = "SET_FAVORITE";

export const fechAmiiboRequest = () => {
	return {
		type: FETCH_AMIIBO_REQUEST,
	};
};

export const fechAmiiboSuccess = (List) => {
	return {
		type: FETCH_AMIIBO_SUCCESS,
		payload: List,
	};
};

export const fechAmiiboFailure = (error) => {
	return {
		type: FETCH_AMIIBO_FAILURE,
		payload: error,
	};
};

export const setFavorite = (index) => {
	return {
		type: SET_FAVORITE,
		payload: index,
	};
};

const fetchAmiboos = () => {
	return (dispatch) => {
		dispatch(fechAmiiboRequest());
		Axios.get("https://amiiboapi.com/api/amiibo/")
			.then((response) => {
				dispatch(fechAmiiboSuccess(response.data.amiibo));
			})
			.catch((error) => {
				dispatch(
					fechAmiiboFailure(":( an error ocurrent, please try again")
				);
			});
	};
};

export default fetchAmiboos;
