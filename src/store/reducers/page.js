import { SET_PAGE } from "../actions/page";

const default_page = {
	page: 1,
};

const page = (state = default_page, action) => {
	switch (action.type) {
		case SET_PAGE:
			return {
				...state,
				page: action.payload,
			};
		default:
			return state;
			break;
	}
};

export default page;
