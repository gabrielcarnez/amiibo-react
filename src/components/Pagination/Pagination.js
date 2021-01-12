import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const setClass = (active) => {
	return active
		? "link-page w3-bar-item w3-red w3-button"
		: "link-page w3-bar-item w3-button w3-hover-red";
};

const pageLinks = ({ pageNumber, setPage, pageActive }) => {
	const links = [];
	for (let i = 1; i <= pageNumber; i++) {
		links.push(
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

	return links;
};

const Pagination = ({ pageNumber, setPage, pageActive }) => {
	return (
		<div className="w3-row-padding w3-center w3-padding-32">
			<div className="w3-bar">
				{pageLinks({ pageNumber, setPage, pageActive })}
			</div>
		</div>
	);
};

Pagination.propTypes = {
	pageNumber: PropTypes.number,
	setPage: PropTypes.func,
	pageActive: PropTypes.number,
};

Pagination.defaultProps = {};

export default Pagination;
