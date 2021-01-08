import {
	FETCH_AMIIBO_REQUEST,
	FETCH_AMIIBO_SUCCESS,
	FETCH_AMIIBO_FAILURE,
} from "../actions/fetchAmiibos";

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
				loading:true
			};
		case FETCH_AMIIBO_SUCCESS:
			return {
				...state,
				data:action.payload,
				loading:false,
				error: null,
			};
		case FETCH_AMIIBO_FAILURE:
			return {
				...state,
				error:action.payload,
				loading:false,
				error: [],
			};
		default:
			return state;
			break;
	}
};

export default amiibo;
