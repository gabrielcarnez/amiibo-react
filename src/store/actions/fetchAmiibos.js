import Axios from "axios";
export const FETCH_AMIIBO_REQUEST = "FETCH_AMIIBO_REQUEST";
export const FETCH_AMIIBO_SUCCESS = "FETCH_AMIIBO_SUCCESS";
export const FETCH_AMIIBO_FAILURE = "FETCH_AMIIBO_FAILURE";

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

const fechAmiibo = () => {
	return (dispatch) => {
		dispatch(fechAmiiboRequest());
		Axios.get("https://amiiboapi.com/api/amiibo/")
			.then((response) => {
				dispatch(fechAmiiboSuccess(response.data.amiibo));
			})
			.catch((error) => {
				dispatch(fechAmiiboFailure("ererewrererer"));
			});
	};
};

export default fechAmiibo;
