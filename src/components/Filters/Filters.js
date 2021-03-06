import React from "react";
import "./Filters.css";
import InputSearch from "components/InputSearch/InputSearch";
import InputCheck from "components/InputCheck/InputCheck";

import { useDispatch, useSelector } from "react-redux";
import { inputSearch, favorite } from "../../store/actions/filters";
import { setActivePage } from "../../store/actions/page";

const Filters = () => {
	const dispatch = useDispatch();
	const { page } = useSelector((state) => state.page);
	const { text, favorites } = useSelector((state) => state.filters);

	const setSearch = (e) => {
		dispatch(inputSearch(e.target.value));
		if (page !== 1) dispatch(setActivePage(1));
	};

	const setFavorite = (e) => {
		dispatch(favorite(e.target.checked));
		if (page !== 1) dispatch(setActivePage(1));
	};

	return (
		<div className="w3-row">
			<div className="w3-col w3-center"></div>
			<div className="w3-col w3-center">
				<small className="header-search">
					<InputSearch event={setSearch} value={text} />
				</small>
				<small className="header-search input-filter">
					<label className="input-filter">My favorites</label>
					<InputCheck event={setFavorite} checked={favorites} />
				</small>
			</div>
			<div className="w3-col w3-center"></div>
		</div>
	);
};

export default Filters;
