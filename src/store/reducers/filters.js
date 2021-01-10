import { INPUT_SEARCH, FAVORITE } from "../actions/filters";

const default_page = {
	text: "",
	favorites: false,
};

const page = (state = default_page, action) => {
	switch (action.type) {
		case INPUT_SEARCH:
			return {
				...state,
				text: action.payload,
			};
		case FAVORITE:
			return {
				...state,
				favorites: action.payload,
			};
		default:
			return state;
			break;
	}
};

export default page;
