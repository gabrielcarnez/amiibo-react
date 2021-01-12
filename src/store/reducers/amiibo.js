import { Store } from "helpers/helpers";
import {
	FETCH_AMIIBO_REQUEST,
	FETCH_AMIIBO_SUCCESS,
	FETCH_AMIIBO_FAILURE,
	SET_FAVORITE,
} from "../actions/amiibo";

const default_amiibo = {
	loading: false,
	data: [],
	error: null,
};

const amiibo = (state = default_amiibo, action) => {
	switch (action.type) {
		case FETCH_AMIIBO_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_AMIIBO_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false,
				error: null,
			};
		case FETCH_AMIIBO_FAILURE:
			return {
				...state,
				error: action.payload,
				loading: false,
				data: [],
			};
		case SET_FAVORITE:
			const { favorite } = state.data[action.payload];
			state.data[action.payload].favorite = !favorite;
			const _temp = Object.assign({}, state.data[action.payload]);
			delete _temp["favorite"];
			delete _temp["index"];
			Store.setItem("amiibo-favorites", _temp);
			return state;
		default:
			return state;
			break;
	}
};

export default amiibo;
