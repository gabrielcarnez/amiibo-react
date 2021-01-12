import { combineReducers } from "redux";
import amiibo from "./reducers/amiibo";
import page from "./reducers/page";
import filters from "./reducers/filters";
const rootReducer = combineReducers({
	amiibo,
	page,
	filters,
});

export default rootReducer;
