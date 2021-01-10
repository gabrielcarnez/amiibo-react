import { combineReducers } from "redux";
import fetchAmiibos from "./reducers/fetchAmiibos";

const rootReducer = combineReducers({
	fetchAmiibos,
});

export default rootReducer;
