import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const setClass = (active) => {
	return active
		? "link-page w3-bar-item w3-red w3-button"
		: "link-page w3-bar-item w3-button w3-hover-red";
};

const Pagination = (props) => {
	const { pageNumber, setPage, pageActive } = props;
	const pageLink = [];

	for (let i = 1; i <= pageNumber; i++) {
		pageLink.push(
			<span
				onClick={() => {
					setPage(i);
				}}
				className={setClass(pageActive === i)}
				key={`pagination-${i}`}
			>
				{i}
			</span>
		);
	}

	return (
		<div className="w3-row-padding w3-center w3-padding-32">
			<div className="w3-bar">{pageLink}</div>
		
		
		</div>
	);
};

Pagination.propTypes = {
	pageNumber: PropTypes.number, 
	setPage: PropTypes.func, 
	pageActive: PropTypes.number
};

Pagination.defaultProps = {};

export default Pagination;
