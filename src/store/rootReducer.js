import { combineReducers } from "redux";
import fetchAmiibos from "./reducers/amiibo";
import page from "./reducers/page";
import filters from "./reducers/filters";
const rootReducer = combineReducers({
	fetchAmiibos,
	page,
	filters,
});

export default rootReducer;
