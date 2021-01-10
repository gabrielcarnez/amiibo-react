import React from "react";
import PropTypes from "prop-types";
import "./InputSearch.css";

const InputSearch = (props) => {
	const { event } = props;
	return (
		<input
			onKeyUp={event}
			type="text"
			name="input-search"
			className="input-search"
			placeholder="Mario"
		/>
	);
};

InputSearch.propTypes = {
	event: PropTypes.func,
};

InputSearch.defaultProps = {};

export default InputSearch;
